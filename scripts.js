// Подсчитать сумму всех чисел в заданном пользователем диапазоне.

/* var startOfRange = +prompt("Enter start of range");
var endOfRange = +prompt("Enter end of range");
var sum = 0;
if (startOfRange < endOfRange) {
    for (startOfRange; startOfRange <= endOfRange; startOfRange++) {
        sum += startOfRange;
    }
    alert(sum);
}
else {
    alert("Enter right range!");
} */

// Запросить 2 числа и найти только наибольший общий делитель.

/* var firstNumber = +prompt("Enter first number");
var secondNumber = +prompt("Enter second number");
var mostDivisor = 0;
if (firstNumber <= secondNumber && firstNumber > 0 && secondNumber > 0) {
    for (var i = 1; i <= firstNumber; i++) {
        if (firstNumber % i === 0 && secondNumber % i === 0) {
            mostDivisor = i;
        }
    }
    alert(mostDivisor);
}
else if (secondNumber < firstNumber && firstNumber > 0 && secondNumber > 0) {
    for (var i = 1; i <= secondNumber; i++) {
        if (firstNumber % i === 0 && secondNumber % i === 0) {
            mostDivisor = i;
        }
    }
    alert(mostDivisor);
}
else {
    alert('Oops! Something went wrong! Try again.');
} */

// Запросить у пользователя число и вывести все делители этого числа

/* var number = +prompt("Enter number to find out his divisors");
if (number > 0) {
    for (var i = 1; i <= number; i++) {
        if (number % i === 0) {
            console.log(i);
        }
    }
}
else {
    console.log("Oops! Something went wrong! Try again!");
} */