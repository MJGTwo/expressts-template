declare namespace Signal {
  interface Signal {
    name: string;
    value: number;
  }

  interface SIGNUP extends Signal {
    name: "SIGNUP";
    value: 1;
  }

  interface SIGINT extends Signal {
    name: "SIGINT";
    value: 2;
  }

  interface SIGTERM extends Signal {
    name: "SIGTERM";
    value: 15;
  }

  type Shutdown = SIGNUP | SIGINT | SIGTERM;
}
