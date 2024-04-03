const prompt = require('prompt-sync')();
let score = prompt("Please enter your score: ");
if(score <= 100 && score >= 90){
    console.log("You got grade A")
}
else if(score < 90 && score >= 80){
    console.log("You got grade B")
}
else if(score < 80 && score >= 70){
    console.log("You got grade C")
}
else if(score < 70 && score >= 60){
    console.log("You got grade D")
}
else if(score < 60 && score >= 50){
    console.log("You got grade E")
}
else{
    console.log("You don't past in exam!!! You got grade F")
}