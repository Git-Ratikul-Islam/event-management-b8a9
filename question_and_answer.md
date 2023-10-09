let greeting;
greetign = {};
console.log(greetign);


Answer: A: {}


Explanation:This is because of the assigned an empty object to the greeting variable, and when it will log it to the console, it can be see an empty object represented by the curly braces {}.




function sum(a, b) {
  return a + b;
}

sum(1, "2");

Answer: C: "12"


JavaScript dynamically converts types; "2" (string) and 1 (number) concatenated to "12"; not numeric addition;


const food = ["🍕", "🍫", "🥑", "🍔"];
const info = { favoriteFood: food[0] };

info.favoriteFood = "🍝";

console.log(food);


Answer: A:[ '🍕', '🍫', '🥑', '🍔' ]


Changing the value of info.favoriteFood to "🍝" does not modify the original food array. The food array remains unchanged, and it still contains the same elements as before.


function sayHi(name) {
  return `Hi there, ${name}`;
}

console.log(sayHi());

Answer: B:Hi there, undefined


let count = 0;
const nums = [0, 1, 2, 3];

nums.forEach((num) => {
  if (num) count += 1;
});

console.log(count);

Answer: C:3

Explanation: num is 0 (falsy) - count remains 0
num is 1 (truthy) - count becomes 1
num is 2 (truthy) - count becomes 2
num is 3 (truthy) - count becomes 3
So, the final value of count will be 3