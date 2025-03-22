// Reverse the array
let Characters = ['a','b','c','d','e','f','g','h']
let reverseArray = Characters.reverse()
console.log(reverseArray)


// frequency of number
function mostFrequentElement(arr) {
    let freq = {}; 
    let maxCount = 0;
    let mostFrequent = null;

    for (let item of arr) {
        freq[item] = (freq[item] || 0) + 1;

        if (freq[item] > maxCount) {
            maxCount = freq[item];
            mostFrequent = item;
        }
    }

    return mostFrequent;
}

const arr = [3, 1, 4, 4, 5, 2, 6, 4, 2, 2, 2];
mostFrequentElement(arr)

// merge the two object
function mergeObjects(obj1, obj2) {
    return { ...obj1, ...obj2 };
}
const objA = { a: 1, b: 2, c: 3 };
const objB = { b: 10, c: 30, d: 40 };

console.log(mergeObjects(objA, objB)); 


