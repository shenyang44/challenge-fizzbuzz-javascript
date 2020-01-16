let n;
do {
    n = prompt("Enter a number from 1 to 100:");

    if (isNaN(n)) {
        alert("That is gobbledygook!");
    }
    else if (n < 1 || n > 100) {
        alert('Not a suitable number!');
    }
}
while (n > 100 || n < 1 || isNaN(n) == true)

function mod(number, key) {
    if (number % key == 0) {
        return (1)
    }
    else {
        return (0)
    }
}
let fizz1 = mod(n, 3);
let buzz1 = mod(n, 5);
let woof1 = mod(n, 7);

function view(number, key) {
    if (number % 10 == key && (Math.floor(number / 10)) % 10 == key) {
        return (2)
    }
    else if (number % 10 == key || (Math.floor(number / 10)) % 10 == key) {
        return (1)
    }
    else {
        return (0)
    }
}

let fizz = view(n, 3);
let buzz = view(n, 5);
let woof = view(n, 7);


let fizzCount = "Fizz ".repeat(fizz + fizz1);
let buzzCount = "Buzz ".repeat(buzz + buzz1);
let woofCount = "Woof ".repeat(woof + woof1);

if (fizz1 + fizz + buzz + buzz1 + woof + woof1 == 0) {
    alert(n)
}
else {
    alert(fizzCount + buzzCount + woofCount);
}
