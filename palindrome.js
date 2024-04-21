// establish variables and user input
let answer = document.getElementById("answer");
let message = "It is a palindrome";
// logic check palindrome and update variables
function checkPalindrome () {
    let testString = document.getElementById("palindrome").value;
    console.log(testString)
    i=0
    while (i<testString.length/2) {
        if (testString[i] != testString[testString.length-(i+1)]) {
            message = "Not a palindrome"
            console.log(i)
            console.log(testString[i])
            console.log(testString[testString.length-(i+1)])
        } 
        i++;
    }
    // print answer
    answer.textContent= message;
    console.log(answer + " " + message);
}
