// Make a new Promise
const p = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject("--- Oops ---");
    resolve(">>> Success! <<<");
  }, 2000);
});

p.then((message) => {
  console.log("Promise resolved! 😀");
  console.log(message);
}).catch((err) => {
  console.log("Promise rejected! 😞");
  console.log(err);
});

// **Problems to solve**

// **1)** What happens when a promise is rejected? Test it by calling `reject()`
// ```Promise rejected! 😞 and --- Oops ---``` from the .catch() is returned instead of p.then().

// **2)** What happens when you call both `resolve` and `reject`? Test this.
// When both reject and resolve are called, the first one is returned. In this case, the reject is returned.

// **3)** Does the order matter you call resolve and reject matter? Test this.
// The order does matter. The first one called is returned.

// **4)** What happens if you call `resolve` or `reject` more than once? Test this out for yourself.
// The first one called is returned.
