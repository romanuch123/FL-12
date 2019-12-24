const a = parseFloat(prompt('Please, enter triangle side a', ''));
const b = parseFloat(prompt('Please, enter triangle side b', ''));
const c = parseFloat(prompt('Please, enter triangle side c', ''));
const checkIfNuber = !isNaN(a) && !isNaN(b) && !isNaN(c) && a > 0 && b > 0 && c > 0;
if (checkIfNuber) {
  if (a + b <= c || a + c <= b || b + c <= a) {
    console.log('Triangle doesn’t exist');
  } else if (a === b && a === c) {
    console.log('Eequivalent triangle');
  } else if (a === b || a === c || b === c) {
    console.log('Isosceles triangle');
  } else {
    console.log('Scalene triangle');
  }
} else {
  console.log('input values should be ONLY numbers');
}
