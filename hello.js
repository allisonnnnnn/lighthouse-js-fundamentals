const sayHello = function(name) {
  console.log("Hello, " + name);
};

sayHello("Lily");
sayHello("Tom");
sayHello("Karen");

const returnSayHello = function(name) {
  return "Hello, " + name;
};

const greeting = returnSayHello("John");
console.log(greeting);
