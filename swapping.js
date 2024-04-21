// establish user input and empty array
let original = prompt ("Enter a number");
let answer= "";
// logic to update empty array with new input
for ( let i=0; i<original.length; i++) {
    let num=original[i];
    if (i==1) {
        num= original[original.length-1];
        console.log(num);
    } else if (i==original.length-1) {
        num=original[1];
        console.log(num);
    }
    answer += num;
}
// print answer
alert (original + " swapped is " + answer);