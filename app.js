class Person {
  constructor(name, height, country) {
    this.name = name;
    this.height = height;
    this.country = country;
  }
  getData() {
    return `my name is ${this.name}, i am ${this.height}ft tall and i am from ${this.country}`;
  }
}

const Ben = new Person('biggKodes', 6.3, 'Nigeria');
// console.log(Ben.getData());
const h1 = document.querySelector('h1');
h1.innerText = Ben.getData();
