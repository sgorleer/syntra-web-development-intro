/** Class representing a Stack. */

class Stack {
  #storage;
  constructor() {
    this.#storage = [];
  }
  /*
   * Adds a new value at the end of the stack
   * @param {*} value the value to push
   */
  push(value) {
    this.#storage.push(value);
    return this;
  }
  /*
   * Removes the value at the end of the stack and returns it
   * @return {*} the last and newest value in the stack
   */
  pop() {
    return this.#storage.pop();
  }
  /*
   * Returns the value at the end of the stack without removing it
   * @return {*} the last and newest value in the stack
   */
  peek() {
    const lastElement = this.#storage[this.#storage.length - 1];
    return lastElement;
  }
}

const myStack = new Stack();

console.log(myStack);
