// -*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-Первое задание*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-
// создать 5 массивов и распаковать в один массив

const array1 = [1, 2, 3, 4, 5];
const array2 = ['banana', 'apple', 'lemon', 'melon', 'avocado'];
const array3 = [{key1: 'value', key2: 'value'}, [true, false]];
const array4 = ['', 12];
const array5 = ['something', 'someone'];

const array = [...array1, ...array2, ...array3, ...array4, ...array5];
console.log(array);



// -*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-Второе задание*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-
// создать объект у которого есть 5 ключей после создать новый объект
// и распаковав в новый объект дополнить 3 ключами

const obj = {
    day: 'monday',
    month: 'july',
    season: 'summer',
    year: 2022,
    key5: 'some value',
};

const newObj = {
    ...obj,
    fruit: 'pineapple',
    drink: 'water',
    movie: 'titanic'
}

console.log(newObj);


// -*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-Третье задание*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-
//  сделать приветствие с помощью HTML, CSS, JS то есть будет input в который я введу свое имя
//  и выйдет текст снизу инпута типа “Hello Jack”


document.querySelector('button').addEventListener('click', myClick)

function myClick() {
    let user = document.querySelector('.input').value;
    document.querySelector('.text').innerHTML = "Hello: " + user;
}
