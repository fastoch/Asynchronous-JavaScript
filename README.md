src = https://www.youtube.com/watch?v=PgZ9npYJZzU

#  Promises

The JavaScript Promises feature was officially introduced as part of ECMAScript 6 (ES6) in **2015**.  

When we perform an asynchronous operation, like fetching data from a server, we don't get the result
immediately. Instead, JavaScript gives us a Promise object right away.  

This object is a placeholder that promises to give us the result of that operation *eventually*.  

A Promise can be in one of 3 states:
- **pending**: the initial state, when the operation hasn't finished yet
- **fulfilled** or **resolved**: the operation completed successfully, the promise now holds a value
- **rejected**: the operation failed, the promise now holds an error (a reason for the failure)

check the `index.js` file for an example

# Async/Await

The JavaScript async/await feature was released in **2017** as part of the ECMAScript 2017 edition.   

check the `index2.js` file for an example

@11/23