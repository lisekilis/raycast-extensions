import { LaunchProps, showToast, Toast } from "@raycast/api";
import { exec } from "child_process";
import { promisify } from "util";
import { MESSAGES } from "./constants";
import { isValidServerAddress, getCommandForOS, logExecResult, isSupportedPlatform } from "./utils";
import type { ExecResult } from "./types";
import { showFailureToast } from "@raycast/utils";

const execAsync = promisify(exec);

export default async function main(props: LaunchProps) {
  const { server } = props.arguments;

  // Early validation with optimized error handling
  if (!server) {
    await showToast(Toast.Style.Failure, MESSAGES.NO_SERVER);
    return;
  }

  if (!isValidServerAddress(server)) {
    await showToast(Toast.Style.Failure, MESSAGES.INVALID_FORMAT);
    return;
  }

  if (!isSupportedPlatform()) {
    await showToast(Toast.Style.Failure, MESSAGES.UNSUPPORTED_OS);
    return;
  }

  await showToast(Toast.Style.Success, MESSAGES.STARTING_SESSION, server);

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
