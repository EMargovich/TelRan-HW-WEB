const button = document.querySelector("button");
const text = document.querySelector("#text");
const inpColor = document.querySelector("#inpColor");
const inpSize = document.querySelector("#inpSize");

button.addEventListener("click", () => {updateBottomText()});

let updateBottomText = function () {
        text.style.fontSize = inpSize.value + "px";
        text.style.color = inpColor.value + "";
}