const path = require("path");
const express = require("express");

const app = express();
const server = require("http").Server(app);
const io = require("socket.io")(server);

const { Player } = require("./server/player.js");
const { Lobby } = require("./server/lobby.js");

const users = io.of("/controls");
const viewer = io.of("/viewer");

// const { Domino } = require("./public/domino.js");

// const domino = new Domino();

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
  const socketCount = count++;
  console.log("socketCount", socketCount);

  let player = null;
  let lobby = null;

  socket.on("player.create", ({ playerName }, cb) => {
    player = Player.create(playerName, socket);
    console.log("player.create", playerName);
    cb(player);
  });

  socket.on("lobby.list", (cb) => {
    const list = Lobby.list.entries();
    console.log("lobby.list");
    cb(list);
  });

  socket.on("lobby.create", ({ lobbyName }, cb) => {
    lobby = Lobby.create(lobbyName);
    lobby.add(player);
    lobby.host(player);
    console.log("lobby.create", lobbyName);
    cb(lobby);
  });

  socket.on("lobby.join", ({ lobbyId }, cb) => {
    lobby = Lobby.list.get(lobbyId);
    lobby.add(player);
    console.log("lobby.join", lobby.lobbyName);
    cb(lobby);
  });

  socket.on("disconnect", () => {
    if (lobby) {
      lobby.remove(player);
    }

    if (player) {
      Player.delete(player);
    }
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
