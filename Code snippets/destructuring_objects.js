const user = {
  name: 'Alice',
  age: 25,
  address: {
    city: 'Wonderland',
    zip: '12345'
  }
};

// Extract name and city using destructuring
const { name, address: { city } } = user;

console.log(name);
console.log(city);