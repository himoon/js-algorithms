/**
 * Dictionary
 *
 * Properties
 *  - data
 *
 * Functions
 *  - set
 *  - has
 *  - get
 *  - delete
 *  - clear
 *  - size
 *  - keys
 *  - values
 */

class Dictionary {
  constructor() {
    this.data = {};
  }

  set(key, value) {
    this.data[key] = value;
    return true;
  }

  has(key) {
    return this.data.hasOwnProperty(key);
  }

  get(key) {
    return this.has(key) ? this.data[key] : undefined;
  }

  delete(key) {
    if (this.has(key)) {
      delete this.data[key];
      return true;
    }
    return false;
  }

  clear() {
    this.data = {};
  }

  size() {
    return Object.keys(this.data).length;
  }

  keys() {
    return Object.keys(this.data);
  }

  values() {
    const res = [];
    for (let key in this.data) {
      if (this.has(key)) {
        res.push(this.data[key]);
      }
    }
    return res;
  }
}

module.exports = Dictionary;
