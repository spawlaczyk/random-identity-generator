const fs = require('fs');

const genders = [
  'Male',
  'Female',
];

const maleNames = [
  'John',
  'James',
  'Robert',
  'Michael',
  'David'
];

const femaleNames = [
  'Jane',
  'Mary',
  'Susan',
  'Jessica',
  'Nancy'
];

const lastNames = [
  'Smith',
  'Jones',
  'Taylor',
  'Brown',
  'Williams'
];

const people = [

];

function randChoice(arr) {
  return choice = arr[Math.floor(Math.random() * arr.length)];
};

for(let i = 0; i < 21; i++){
  const obj = {};
  obj.gender = randChoice(genders);
  if(obj.gender == 'Male'){
    obj.firstName = randChoice(maleNames);
  } else {
    obj.firstName = randChoice(femaleNames);
  }
  obj.lastName = lastNames[Math.floor(Math.random() * lastNames.length)];
  obj.age = [Math.floor(Math.random() * (78 - 18)) + 18];
  people.push(obj);
};

fs.writeFile('people.json', JSON.stringify(people), (err) => {
  if (err) throw err;
  console.log('The file has been saved!');
});