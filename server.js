const path = require("path");
const express = require("express");

const app = express();
const server = require("http").Server(app);
const io = require("socket.io")(server);

const users = io.of("/controls");
const viewer = io.of("/viewer");

const { Domino } = require("./public/domino.js");

const domino = new Domino();

// ========================

server.listen(8080, () => {
  console.log(`Server running at http://localhost:8080/`);
});

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "domino.html"));
});

app.get("/viewer", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

app.use(express.static("public"));

// ========================
let count = 0;
io.on("connection", (socket) => {
  const playerId = count++;
  console.log("playerId", playerId);

  socket.on("createPlayer", ({ playerName }, cb) => {
    console.log("createPlayer", playerName);
    cb({ playerName, playerId });
  });
});

// ========================

function sendClientsCount() {
  users.clients((err, clients) => {
    if (err) {
      throw new Error(err);
    }
    users.emit("updateClientCount", clients.length);
    viewer.emit("updateClientCount", clients.length);
  });
}

function addSocketEvents(socket) {
  socket.on("click", (data) => {
    viewer.emit("click", data);
  });

  socket.on("disconnect", () => {
    sendClientsCount();
  });
}

// =========================

users.on("connection", (socket) => {
  addSocketEvents(socket);
  sendClientsCount();
});

viewer.on("connection", () => {
  sendClientsCount();
});
