const newDiv = document.createElement('div');
newDiv.className = 'trafficLight';
document.body.append(newDiv);

const divOne = document.createElement('div');
divOne.className = 'red';
newDiv.append(divOne);

const divTwo = document.createElement('div');
divTwo.className = 'yellow';
newDiv.append(divTwo);

const divThree = document.createElement('div');
divThree.className = 'green';
newDiv.append(divThree);

const userChoice = prompt('Enter: stop, wait or go');

if (userChoice === 'stop') {
    divOne.style.background = 'red';
    const newH3 = document.createElement('h3');
    newH3.className = 'stop';
    newH3.innerText = 'Stop';
    divOne.append(newH3);
} else if (userChoice === 'wait') {
    divTwo.style.background = 'yellow';
    const newH3 = document.createElement('h3');
    newH3.className = 'wait';
    newH3.innerText = 'wait';
    divTwo.append(newH3);
} else if (userChoice === 'go') {
    divThree.style.background = 'green';
    const newH3 = document.createElement('h3');
    newH3.className = 'go';
    newH3.innerText = 'Go';
    divThree.append(newH3);
} else {
    alert('Enter only one of this words: stop, wait or go')
}

