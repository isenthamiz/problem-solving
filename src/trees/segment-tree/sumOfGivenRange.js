const arr = [-1, 2, 4, 0];

class SegmentTree {
  constructor(arr, n) {
    this.input = arr;
    this.n = n;
    let x = Math.ceil(Math.log(n) / Math.log(2));
    let size = 2 * Math.pow(2, x) - 1;
    this.segTree = new Array(size).fill(Infinity);
  }

  createTree() {
    const helper = function (input, segtree, low, high, pos) {
      if (low == high) {
        segtree[pos] = input[low];
        return;
      }

      let mid = Math.floor((low + high) / 2);
      let left = 2 * pos + 1;
      let right = 2 * pos + 2;

      helper(input, segtree, low, mid, left);
      helper(input, segtree, mid + 1, high, right);
      segtree[pos] = segtree[left] + segtree[right];
    };

    helper(this.input, this.segTree, 0, this.n - 1, 0);
    console.log(this.segTree);
  }

  updateRange(i, val) {
    const helper = function (segtree, low, high, i, diff, pos) {
      if (i < low || i > high) {
        return;
      }

      segtree[pos] = segtree[pos] + diff;

      if (low != high) {
        let mid = Math.floor((low + high) / 2);
        let left = 2 * pos + 1;
        let right = 2 * pos + 2;
        helper(segtree, low, mid, i, diff, left);
        helper(segtree, mid + 1, high, i, diff, right);
      }
    };
    if (i >= 0 && i < this.n) {
      let diff = val - this.input[i];
      this.input[i] = val;
      helper(this.segTree, 0, this.n - 1, i, diff, 0);
    }
  }

  rangeMinQuery(from, to) {
    const helper = function (segtree, low, high, from, to, pos) {
      if (from <= low && to >= high) {
        return segtree[pos];
      }
      if (from > high || to < low) {
        return 0;
      }

      let mid = Math.floor((low + high) / 2);
      let left = 2 * pos + 1;
      let right = 2 * pos + 2;

      return (
        helper(segtree, low, mid, from, to, left) +
        helper(segtree, mid + 1, high, from, to, right)
      );
    };

    let a = helper(this.segTree, 0, this.n - 1, from, to, 0);

    console.log(a);
  }
}

let st = new SegmentTree(arr, arr.length);

st.createTree();

st.rangeMinQuery(1, 3);

st.updateRange(1, 4);

st.rangeMinQuery(1, 3);

console.log(st.input);
