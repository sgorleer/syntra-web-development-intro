/**
 * This class is used to store data in the browser's local storage.
 * @class LocalStorage
 * @method get - Get a value from local storage
 * @method set - Set a value in local storage
 * @method remove - Remove a value from local storage
 * @method clear - Clear all values from local storage
 * @method getAll - Get all values from local storage
 *
 * Remember to use JSON.stringify() and JSON.parse() when storing and retrieving objects.
 *
 * @example use the LocalStorage class in our Vanilla Javascript/06 LocalStorage to see if it worked
 *
 * @example new LocalStorage().get({ key1: "", key2: null })
 * @example new LocalStorage().set({ key1: "", key2: null })
 */

class LocalStorage {
  constructor() {
    this.storage = window.localStorage;
  }

  #getFromLocalStorage(key) {
    let value = window.localStorage.getItem(key);
    try {
      value = JSON.parse(value);
    } catch (err) {}
    return value;
  }

  set(key, value) {
    if (typeof value === Object || typeof value === Array) {
      this.storage.setItem(key, JSON.stringify(value));
    } else {
      this.storage.setItem(key, value);
    }
  }

  get(keys) {
    return Object.entries(keys).reduce((values, [key, value]) => {}, {});
  }

  remove(key) {
    this.storage.removeItem(key);
  }

  clear() {
    this.storage.clear();
  }

  getAll() {}
}

window.LocalStorage = LocalStorage;
