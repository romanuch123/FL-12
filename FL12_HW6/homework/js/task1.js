
const a = parseFloat(prompt('Please, enter number a', ''));
const b = parseFloat(prompt('Please, enter number b', ''));
const c = parseFloat(prompt('Please, enter number c', ''));
let x1 = 0;
let x2 = 0;

const checkIfNuber = !isNaN(a) && !isNaN(b) && !isNaN(c);
if (checkIfNuber) {
  const two = 2;
  const four = 4;
  const d = Math.pow(b, two) - four * a * c;
  if (d > 0) {
    x1 = (-b + Math.sqrt(d)) / (two * a);
    x2 = (-b - Math.sqrt(d)) / (two * a);
    console.log('x1 = ' + x1 + ' and x2 = ' + x2);
  } else if (d === 0) {
    x1 = -b / (two * a);
    console.log('x = ' + x1);
  } else {
    console.log('no solution (when Discriminant < 0)');
  }
} else {
  console.log('Invalid input data');
}