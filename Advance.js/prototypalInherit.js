function Person(name){
    this.name = name;
}
Person.prototype.hello = function(){
    console.log(`Hello , my name is ${this.name}`);
}
let Raj = new Person("Aditya Kanojiya")
Raj.hello()

// -------------------------------------------------------------

  let animal = {
  eat() {
    console.log("Animal khana kha raha hai");
  }
};

let dog = Object.create(animal);

dog.bark = function() {
  console.log("Dog bhonk raha hai");
};

dog.eat();  
dog.bark();