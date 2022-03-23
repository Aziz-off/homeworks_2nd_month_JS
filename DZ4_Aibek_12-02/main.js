// -*-*-*-*-*-*-*-*-*-*-*-*-*-*- Первое домашнее задание -*-*-*-*-*-*-*-*-*-*-*-*-*-*-

let newBtn = document.createElement('button');
newBtn.innerText = 'Color Flipper';
newBtn.className = 'btn';
document.body.append(newBtn);
newBtn.style.margin = '0 100px';

newBtn.addEventListener('click', colorFlipper);

function randomNum(min, max) {
    let num = Math.round(Math.random() * (max - min) + min);
    return num;
}

function getHexNum(num) {
    return num.toString(16);
}

function colorFlipper() {
    let red = getHexNum(randomNum(0, 255));
    let green = getHexNum(randomNum(0, 255));
    let blue = getHexNum(randomNum(0, 255));
    let hex = `#${red}${green}${blue}`;
    console.log('hex: ', hex);
    document.body.style.background = hex;
}


// -*-*-*-*-*-*-*-*-*-*-*-*-*-*- Второе домашнее задание -*-*-*-*-*-*-*-*-*-*-*-*-*-*-

let newInputLogin = document.createElement('input');
let newInputPassword = document.createElement('input');
let newForm = document.createElement('form');
let newBtn2 = document.createElement('button');

newBtn2.className = 'btn2';
newBtn2.innerText = 'Login';
newForm.style.margin = '100px';
newInputLogin.placeholder = 'Login';
newInputPassword.placeholder = 'Password';

document.body.append(newForm);
newForm.append(newInputLogin);
newForm.append(newInputPassword);
newForm.append(newBtn2);

function matchData() {
	if (
        newInputLogin.value === 'qwerty@mail.ru' &&
        newInputPassword.value === 'pass123'
	) {
		alert('Hi, User');
	} else {
        alert('Incorrect data! Try again');
	}
}
newBtn2.addEventListener('click', matchData);



// -*-*-*-*-*-*-*-*-*-*-*-*-*-*- Третье домашнее задание -*-*-*-*-*-*-*-*-*-*-*-*-*-*-

let newDiv = document.createElement('div');
newDiv.className = 'counter';
document.body.append(newDiv);
newDiv.style.margin = '100px';

let newH2 = document.createElement('h2');
newH2.innerText = 'Counter';
newH2.style.fontSize = '40px';
newDiv.append(newH2);

let newH3 = document.createElement('h3');
newH3.style.fontSize = '50px';
newH3.innerHTML = 0;
newDiv.append(newH3);

let newBtn3 = document.createElement('button');
newBtn3.innerText = 'Increase +++';
newBtn3.className = 'btn3';
newBtn3.style.marginRight = '20px';
newH3.style.paddingLeft = '120px';
newDiv.append(newBtn3);

let newBtn4 = document.createElement('button');
newBtn4.innerText = 'Decrease ---';
newBtn4.className = 'btn4';
newBtn4.style.marginRight = '20px';
newDiv.append(newBtn4);

let newBtn5 = document.createElement('button');
newBtn5.innerText = 'Reset 0';
newBtn5.className = 'btn5';
newDiv.append(newBtn5);

let counter = 0;

function counterIncrease() {
    counter++;
    newH3.innerHTML = counter;
    if (counter >= 0) {
        newH3.style.color = 'green';
    }
}
newBtn3.addEventListener('click', counterIncrease);


function counterDecrease() {
    counter--;
    newH3.innerHTML = counter;
    if (counter <= 0) {
        newH3.style.color = 'red';
    }
}
newBtn4.addEventListener('click', counterDecrease);

function resetCount() {
    counter = 0;
    newH3.innerHTML = counter;
}

newBtn5.addEventListener('click', resetCount);





