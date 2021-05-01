class PriorityQueue {
  constructor() {
    this.Queue = [];
  }

  enQueue(item) {
    let added = false;
    if (!this.Queue.length) {
      this.Queue.push(item);
    } else {
      for (let i = 0; i < this.Queue.length; i++) {
        if (item[1] < this.Queue[i][1]) {
          this.Queue.splice(i, 0, item);
          added = true;
          break;
        }
      }
      if (!added) {
        this.Queue.push(item);
      }
    }
  }

  deQueue() {
    return this.Queue.shift();
  }
}

let q = new PriorityQueue();

q.enQueue(["one", 10]);
q.enQueue(["two", 100]);
q.enQueue(["three", 50]);

console.log(q.Queue);
console.log(q.deQueue());
