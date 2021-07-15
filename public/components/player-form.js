import { client, createPlayer } from "../client.js";

export const $PLAYER_FORM = document.getElementById("player-form");
export const $PLAYER_NAME = document.getElementById("player-name");
export const $PLAYER_SUBMIT = document.getElementById("player-submit");

async function handlePlayerSubmit(event) {
  event.preventDefault();
  const data = new FormData(event.target);
  const payload = Object.fromEntries(data.entries());
  console.log(payload);

  // disable form
  $PLAYER_FORM.setAttribute("disabled", true);
  $PLAYER_NAME.setAttribute("disabled", true);
  $PLAYER_SUBMIT.setAttribute("disabled", true);

  //send event
  const { playerName, playerId } = await createPlayer(payload.playerName);
  client.store.setState({ playerName, playerId });
}

$PLAYER_FORM.addEventListener("submit", handlePlayerSubmit);
