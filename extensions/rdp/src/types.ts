export interface ExecResult {
  readonly stdout: string;
  readonly stderr: string;
}

export interface RDPConfig {
  readonly server: string;
  readonly platform: string;
}
