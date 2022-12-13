console.log("~~~~~~~~~~~~~~TASK 1~~~~~~~~~~~~~~");
/**
 * Create some classes.
 * For inspiration what you can create, look around you 👀.
 * Some examples: furniture, animal, chair, teacher, student, person, tree, movie,...
 */

class House {
  constructor(color, depth, width, height) {
    this.color = color;
    this.depth = depth;
    this.width = width;
    this.height = height;
  }

  changeColor(newColor) {
    console.log("Changed color to: " + newColor);
    this.color = newColor;
  }

  get area() {
    return this.width * this.depth;
  }
}

class Dog {
  constructor(breed, color) {
    this.breed = breed;
    this.color = color;
    this.bark = "Woef woef";
  }

  bark() {
    return this.bark;
  }

  changeBark(newBark) {
    this.bark = newBark;
  }
}

class HerderDog extends Dog {
  constructor(breed, color) {
    this.breed = breed;
    this.color = color;
    super(breed, color);
  }

  bark() {
    console.log("Woof, woof" + animal);
  }

  herd() {
    console.log("herd");
  }
}

const corgi = new HerderDog(corgi, black);

console.log("~~~~~~~~~~~~~~TASK 2~~~~~~~~~~~~~~");
/**
 * Initialize all those classes you defined above using the new keyword.
 * Like this you are creating class instances you can use further along in your code.
 */

console.log("~~~~~~~~~~~~~~TASK 3~~~~~~~~~~~~~~");
/**
 * Define some methods for the classes you defined above. Think of methods like actions
 * the class you defined can make. A pet can have a feed method, a tree a grow method, a person
 * can talk, etc. Make sure to use the this keyword to refer to properties you assigned to the
 * class.
 *
 * Call these methods here.
 */

console.log("~~~~~~~~~~~~~~TASK 4~~~~~~~~~~~~~~");
/**
 * Create a superclass for some of your classes above and extend the class.
 * Add some methods to the superclass and try to call them.
 * What happens when you create the same method in the superclass and the more specific
 * class?
 */

console.log("~~~~~~~~~~~~~~TASK 5~~~~~~~~~~~~~~");
/**
 * Implement some private methods in your classes and use them in your methods.
 */

console.log("~~~~~~~~~~~~~~TASK 6~~~~~~~~~~~~~~");
/**
 * Create a calculator class using a fluent API
 * that does something like this:
 * calc
    .add(1, 2)
    .square()
    .display();
 */
class Calculator {
  constructor() {
    this.total = 0;
  }

  add(number) {
    this.total += number;
    return this;
  }

  subtract(number) {
    this.total -= number;
    return this;
  }

  multiply(number) {
    this.total = this.total * number;
    return this;
  }

  divide(number) {
    this.total = this.total / number;
    return this;
  }

  get display() {
    return this.total;
  }
}

class Stack {
  #stack;
  constructor() {
    this.#stack = [];
  }

  push(number) {
    this.#stack.push(number);
    return this;
  }

  pull() {
    return this.#stack[this.#stack.length - 1];
  }
}

class Queue {
  #queue;
  constructor() {
    this.#queue = [];
  }

  enqueue(x) {
    this.#queue.push(x);
    return this;
  }

  dequeue() {
    return this.#queue.shift();
  }

  peek() {
    const firstElement = this.#queue[0];
    return firstElement;
  }
}
