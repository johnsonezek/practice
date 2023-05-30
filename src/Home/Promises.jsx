import React from 'react'
import ReactDOM  from 'react-dom';

function Promises() {
    const myPromise = new Promise((resolve, reject) => {
        // Simulating an asynchronous operation
        setTimeout(() => {
          const randomNum = Math.random();
          if (randomNum < 0.5) {
            resolve(randomNum); // Promise fulfilled
          } else {
            reject("Error: Random number is greater than 0.5"); // Promise rejected
          }
        }, 1000);
      });
      
      // Using the promise
      myPromise
        .then((result) => {
          console.log("Promise fulfilled with result:", result);
        })
        .catch((error) => {
          console.log("Promise rejected with error:", error);
        });
      
}
export default Promises;