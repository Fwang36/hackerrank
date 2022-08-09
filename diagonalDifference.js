  function diagonalDifference(arr) {
    let l = arr.length
    let i = -1
    let total = 0
    
    total = arr.reduce((t, c, i) => t + c[i] - c[l-1-i], 0) 
    
    return Math.abs(total)
}

console.log(diagonalDifference([[11,2,4], [4,5,6], [10,8,-12]]))