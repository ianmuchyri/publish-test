export function Hello() {
  const message = 'Hello World from my example modern npm package!';
  return message;
}

export function GoodBye() {
  const message = 'Goodbye world from my example modern npm package!';
  return message;
}

export default {
  Hello,
  GoodBye,
};