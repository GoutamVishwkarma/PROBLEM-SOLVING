const deepCompareObject = (obj1, obj2) => {
  if (typeof obj1 !== typeof obj2) return false;


  // Handle arrays
  if (Array.isArray(obj1)) {
    if (obj1.length !== obj2.length) return false;
    for (let i = 0; i < obj1.length; i++) {
      if (!deepCompareObject(obj1[i], obj2[i])) return false;
    }
    return true;
  }


  // Handle objects
  if (typeof obj1 === "object" && obj1 !== null && obj2 !== null) {
    let key1 = Object.keys(obj1);
    let key2 = Object.keys(obj2);


    if (key1.length !== key2.length) return false;


    for (let key of key1) {
      if (!deepCompareObject(obj1[key], obj2[key])) return false;
    }
    return true;
  }


  // Handle primitives
  return obj1 === obj2;
};
