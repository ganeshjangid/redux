import { compose, pipe } from "lodash/fp";

function sayHello() {
  return "Hello World";
}

function greeting(fnMsg: () => string) {
  console.log(fnMsg());
}

greeting(sayHello);

setTimeout(() => {
  console.log("Hello Wolrddd11");
}, 2000);

function addTwoNo(num1: number) {
  return function (num2: number) {
    return num1 + num2;
  };
}

const addNumber = addTwoNo(10)(20);
console.log(addNumber);

let name = "ganesh";
let upperName = name.toUpperCase();
console.log(name, upperName);

const books: { title: string } = { title: "" };
books.title = "test tile";
console.log(books);

const person = { ...books, name: "ganesh" };
console.log(person);

const numArray = [1, 2, 3, 4, 5];

//Updating
const updatedArr = numArray.map((num) => num * 2);
console.log(updatedArr);
