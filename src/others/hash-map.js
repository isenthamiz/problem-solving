class HashMap {
  constructor() {
    this.HashKey = 100000;
    this.Collection = new Array(this.HashKey).fill(null);
  }

  _hash(key) {
    return key % this.HashKey;
  }

  _findItemsIndex(items, key) {
    let index = -1,
      foundValue = -1;
    if (Array.isArray(items)) {
      items.forEach((item, i) => {
        let [itemKey, itemValue] = item.split(":");
        if (key === itemKey) {
          index = i;
          foundValue = itemValue;
        }
      });
    }
    return [index, foundValue];
  }

  set(key, value) {
    let hashKey = this._hash(key);
    const newItem = key + ":" + value;
    if (this.Collection[hashKey] == null) {
      this.Collection[hashKey] = [newItem];
    } else {
      let items = this.Collection[hashKey];
      let [index] = this._findItemsIndex(items, key);
      if (index == -1) {
        items.push(newItem);
      } else {
        items[index] = newItem;
      }
    }
  }

  get(key) {
    const hashKey = this._hash(key);
    const items = this.Collection[hashKey];
    const [index, value] = this._findItemsIndex(items, key);
    return value;
  }

  delete(key) {
    const hashKey = this._hash(key);
    const items = this.Collection[hashKey];
    let [deleteIndex] = this._findItemsIndex(items, key);
    if (deleteIndex == -1) {
      return;
    } else if (deleteIndex == 0) {
      this.Collection[hashKey] = -1;
    } else {
      items.splice(deleteIndex, 1);
    }
  }
}

let map = new HashMap();

map.set("a", "A");
map.set("b", "B");

console.log(map.get("b"));
