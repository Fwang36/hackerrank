const countingSort = (arr) => {
  const ans = new Array(100)

  ans.fill(0,0,100)

  for (let i = 0; i < arr.length; i++) {
    ans[arr[i]]++
  }
  
  return ans
}

console.log(countingSort([1,1,2,3,4,5,1,6, 4, 5, 6, 23, 53, 66, 12, 66, 9,0 ,9 , 9, 9]))