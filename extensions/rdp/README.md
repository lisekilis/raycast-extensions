# Remote Desktop Connector for Raycast

> A fast and secure Raycast extension for starting [Remote Desktop Protocol](https://wikipedia.org/wiki/Remote_Desktop_Protocol) connections

## Features

- 🚀 **Fast Connection**: Start RDP sessions directly from Raycast
- 🔒 **Secure**: Input validation and command injection protection
- 🖥️ **Cross-Platform**: Works on both Windows and macOS
- ⚡ **Optimized**: Pre-compiled regex patterns and efficient validation
- 🎯 **Simple**: Just type the server address and connect

## Supported Platforms

| Platform    | Command             | Description                              |
| ----------- | ------------------- | ---------------------------------------- |
| **Windows** | `mstsc /v:server`   | Uses Microsoft Remote Desktop Client     |
| **macOS**   | `open rdp://server` | Opens default RDP-compatible application |

## Requirements

- **Windows**: Microsoft Remote Desktop Client (built-in)
- **macOS**: Any RDP-compatible application (Microsoft Remote Desktop, Jump Desktop, etc.)
- **Raycast**: Version 1.0 or later

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.
