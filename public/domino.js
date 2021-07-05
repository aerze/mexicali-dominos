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

class Domino {
  constructor() {
    this.tiles = new Map();
    this.deck = new Set();
  }

  createTiles() {
    for (let t = 1; t <= 12; t++) {
      for (let b = 1; b <= 12; b++) {
        const tile = new Tile(t, b);
        this.tiles.set(tile.id,tile);
      }
    }
  }
  
  mixTiles() {
    const a = Array
  }
}

if (module) {
  module.exports = {
    Tile
  };
}
