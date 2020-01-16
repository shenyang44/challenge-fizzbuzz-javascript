let n, n1;
do {
    n = prompt("Enter a number from 1 to 100:");
    n1 = Number(n)
    console.log(n1)
    if ((n1 == n1) == false) {
        alert("That is gobbledygook!");
    }
    else if (n < 1 || n > 100) {
        alert('Not a suitable number!');
    }
}
while ((n1 == n1) == false || (n < 1 || n > 100))

if ((n % 3 == 0) && (n % 5 == 0)) {
    alert("FizzBuzz")
}
else if (n % 3 == 0) {
    alert('Fizz');
}
else if (n % 5 == 0) {
    alert('Buzz');
}

else {
    alert(n)
}
