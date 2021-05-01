class Node {
  constructor(key, value) {
    this.previous = null;
    this.key = key;
    this.value = value;
    this.next = null;
  }
}

class LRUCache {
  constructor(limit = 5) {
    this.size = 0;
    this.limit = limit;
    this.cache = new Map();
    this.head = null;
    this.tail = null;
  }

  get(key) {
    if (this.cache.has(key)) {
      let value = this.cache.get(key).value;
      this.remove(key);
      this.put(key, value);
      return value;
    }
    return -1;
  }

  put(key, value) {
    this.ensureLimit();
    if (!this.cache.has(key)) {
      let node = new Node(key, value);
      if (!this.head) {
        this.head = this.tail = node;
      } else {
        this.head.previous = node;
        node.next = this.head;
        this.head = node;
      }
      this.cache.set(key, node);
      this.size++;
    } else {
      let value = this.cache.get(key).value;
      this.remove(key);
      this.put(key, value);
    }
  }

  remove(key) {
    if (this.cache.has(key)) {
      let node = this.cache.get(key);
      if (node.previous) {
        node.previous.next = node.next;
      } else {
        this.head = node.next;
      }
      if (node.next) {
        node.next.previous = node.previous;
      } else {
        this.tail = node.previous;
      }

      this.cache.delete(key);
      this.size--;
    }
  }

  ensureLimit() {
    if (this.size == this.limit) {
      this.remove(this.tail.key);
    }
  }
}

let lru = new LRUCache();

lru.put(1, "one");
lru.put(2, "two");
lru.put(3, "three");
lru.put(4, "four");
lru.put(5, "five");
lru.put(6, "six");
console.log(lru.get(3));
console.log(lru.get(5));
console.log(lru.get(4));
lru.put(2, "TWO");
console.log(lru.get(1));
console.log(lru.get(2));
