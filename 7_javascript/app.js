console.log('Running');
// json encurtados

let name_ = 'Andrew';
let age = 25;
let email = 'andrew@email.com';

let user = {
  name_,
  age,
  email
}
console.log(user);

// spread

let arr1 = [1, 2, 3];
let arr2 = [...arr1, 4, 5, 6];
console.log(arr2);

// desestruturação

const user2 = {
  curso: 'nodejs',
  plataforma: 'udemy'
}

const { curso, plataforma } = user2;

console.log(curso);
console.log(plataforma);

// arrow function

const sum = (a, b) => a + b;

const sum2 = function (a, b) {
  return a + b
};

function sum3(a, b) {
  return a + b
};
