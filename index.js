// Код для первого задания напиши в этой функции
function crawlTree(arr) {
  let result = ''
  for (let i=0; i<arr.length; i++) {
      if (Array.isArray(arr[i])) {
    result +=crawlTree(arr[i])
  } else {
      result +=arr[i]
  }
}
return result
}

// Код для второго задания напиши в этой функции
function twoSum(arr, target) {
    function check(i, j) {
      if (arr[i]+arr[j] === target) {
       return [i, j]
    }
      if (j<arr.length) {
        return check(i, j+1)
      }
      else {
        return check(i+1, j+2)
      }
  }
   return check(0, 1)
  }

// Всё, что ниже, нужно для тестов. Не изменяй этот код
const functions = { crawlTree, twoSum };
module.exports = functions;
