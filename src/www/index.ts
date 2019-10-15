import * as http from "http";
import { logger } from "../services/logger.service";
import { app } from "../index";

const { PORT } = process.env;

const server: http.Server = http.createServer(app);

const onListen = () => {
  logger.info(`Listening on localhost:${PORT}`);
};

const onError = (err: Error) => {
  logger.error(`Error ${err.name}: ${err.message}`);
};

const signals: Signal.Shutdown[] = [
  { name: "SIGNUP", value: 1 },
  { name: "SIGINT", value: 2 },
  { name: "SIGTERM", value: 15 }
];

const shutdown = ({ name, value }: Signal.Shutdown) => {
  logger.info("shutdown!");
  server.close(() => {
    logger.info(`server stopped by ${name} with value ${value}`);
    process.exit(128 + value);
  });
};

signals.map(({ name, value }: Signal.Signal) => {
  (process as NodeJS.EventEmitter).on(name, () => {
    logger.info(`process received a ${name} signal`);
    shutdown({ name, value } as Signal.Shutdown);
  });
});

server.on("listening", onListen);
server.on("error", onError);

server.listen(PORT);
