const timeConversion = (s) => {
  const splitString = s.split(":")

  let ans = []

  if (splitString[0] === '12' && splitString[1] === '00' && splitString[2].substr(0,2) === '00' && splitString[2].substr(2) === 'AM') {
    return '00:00:00'
  }
  if (splitString[2].substr(2) === 'PM') {
    if (splitString[0] === '12') {
      ans.push(splitString[0])
    } else {
      ans.push((Number(splitString[0]) + 12))
    }
    ans.push(splitString[1])
    ans.push(splitString[2].substr(0,2))
  }

  if (splitString[2].substr(2) === 'AM') {
    if (splitString[0] === '12') {
      ans.push('00')
    } else {
      ans.push(splitString[0])
    }
    ans.push(splitString[1])
    ans.push(splitString[2].substr(0,2))
  }
  const resultTime = ans.join(":")
  return resultTime
}

console.log(timeConversion("07:05:45PM"))
console.log(timeConversion("12:00:00AM"))
console.log(timeConversion("07:05:45AM"))
console.log(timeConversion("12:45:54PM"))