//Design a stack that supports getMin() in O(1) time and O(1) extra space

class Stack {
  constructor() {
    this.min = Infinity;
    this.max = -Infinity;
    this.minStack = [];
    this.maxStack = [];
  }

  getMin() {
    return this.min;
  }

  push(num) {
    if (!this.minStack.length && !this.maxStack.length) {
      this.minStack.push(num);
      this.maxStack.push(num);
      this.min = num;
      this.max = num;
      return;
    }
    if (num < this.min) {
      this.minStack.push(2 * num - this.min);
      this.min = num;
    }
    if (num > this.max) {
      this.maxStack.push(2 * num - this.max);
      this.max = num;
    } else {
      this.stack.push(num);
    }
  }

  pop() {
    let t1 = this.minStack.pop();
    let t2 = this.maxStack.pop();
    if (this.min > t) {
      let m = this.min;
      this.min = 2 * this.min - t;
      return m;
    }
    return t;
  }
}

let st = new Stack();

st.push(3);
st.push(5);
st.push(2);
st.push(1);

console.log(st.stack);

console.log(st.pop());
console.log(st.pop());
