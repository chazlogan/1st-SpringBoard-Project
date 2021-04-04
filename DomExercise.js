// Write the code necessary to do the following:

// Select the section with an id of container without using querySelector.
// Select the section with an id of container using querySelector.
// Select all of the list items with a class of “second”.
// Select a list item with a class of third, but only the list item inside of the ol tag.
// Give the section with an id of container the text “Hello!”.
// Add the class main to the div with a class of footer.
// Remove the class main on the div with a class of footer.
// Create a new li element.
// Give the li the text “four”.
// Append the li to the ul element.
// Loop over all of the lis inside the ol tag and give them a background color of “green”.
// Remove the div with a class of footer






const sec = document.getElementById("container")
const sec = document.querySelector("#container")
document.getElementsByClassName("second") or document.querySelectorAll('.second')
document.querySelector("ol .third")
const sayHello = document.getElementsByClassName("container")
sayHello.innerText = "Hello!"
let footer = document.querySelector(".footer");
footer.classList.add("main");
or
footer.className += "main";

let footer = document.querySelector(".footer");
footer.classList.remove("main");
const newEle = document.createElement('li')
newEle.innerText = "four";


let list = document.querySelector("ul")
list.appendChild(newEle)

//loop over all of the lis inside the old tag and give them a background color of green
let liIn = document.querySelectorAll("ol li");

for (let i = 0; i < liIn.length; i++) {
    liIn[i].getElementsByClassName.backgroundColor = "green";


}


// remove div with class of footer
let footer = document.querySelector("footer");
footer.remove();
