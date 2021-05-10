//opdracht 1

const button = document.querySelector(".btn-alert");

const buttonAlert = () => alert("Button clicked");

button.addEventListener("click", buttonAlert);

//opdracht 2 

const buttonBackground = document.querySelector(".blue-background");

const changeColor = () => buttonBackground.classList.add("red-background");

buttonBackground.addEventListener("click", changeColor);


// or write it like this: 
// buttonBackground.addEventListener("click", function(e){
//     buttonBackground.classList.add("red-background")
// })


//opdracht 3

const toggleButton = document.querySelector("#toggle-button");

const toggleColor = () => toggleButton.classList.toggle("red-background");

toggleButton.addEventListener("click", toggleColor);