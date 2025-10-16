import { IP_REGEX, HOSTNAME_REGEX, COMMANDS, SUPPORTED_PLATFORMS } from "./constants";
import type { ExecResult } from "./types";

/**
 * Validates if the server address is in a valid format
 * Supports IP addresses and hostnames
 */
export function isValidServerAddress(server: string): boolean {
  return IP_REGEX.test(server) || HOSTNAME_REGEX.test(server);
}

/**
 * Escapes shell arguments to prevent command injection
 */
export function escapeShellArg(arg: string): string {
  return `"${arg.replace(/"/g, '\\"')}"`;
}

/**
 * Generates the appropriate RDP command based on the operating system
 */
export function getCommandForOS(server: string): string | null {
  const os = process.platform;
  const escapedServer = escapeShellArg(server);

  switch (os) {
    case SUPPORTED_PLATFORMS.WINDOWS:
      return `${COMMANDS.WINDOWS}${escapedServer}`;
    case SUPPORTED_PLATFORMS.MACOS:
      return `${COMMANDS.MACOS}${escapedServer}`;
    default:
      return null;
  }
}

/**
 * Logs the execution result to console
 */
export function logExecResult(result: ExecResult): void {
  if (result.stdout) {
    console.log(`stdout: ${result.stdout}`);
  }
  if (result.stderr) {
    console.error(`stderr: ${result.stderr}`);
  }
}

/**
 * Checks if the current platform is supported
 */
export function isSupportedPlatform(): boolean {
  return Object.values(SUPPORTED_PLATFORMS).includes(
    process.platform as (typeof SUPPORTED_PLATFORMS)[keyof typeof SUPPORTED_PLATFORMS],
  );
}
