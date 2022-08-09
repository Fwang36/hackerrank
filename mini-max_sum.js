const miniMaxSum = (arr) => {
  const min = Math.min(...arr)
  const max = Math.max(...arr)

  const equalArr = arr.every(e => e === arr[0])

  if (equalArr) {
    return console.log((arr[0] + arr[1] + arr[2] + arr[3]), (arr[0] + arr[1] + arr[2] + arr[3]));
  }
  console.log(min)
  console.log(max)
  const minRemovedArray = arr.filter((e) => {return e != min})
  const maxRemovedArray = arr.filter((e) => {return e != max})


  const reducedMin = minRemovedArray.reduce(function(a, b) {
    return a + b;
  }, 0)

  const reducedMax = maxRemovedArray.reduce(function(a, b) {
    return a + b;
  }, 0)

  console.log(reducedMax, reducedMin)
}

console.log(miniMaxSum([1,2,3,4,5]))
console.log(miniMaxSum([5,5,5,5,5]))