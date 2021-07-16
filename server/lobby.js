class Lobby {
  static counter = 0;

  static list = new Map();

  static create(lobbyName) {
    const lobby = new Lobby(Lobby.counter++, lobbyName);
    Lobby.list.set(lobby.id, lobby);
    return lobby;
  }

  static delete(lobby) {
    return Lobby.list.delete(lobby.id);
  }

  constructor(id, lobbyName) {
    this.id = id;
    this.lobbyName = lobbyName;
    this.players = new Set();
    this.host = null;
  }

  add(player) {
    this.players.add(player);
  }

  host(player) {
    this.host = player;
  }

  remove(player) {
    this.players.delete(player);

    if (this.players.size >= 1) {
      this.host(this.players.values().next().value);
    } else {
      Lobby.delete(this);
      return;
    }
  }

  toJSON() {
    return {
      id: this.id,
      lobbyName: this.lobbyName,
      players: this.players.values(),
    };
  }
}

module.exports = {
  Lobby,
};
