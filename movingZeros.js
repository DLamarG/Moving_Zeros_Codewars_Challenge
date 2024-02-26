function moveZeros(arr) {
    let zeroArr = []
    let numsArr = []
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === 0) {
        zeroArr.push(arr[i])
      }
      if (arr[i] !== 0) {
        numsArr.push(arr[i])
      }
    }
    return numsArr.concat(zeroArr)
  }


console.log(moveZeros([1,2,0,1,0,1,0,3,0,1]))
console.log(moveZeros([false,1,0,1,2,0,1,3,"a"]))