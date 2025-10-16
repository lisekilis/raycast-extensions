import { LaunchProps, showToast, Toast } from "@raycast/api";
import { exec } from "child_process";
import { promisify } from "util";
import { MESSAGES } from "./constants";
import { validateServerInput, getCommandForOS, logExecResult } from "./utils";
import type { ExecResult } from "./types";
import { showFailureToast } from "@raycast/utils";

const execAsync = promisify(exec);

export default async function main(props: LaunchProps) {
  const { server } = props.arguments;

  // Single comprehensive validation
  const validation = validateServerInput(server);
  if (!validation.isValid) {
    await showToast(Toast.Style.Failure, validation.error!);
    return;
  }

  // Show success toast with server info
  await showToast(Toast.Style.Success, `${MESSAGES.STARTING_SESSION} ${server}`);

  try {
    const command = getCommandForOS(server);
    if (!command) {
      await showToast(Toast.Style.Failure, MESSAGES.UNSUPPORTED_OS);
      return;
    }

    const result: ExecResult = await execAsync(command);
    logExecResult(result);
  } catch (error) {
    await handleExecError(error);
  }
}

async function handleExecError(error: unknown): Promise<void> {
  await showFailureToast(error, { title: MESSAGES.ERROR_SESSION });
}
