import "./components/player-form.js";
import { lobby } from "./components/lobby-form.js";
import { Client } from "./libs/client.js";

export const client = new Client();

client.add(lobby);

window.store = client.store;

export const $STATUS = document.getElementById("status");

client.socket.on("connect", () => {
  $STATUS.innerText = "connected";
});

client.socket.on("disconnect", () => {
  $STATUS.innerText = "disconnected";
});

export const createPlayer = async (playerName) => {
  return new Promise((resolve, reject) => {
    client.socket.emit("createPlayer", { playerName }, resolve);
  });
};

client.store.update();
