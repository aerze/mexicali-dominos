import { Store } from "./store.js";

export class Client {
  socket = new io();
  store = new Store();

  add(init) {
    init(this);
  }
}
