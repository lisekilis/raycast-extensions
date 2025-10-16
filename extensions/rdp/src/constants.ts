// Pre-compile regex patterns for better performance
export const IP_REGEX = /^(\d{1,3}\.){3}\d{1,3}$/;
export const HOSTNAME_REGEX =
  /^[a-zA-Z0-9]([a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(\.[a-zA-Z0-9]([a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;

// Command templates
export const COMMANDS = {
  WINDOWS: "mstsc /v:",
  MACOS: "open rdp://",
} as const;

// User messages
export const MESSAGES = {
  NO_SERVER: "No server address provided",
  INVALID_FORMAT: "Invalid server address format",
  UNSUPPORTED_OS: "Unsupported OS",
  STARTING_SESSION: "Starting RDP session to",
  ERROR_SESSION: "Error starting RDP session:",
} as const;

// Supported platforms
export const SUPPORTED_PLATFORMS = {
  WINDOWS: "win32",
  MACOS: "darwin",
} as const;
