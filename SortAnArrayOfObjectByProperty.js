// Sort an array of objects by a numeric property 
//     - E.g., sort by age, price, etc.

const people = [
  { name: "Alice", age: 30 },
  { name: "Bob", age: 25 },
  { name: "Charlie", age: 35 }
];

// Using built-in sort method
const sortedWithSort = people.sort((a, b) => a.age - b.age);
console.log(sortedWithSort);

const people2 = [
  { name: "Alice", age: 30 },
  { name: "Bob", age: 25 },
  { name: "Charlie", age: 35 }
];

// Using bubble sort
function bubbleSort(arr) {
  const result = [...arr]; // Create a copy to avoid mutating original
  for (let i = 0; i < result.length; i++) {
    for (let j = 0; j < result.length - i - 1; j++) {
      if (result[j].age > result[j + 1].age) {
        // Swap elements
        let temp = result[j];
        result[j] = result[j + 1];
        result[j + 1] = temp;
      }
    }
  }
  return result;
}

const sortedWithBubbleSort = bubbleSort(people2);
console.log(sortedWithBubbleSort);
