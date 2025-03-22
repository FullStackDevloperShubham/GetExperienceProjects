// destructure
const person = { name: "Abc", age: 25, city: "Mumbai" };

const { name, city } = person;

console.log(name);
console.log(city);

// template literal
function greet(firstName, lastName) {
    return `Hello, ${firstName} ${lastName}!`;
}
console.log(greet("John", "Doe"));

// spread opeator
function Arrays(arr1, arr2) {
    return [...arr1, ...arr2];
}
const array1 = [1, 2, 3];
const array2 = [4, 5, 6];

console.log(Arrays(array1, array2));

// rest operator
function sum(...numbers) {
    return numbers.reduce((total, num) => total + num, 0);
}

console.log(sum(1, 4, 50));
console.log(sum(93, 33));
console.log(sum());

// promise
function Promise() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Promise Resolved!");
        }, 1000);
    });
}
delayedPromise()
    .then(message => console.log(message)); 

// chaning promise
function firstPromise() {
    return Promise.resolve(5); 
}

function secondPromise(number) {
    return Promise.resolve(number * 2); 
}

function thirdPromise(number) {
    return Promise.resolve(number + 10); 
}

// Chaining the promises
function first() {
    return Promise.resolve(5); 
}

function second(number) {
    return Promise.resolve(number * 2); 
}

function third(number) {
    return Promise.resolve(number + 10);
}

first()
    .then(second)
    .then(third)
    .then(result => console.log("Final Result:", result))
    .catch(error => console.error("Error:", error));


// async and await
async function fetchData() {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/posts/1");
        if (!response.ok) {
            throw new Error(`Error while fetching data :${response.status}`);
        }
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.error("Error fetching data:", error);
    }
}
fetchData();

// modified version of previous example
async function fetchData() {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/posts/1");

        if (!response.ok) {
            throw new Error(`${response.status}`);
        }

        const data = await response.json();
        console.log("Fetched Data:", data);
    } catch (error) {
        console.error("Error fetching data:", error.message);
    }
}

fetchData();



