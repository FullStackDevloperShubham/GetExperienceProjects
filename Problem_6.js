// Write a function factorial(n) that returns the factorial of a given number using recursion.
function factorial(n) {
    if (n === 0) {
        return 1;
    }
    return n * factorial(n - 1);
}