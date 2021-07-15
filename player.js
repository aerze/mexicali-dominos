class Player {
  static counter = 0;

  static list = new Map();

  static createPlayer(name, conn) {
    const player = new Player(Player.counter++, name, conn);
    Player.list.set(player.id, player);
    return player;
  }

  static deletePlayer(player) {
    return Player.list.delete(player.id);
  }

  constructor(id, name, conn) {
    this.id = id;
    this.name = name;
    this.conn = conn;
  }
}
