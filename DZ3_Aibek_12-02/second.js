let arr1 = prompt('Enter first number');
let arr2 = prompt('Enter second number');

function arrDeclaration() {
    if (arr1 < arr2) {
        console.log(`Declaration: ${arr1} меньше`)
    } else if (arr1 > arr2) {
        console.log(`Declaration: ${arr2} меньше`)
    }
}

arrDeclaration();



 const arrExpression = function arr() {
    if (arr1 < arr2) {
        console.log(`Expression: ${arr1} меньше`)
    } else if (arr1 > arr2) {
        console.log(`Expression: ${arr2} меньше`)
    }
}

arrExpression();