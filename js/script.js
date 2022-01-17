// Question 1
// Loop through the array below and console log each type property if the age is at least 4.

var pets = [
    {
      type: "cat",
      age: 5.5,
    },
    {
      type: "dog",
      age: 3.8,
    },
    {
      type: "parrot",
      age: 4.0,
    },
  ];


for (var i =0; i < pets.length; i++){
    let agePets = pets[i].age;
    let typePets = pets[i].type;
    if (agePets >= 4){
        console.log(typePets);
    }
}

// Question 2
// Create a function with one argument.

// Inside the function check the type of the value being passed in.

// If it is a boolean value, log the value.

// If it is not a boolean value, log the message “Please pass a boolean value in”.

// Call the function and pass a value in.


function boolTest (boolArg) {
    if (typeof(boolArg) === "boolean"){
        console.log(boolArg);
    }else{
        console.log("Please pass a boolean value in");
    }
    
}

boolTest(true)

// Question 3
// Write code that does the following:
// When the button in the HTML is clicked, change the colour of the h2 element to “blue” and change it to read “Updated subheading”.

const heading = document.querySelector("h2");
const button = document.querySelector("button");

function changeHeading(){
  heading.innerHTML = "Updated heading";
  heading.style.color = "blue";
}

button.onclick = changeHeading;





