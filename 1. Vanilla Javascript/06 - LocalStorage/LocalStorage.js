class LocalStorage {
  constructor() {
    if (!window.localStorage) {
      throw new Error("Local storage is not supported by your browser");
    }
  }

  #getFromLocalStorage(key) {
    let value = window.localStorage.getItem(key);
    try {
      return (value = JSON.parse(value));
    } catch (err) {}
    return value;
  }

  get(keys) {
    if (typeof keys === "string") return this.#getFromLocalStorage(keys);
    return Object.entries(keys).reduce((values, [key, defaultValue]) => {
      const val = this.#getFromLocalStorage(key);
      values[key] = val !== null ? val : defaultValue;
      return values;
    }, {});
  }

  set(keys) {
    for (let [key, value] of Object.entries(keys)) {
      if (typeof value === "object") {
        value = JSON.stringify(value);
      }
      window.localStorage.setItem(key, value);
    }
  }

  remove(key) {
    if (this.#getFromLocalStorage(key)) {
      window.localStorage.removeItem(key);
    } else {
      throw new Error("No key found.");
    }
  }

  clear() {
    window.localStorage.clear();
  }

  getAll() {
    const values = {};
    for (let i = 0; i < window.localStorage.length; i++) {
      const key = window.localStorage.key(i);
      values[key] = this.#getFromLocalStorage(key);
    }
    return values;
  }
}

window.LocalStorage = LocalStorage;
