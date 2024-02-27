const flat = (arr, d = 1) => {
    if (d > 0) {
      return arr.reduce((acc, val) => acc.concat(Array.isArray(val) ? flat(val, d - 1) : val), []);
    } else {
      return arr.slice();
    }
  };
  