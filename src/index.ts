export function Hello() {
  const message = 'Hello World from my example modern npm package!';
  return message;
}

export function GoodBye() {
  const message = 'Goodbye from my example modern npm package!';
  return message;
}

export default {
  Hello,
  GoodBye,
};