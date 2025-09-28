export default function add(a, b) {
  return (a + b) * 2;
}
/*
function add(a, b) {
  return (a + b) * 2;
}

export default add;
*/

export function logger(name) {
  console.log(`Hello, ${name}`);
}

export const user = 'Alice';

// export {logger, user}
