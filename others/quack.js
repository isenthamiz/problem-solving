class Quack {
  constructor() {
    this.left = [];
    this.right = [];
    this.aux = [];
  }

  push(data) {
    this.left.push(data);
  }

  pop() {
    if (!this.left.length) {
      let mid = Math.max(this.right.length / 2);
      while (this.aux.length != mid) {
        this.aux.push(this.right.pop());
      }
      while (this.right.length) {
        this.left.push(this.right.pop());
      }
      while (this.aux.length) {
        this.right.push(this.aux.pop());
      }
    }
    return this.left.pop();
  }

  pull() {
    if (!this.right.length) {
      let mid = Math.max(this.left.length / 2);
      while (this.aux.length != mid) {
        this.aux.push(this.left.pop());
      }
      while (this.left.length) {
        this.right.push(this.left.pop());
      }
      while (this.aux.length) {
        this.left.push(this.aux.pop());
      }
    }
    return this.right.pop();
  }
}

let q = new Quack();

q.push(8);
q.push(2);
q.push(10);
q.push(5);
q.push(3);
q.push(12);

console.log(q.pull());
console.log(q.pop());
