require("dotenv").config();
import * as Express from "express";

export const app = Express();

const hello = (_req: Express.Request, res: Express.Response) => {
  res.status(200).send("<p> Hello, World!</p>");
};

app.get("/", hello);
