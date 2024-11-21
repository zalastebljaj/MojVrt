import express from "express";
import { dirname, join } from "path";
import { fileURLToPath } from "url";
import cookieParser from "cookie-parser";
import logger from "morgan";

import apiRouter from "./api/routes/index.js";

var server = express();
const __dirname = dirname(fileURLToPath(import.meta.url));

server.use(logger('dev'));
server.use(express.json());
server.use(express.urlencoded({ extended: false }));
server.use(cookieParser());
server.use(express.static(join(__dirname, 'public')));

server.use('/api', apiRouter);

export default server;
