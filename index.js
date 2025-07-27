// to demonstrate a promise, let's simulate an asychronous operation
// like a network request using setTimeout
const introducing = new Promise((resolve, reject) => {
  setTimeout(() => {
    const name = "Bond"
    if (name === "Bond") {
      // it's good practice to resolve with a value
      resolve(`Success! The name is ${name}`)
    } else {
      // and to reject with an error or a reason
      reject("Failure! The name is not Bond")
    }
  }, 1000) // simulates a 1-second delay
})

// to use the promise and actually log the output to console, we need to chain .then() and .catch() to it
introducing
  .then((successMessage) => {
    console.log(successMessage)  // this will run if the promise is resolved
  })
  .catch((errorMessage) => {
    console.error(errorMessage)  // this will run if the promise is rejected
  })

/* 
The program knows what "successMessage" is because of the direct link between the resolve function inside 
the Promise and the .then() method chained to it.
"successMessage" is simply the name we chose for the parameter that receives the value from resolve. 
We could have named it anything.
The same applies to "errorMessage": there's a direct link between reject() and .catch()
*/