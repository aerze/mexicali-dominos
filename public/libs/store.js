const test = "test";

export class Store {
  state = { test };
  callbacks = new Set();

  subscribe = (cb) => {
    this.callbacks.add(cb);
  };

  update = () => {
    for (const cb of this.callbacks) {
      cb(this.state);
    }
  };

  getState = () => {
    this.state;
  };

  setState = (s) => {
    this.state = {
      ...this.state,
      ...s,
    };

    console.groupCollapsed("update");
    console.log(this.state);
    console.groupEnd();
    this.update();
  };

  // setStateOf(path, s) {
  //   const keys = path.split(".");
  //   let temp = this.state;

  //   for (const key of keys) {
  //     if (temp[key]) {
  //       temp = temp[key];
  //     }
  //   }

  //   temp = {}
  // }
}
