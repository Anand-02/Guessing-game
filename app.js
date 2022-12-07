let mx = parseInt(prompt("Welcome, enter your max limit"));
while (!mx) {
    mx = parseInt(prompt("Please enter a valid max limit"));
}
const num = Math.floor(Math.random() * mx) + 1;
let cnt = 1;

let guess = parseInt(prompt("Take a guess"));
while (parseInt(guess) !== num) {
    if (guess === "q") break;
    cnt++;
    if (parseInt(guess) < num) {
        guess = prompt("Take higher guess");
    }
    else {
        guess = prompt("Take lower guess");
    }
}
if (guess === "q") {
    console.log("Goodbye, See You Later");
}
else {
    console.log(`It took you ${cnt} times`);
}
