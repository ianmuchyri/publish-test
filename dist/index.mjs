// src/index.ts
function Hello() {
  const message = "Hello from my example modern npm package!";
  return message;
}
function GoodBye() {
  const message = "Goodbye from my example modern npm package!";
  return message;
}
var src_default = {
  Hello,
  GoodBye
};
export {
  GoodBye,
  Hello,
  src_default as default
};
