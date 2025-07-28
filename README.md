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

check the `promise.js` file for an example

# Async/Await

The JavaScript async/await feature was released in **2017** as part of the ECMAScript 2017 edition.   

The **async** keyword is used to declare a function as asynchronous.  
This function always returns a **Promise**, even if it appears to return a simple value.  

Inside an **async** function, the **await** keyword pauses the execution of the function until the promise after await settles (either resolves or rejects). The code "waits" at that point for the asynchronous operation to finish, then resumes with the resolved value as if synchronous code had been written.  

check the `async-await.js` file for an example

