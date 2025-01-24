/*
  Write a function that calculates the sum of two numbers.

  - The function must return a promise.
  - The solution should be solved after half a second.
  - If a negative value is entered into the function, it will be rejected.
  - Note: you should use "Promise" to resolve this question.
*/

function sumNumber(a, b){
  return new Promise((resolve, reject) => {
  if (a < 0 || b < 0){
    reject("Negative values are not allowd")
  } else{
    setTimeout(()=>{
      resolve(a + b)
    }, 3000)
  }
  })
}

sumNumber(2, 4).then((res)=>{
console.log("Sum:", res);

}).catch((er)=>{
console.log("Error:", er);

})

sumNumber(-2, 3).then((res)=>{
  console.log("Sum:", res);
  
  }).catch((er)=>{
  console.log("Error:", er);
  
  })