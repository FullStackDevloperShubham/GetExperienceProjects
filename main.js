// take the value of the input field and store it in a variable
// create a new list item with the text from the input field
// append the list item to the list
// clear the input field

let counterNumber = document.querySelector('#counter');
let incrementButton = document.querySelector('#increase');
let decrementButton = document.querySelector('#decrease');

let count = 0;

incrementButton.addEventListener('click', function() {
    count++;
    counterNumber.textContent = count;
}
);
decrementButton.addEventListener('click',function(){
    count--;
    counterNumber.textContent = count;
})

// light and dark mode 
let darkModeButton = document.querySelector('#dark');
let lightModeButton = document.querySelector('#light');
let body = document.querySelector('body');
let darkMode = false;
let lightMode = false;
darkModeButton.addEventListener('click', function(){
    if(darkMode === false){
        body.style.backgroundColor = 'black';
        body.style.color = 'white';
    }
}
)

lightModeButton.addEventListener('click',function(){
    if(lightMode === false){
        body.style.backgroundColor = 'white';
        body.style.color = 'black';
    }
})