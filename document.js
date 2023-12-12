document.getElementById('calculateButton').addEventListener('click', function() {
    const numbersInput = document.getElementById('numbersInput').value;
    const numbersArray = numbersInput.split(',').map(num => parseInt(num));
    const evenSum = sumEvenNumbers(numbersArray);
    document.getElementById('result').textContent = `Sum of even numbers: ${evenSum}`;
});
function sumEvenNumbers(numbers) {
    let sum = 0;
    for (let num of numbers) {
        if (num % 2 === 0) {
            sum += num;
        }
    }
    return sum;
}
