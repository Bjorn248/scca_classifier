const naturalSort = require('javascript-natural-sort');

/**
 * This takes an object as input and recursively sorts the keys of all objects
 * @param {Object} object is an object to be sorted
 * @return {Object} sortedObject is the sorted object
 */
function sortObject(object) {
  let sortedObject = {};
  let sortedKeys = [];
  let keys = [];
  keys = Object.keys(object);
  sortedKeys = keys.sort(naturalSort);
  for (let index = 0; index < sortedKeys.length; index++) {
    if (typeof object[sortedKeys[index]] === 'object' && object[sortedKeys[index]] instanceof Array == false) {
      sortedObject[sortedKeys[index]] = sortObject(object[sortedKeys[index]]);
    } else {
      sortedObject[sortedKeys[index]] = object[sortedKeys[index]];
    }
  }
  return sortedObject;
}

const common = require('./src/common.js');

const sorted = sortObject(common.allSoloCars);
console.log(JSON.stringify(sorted, null, 2));
