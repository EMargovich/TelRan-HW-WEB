function isPalindrome(word) {
    if (word === "") return false;
    let newWord = word.toLowerCase();
    for (let i = 0; i < newWord.length / 2; i++) {
        if (newWord[i] !== newWord[newWord.length - 1 - i]) {
            return false;
        }
    }
    return true;
}

let button = document.querySelector("#button");
let result = document.querySelector("#result");
let text = document.querySelector("#text");

button.addEventListener("click", () => {
    console.log(isPalindrome(text.value));
    if (isPalindrome(text.value)) { // check the actual result
        result.innerHTML = "Palindrome!";
        result.style.color = "green";
    } else {
        result.innerHTML = "Not a palindrome!";
        result.style.color = "red";
    }
});
