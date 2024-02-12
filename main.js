function isPalindrome(str) {
    const cleanedStr = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
    return cleanedStr === cleanedStr.split('').reverse().join('');
}

function checkForPalindrome() {
    const inputField = document.querySelector('#inputString');
    const resultDisplay = document.querySelector('#result');

    const inputString = inputField.value.trim();

    if (inputString === '') {
        resultDisplay.textContent = 'Please enter a string.';
        return;
    }

    if (isPalindrome(inputString)) {
        resultDisplay.textContent = "Yes, it's a palindrome!";
    } else {
        resultDisplay.textContent = "No, it's not a palindrome.";
    }
}