// Please ensure your methods match the name below
// eg. const includes = () => || function includes() {}

/* includes */
const includes = (arr, item) => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === item) return true;
  }
  return false;
}

/* indexOf */
const indexOf = (arr, item) => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === item) return i;
  }
  return -1;
}

/* forEach */
const forEach = (arr, cb) => {
  for (let i = 0; i < arr.length; i++) {
    arr[i] = cb(arr[i], i, arr);
  }
  return arr;
}

/* map */
const map = (arr, cb) => {
  const mappedArr = [];
  for (let i = 0; i < arr.length; i++) {
    mappedArr.push(cb(arr[i], i, arr));
  }
  return mappedArr;
}

/* filter */
const filter = (arr, cb) => {
  const filteredArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (cb(arr[i], i, arr)) filteredArr.push(arr[i])
  }
  return filteredArr;
}

/* reduce */
const reduce = (arr, cb, acc = 0) => {
  for (let i = 0; i < arr.length; i++) {
    acc = cb(acc, arr[i], i, arr)
  }
  return acc;
}

module.exports = {
  includes,
  indexOf,
  forEach,
  map,
  filter,
  reduce
};
