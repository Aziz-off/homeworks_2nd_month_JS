// домашнее задание №2 (два других задания в другой папке этого же архива)
let num = prompt('Enter one of this numbers: 1, 2, 3 or 4');

switch(num){
    case '1':
        console.log('winter');
        break;

    case '2':
        console.log('spring');
        break;

    case '3':
        console.log('summer');
        break;
    case '4':
        console.log('autumn');
        break;
    default:
        console.log('error');
}