// IIFE is used for not polluting the code with global scope declaration
// named IIFE
(function juice() {
  console.log("DB CONNECTED");
})();

// Unnamed IIFE
((name) => {
  console.log(`DB CONNECTED TWO by ${name}`);
})("Sid");