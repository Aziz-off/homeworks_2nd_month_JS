countChar = (symbol, word) => {
    let num = 0;
    for (let i = 0; i < word.length; i++) {
        if (symbol === word[i]) {
            num++;
        }
    }
    return num;
}

console.log(countChar('d', 'akjsdddhdkaskddddd'));
console.log(countChar('e', 'eeehhhhehhhhehhh'));