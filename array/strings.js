const str = 'Hola';

[...str].map(letter => console.log(letter));

[...str].forEach(letter => console.log(letter));

for(letter of str) {
  console.log(letter)
}

console.log([].map.call(str, function(x) {
  return x;
}));
