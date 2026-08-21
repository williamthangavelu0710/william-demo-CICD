 const { add, greet } = require("./index");

function createMessage(name, a, b) {
  return `${greet(name)} The total is ${add(a, b)}.`;
}

module.exports = {
  createMessage
};
