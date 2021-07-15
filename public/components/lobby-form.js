export const $LOBBY_FORM = document.getElementById("lobby-form");
export const $LOBBY_NAME = document.getElementById("lobby-name");
export const $LOBBY_NEW_NAME = document.getElementById("lobby-new-name");
export const $LOBBY_SUBMIT = document.getElementById("lobby-submit");
export const $LOBBY_REFRESH = document.getElementById("lobby-refresh");
const $LOBBY_ALL = [
  $LOBBY_FORM,
  $LOBBY_NAME,
  $LOBBY_NEW_NAME,
  $LOBBY_SUBMIT,
  $LOBBY_REFRESH,
];

function setDisabled(disabled) {
  if (disabled) {
    for (const el of $LOBBY_ALL) {
      el.setAttribute("disabled", true);
    }
  } else {
    for (const el of $LOBBY_ALL) {
      el.removeAttribute("disabled");
    }
  }
}

export function lobby(client) {
  client.store.subscribe((state) => {
    if (!state.playerId) {
      console.log("dis", state.playerId);
      setDisabled(true);
    } else {
      console.log("able", state.playerId);
      setDisabled(false);
    }
  });
}
