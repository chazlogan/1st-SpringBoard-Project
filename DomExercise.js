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
