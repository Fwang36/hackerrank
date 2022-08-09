const lonelyInteger = (arr) => {

  const duplicates = {}
  arr.forEach(function(x) {duplicates[x] = (duplicates[x] || 0) + 1});

  for (let item in duplicates) {
    if (duplicates[item] === 1) {
      return item
    }
  }
}

console.log(lonelyInteger([1,2,3,4,3,2,1]))