function* numbers(){
  yield 1;
  yield 2;
  yield 3;
}

const gen = numbers();

console.log(gen.next());
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());


function* count(){
  let i = 1;

  while(true){
    yield i;
    i++;
  }
}

const counter = count();

console.log(counter.next().value);
console.log(counter.next().value);
console.log(counter.next().value);


function* str(){
  yield "helo"
}
const num1 = str()
console.log(num1.next().value);
