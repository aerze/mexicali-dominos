class Tile extends Array {
  constructor(t, b) {
    super(2);
    this[0] = t;
    this[1] = b;
  }
  
  get id() {
    return `${this[0]},${this[1]}`
  }
}

class Domino {
  constructor () {
    
  }
  
  createTiles () {
    const tiles = new Map();
    
    for (let t = 1; t <= 12; t++) {
      for (let b = 1; b <= 12; b++) {
        const tile = new Tile(t, b);
        tiles.set(tile.id, tile)
      }
    }
  }
}

if (module) {
  module.exports = {
    Tile
  };
}
