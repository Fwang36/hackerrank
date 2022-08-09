const plusMinus = (arr) => {
  let posCount = 0;
  let negCount = 0;
  let zeroCount = 0;

  for (let item of arr) {
    if (item === 0) {
      zeroCount++
    } else if (item > 0) {
      posCount++
    } else if (item < 0) {
      negCount++
    }
  }

  let posRatio = (posCount / arr.length).toFixed(6)
  let negRatio = (negCount / arr.length).toFixed(6)
  let zeroRatio = (zeroCount / arr.length).toFixed(6)

  console.log(posRatio)
  console.log(negRatio)
  console.log(zeroRatio)

}

console.log(plusMinus([-4, 3, -9, 0, 4, 1]))