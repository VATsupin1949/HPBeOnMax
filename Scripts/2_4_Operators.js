console.log('сложение '+'строк');
console.log('превращение строки в число унарным +'); 
console.log(+'2'+3);
console.log('операторы инкремента, декремента для 10');
let incr = 10, decr = 10;
incr++;
decr--;
console.log(`инкремент = ${incr}, декремент = ${decr}`);
incr = 10, decr = 10;
// после выполнения функции
console.log(`инкремент = ${incr++}, декремент = ${decr--}`);
console.log(`инкремент = ${incr++}, декремент = ${decr--}`);
incr = 10, decr = 10;
// до выполнения функции
console.log(`инкремент = ${++incr}, декремент = ${--decr}`);
console.log('без сравнения типов - преобразование');
console.log('2' == 2);
console.log('c сравнением типов');
console.log('2' === 2);