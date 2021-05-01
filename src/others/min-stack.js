class MinStack {
  constructor() {
    this.stack = [];
    this.min = -Infinity;
  }

  push(data) {
    if (!this.stack.length) {
      this.min = data;
      this.stack.push(data);
      return;
    }
    if (data < this.min) {
      this.stack.push(2 * data - this.min);
      this.min = data;
    } else {
      this.stack.push(data);
    }
  }

  pop() {
    let t = this.stack.pop();
    if (this.min > t) {
      let m = this.min;
      this.min = 2 * this.min - t;
      return m;
    }
    return t;
  }
}

let ms = new MinStack();

ms.push(5);
ms.push(10);
ms.push(3);
ms.push(1);

console.log(ms.min);
console.log(ms.pop());
console.log(ms.min);
