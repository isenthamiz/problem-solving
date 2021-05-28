class Interval {
  constructor(start, end) {
    this.start = start;
    this.end = end;
  }
}

const intervals = [new Interval(1, 4), new Interval(2, 5), new Interval(7, 9)];

const mergeIntervals = function (intervals) {
  let results = [];

  if (intervals.length < 2) {
    return intervals;
  }
  intervals.sort((a, b) => a.start - b.start);

  let start = intervals[0].start;
  let end = intervals[0].end;

  for (let i = 1; i < intervals.length; i++) {
    if (intervals[i].start <= end) {
      end = Math.max(end, intervals[i].end);
    } else {
      results.push(new Interval(start, end));
      start = intervals[i].start;
      end = intervals[i].end;
    }
  }
  results.push(new Interval(start, end));

  return results;
};

const intervals1 = [
    new Interval(1, 3),
    new Interval(5, 7),
    new Interval(8, 12),
  ],
  new_interval = new Interval(14, 16);

const insertInterval = function (intervals, newInterval) {
  let results = [],
    i = 0;

  while (i < intervals.length && intervals[i].end < newInterval.start) {
    results.push(intervals[i]);
    i += 1;
  }

  while (i < intervals.length && intervals[i].start <= newInterval.end) {
    newInterval.start = Math.min(newInterval.start, intervals[i].start);
    newInterval.end = Math.max(newInterval.end, intervals[i].end);
    i += 1;
  }

  results.push(newInterval);

  while (i < intervals.length) {
    results.push(intervals[i]);
    i += 1;
  }

  return results;
};

const arr1 = [new Interval(1, 3), new Interval(5, 6), new Interval(7, 9)];

const arr2 = [new Interval(2, 3), new Interval(5, 7)];

const intervalIntersecion = function (intervals1, intervals2) {
  let results = [];

  let i = 0,
    j = 0;
  while (i < intervals1.length && j < intervals2.length) {
    let a_overlaps_b =
      intervals1[i].start >= intervals2[j].start &&
      intervals1[i].start <= intervals2[j].end;
    let b_overlaps_a =
      intervals2[j].start >= intervals1[i].start &&
      intervals2[j].start <= intervals1[i].end;

    if (a_overlaps_b || b_overlaps_a) {
      results.push([
        Math.max(intervals1[i].start, intervals2[j].start),
        Math.min(intervals1[i].end, intervals2[j].end),
      ]);
    }

    if (intervals1[i].end < intervals2[j].end) {
      i += 1;
    } else {
      j += 1;
    }
  }

  return results;
};

console.log(intervalIntersecion(arr1, arr2));
