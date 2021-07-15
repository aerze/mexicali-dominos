class Tile extends Array {
  constructor(t, b) {
    super(2);
    this[0] = t;
    this[1] = b;
  }

  get id() {
    return `${this[0]},${this[1]}`;
  }
}

class Station {
  constructor() {}

  addLine() {}

  getOpenLinks() {}
}

class Line {
  constructor() {
    this.set = new Set();
  }

  getOpenLinks() {}

  addSingleLink() {}

  addDoubleLink() {}

  open() {}

  close() {}
}

class Player {
  static count = 0;
  constructor(conn) {
    this.conn = conn;
    this.id = Player.count++;
  }
}

class Domino {
  constructor() {
    this.tileMap = Domino.createTileMap();
    this.drawPile = Domino.createDrawPile(this.tileMap);
  }

  static createTileMap() {
    const tileMap = new Map();
    for (let t = 1; t <= 12; t++) {
      for (let b = 1; b <= 12; b++) {
        const tile = new Tile(t, b);
        tileMap.set(tile.id, tile);
      }
    }
    return tileMap;
  }

  static shuffleArray(array) {
    let m = array.length,
      t,
      i;

    while (m) {
      i = Math.floor(Math.random() * m--);
      t = array[m];
      array[m] = array[i];
      array[i] = t;
    }

    return array;
  }

  static createDrawPile(tileMap) {
    const tileIds = Array.from(tileMap.values()).map((t) => t.id);
    return Domino.shuffleArray(tileIds);
  }

  addPlayer() {}

  dealHands() {}

  startGame() {}

  startRound() {}

  startTurn() {}

  placeTile() {}

  handleDouble() {}

  validateDouble() {}

  handleSingle() {}

  drawTile() {}

  openLine() {}

  closeLine() {}

  endTurn() {}

  endRound() {}

  calculateScores() {}

  endGame() {}
}

class Game {
  static PHASES = {
    PRE_MATCH: "PRE_MATCH", // connect players, set options
  };

  constructor(conn) {
    this.conn = conn;
    this.tileMap = Domino.createTileMap();
    this.drawPile = Domino.createDrawPile();
    this.phase = "PRE_MATCH";
    this.players = new Map();
  }

  addPlayer(player) {
    this.players.set(player.id, player);
  }

  removePlayer(player) {
    this.players.delete(player.id);
  }

  update() {}

  start() {
    this.dealHands();
  }

  dealHands() {}
}

if (module) {
  module.exports = {
    Tile,
    Domino,
    Game,
  };
}
