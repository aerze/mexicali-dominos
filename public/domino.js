class Tile extends Array {
  constructor(t, b) {
    super(2);
    this[0] = t;
    this[1] = b;
  }
}

const [t, b] = r;
console.log(t, b);

if (module) {
  module.exports = {
    Tile
  };
}
