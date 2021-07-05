import { makeAutoObservable } from "mobx";

class CounterStore {
  count = 0;

  constructor() {
    makeAutoObservable(this);
  }

  increase() {
    this.count += 1;
    console.log("increase", this.count);
  }

  decrease() {
    this.count -= 1;
    console.log("decrease", this.count);
  }
}

export const counter = new CounterStore();
