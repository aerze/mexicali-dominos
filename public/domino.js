class Domino {
  constructor(top, bottom) {
    this.top = top;
    this.bottom = bottom;
    // this[0] = top;
    this[1] = bottom;
  }
  
  get 0 ()
}

const r = new Domino(1, 8);

console.log(r[0]);

if (module) {
  module.exports = {
    Domino
  };
}
