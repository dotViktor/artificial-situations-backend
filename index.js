import express from "express";
import { createServer } from "node:http";
import { expressRoutes } from "./app/expressRouter/expressRoutes.js";
import { Server as socketServer } from "socket.io";
import { instrument } from "@socket.io/admin-ui";

import cors from "cors";
import socketRoutes from "./app/socketRouter/socketRoutes.js";

const app = express();
const server = createServer(app);
const io = new socketServer(server);

app.use(cors());
app.use(express.json());

instrument(io, {
  auth: false,
  mode: "development",
});

io.on("connection", socketRoutes);
app.use("/api", expressRoutes);

server.listen(3000, () => {
  console.log("server running at http://localhost:3000");
});
