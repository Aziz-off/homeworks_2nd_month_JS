let anyNumber = [42, 65, 49, 68, 35, 58, 63, 40, 70];
let maxMassNam = 0;

for (let i in anyNumber) {
	if (anyNumber[i] > maxMassNam) {
		maxMassNam = anyNumber[i];
	}
}

console.log('maxMassNam: ', maxMassNam);



// второй способ через глоб перем как  отправлял учителю
