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

server.on("listening", onListen);
server.on("error", onError);

server.listen(PORT);
