class Player {
  static counter = 0;

  static list = new Map();

  static create(name, socket) {
    const player = new Player(Player.counter++, name, socket);
    Player.list.set(player.id, player);
    return player;
  }

  static delete(player) {
    return Player.list.delete(player.id);
  }

  constructor(playerId, playerName, socket) {
    this.playerId = playerId;
    this.playerName = playerName;
    this.socket = socket;
  }

  toJSON() {
    return {
      playerId: this.playerId,
      playerName: this.playerName,
    };
  }
}

module.exports = {
  Player,
};
