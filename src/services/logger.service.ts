import * as Winston from "winston";
import { format, transports } from "winston";

import { name } from "../../package.json";

let level: string;
level = "info";

const loggerConfig: Winston.LoggerOptions = {
  level,
  format: format.combine(
    format.errors({ stacks: true }),
    format.splat(),
    format.json()
  ),
  defaultMeta: { service: `${name}` },
  transports: [
    new transports.Console({
      format: format.combine(format.colorize(), format.simple())
    })
  ]
};

export const logger: Winston.Logger = Winston.createLogger(loggerConfig);
