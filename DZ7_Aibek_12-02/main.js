class House {
    constructor(type, square, floor, wallMaterial, roofMaterial, windowsMaterial)  {
        this.type = type;
        this.square = square;
        this.floor = floor;
        this.wallMaterial = wallMaterial;
        this.roofMaterial = roofMaterial;
        this.windowsMaterial = windowsMaterial;
    }
}

class PrivateHouse extends House {
    constructor(type, square, floor, wallMaterial, roofMaterial, windowsMaterial, landSquare, typeOfTrees, address) {
        super(type, square, floor, wallMaterial, roofMaterial, windowsMaterial);
        this.landSquare = landSquare;
        this.typeOfTrees = typeOfTrees;
        this.address = address;
    }

    myAddress() {
        console.log(`My home located in ${this.address}`)
    }
}

const myHome = new PrivateHouse(
    'private',
    '100 square meters',
    'One Floor',
    'brick',
    'shingles',
    'Plastic',
    '500 square meters',
    'apples',
    'Bishkek'
)

myHome.myAddress();
console.log(myHome);

// -*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*

class HomeInner {
    constructor(roomNumbers, wallColors, heatingOfHouse, antiqueFurniture, typeOfFlowers, colorOfCurtains, modelOfFridge, modelOfTV, animals, typeOfFloor) {
        this.roomNumbers = roomNumbers;
        this.wallColors = wallColors;
        this.heatingOfHouse = heatingOfHouse;
        this.antiqueFurniture = antiqueFurniture;
        this.typeOfFlowers = typeOfFlowers;
        this.colorOfCurtains = colorOfCurtains;
        this.modelOfFridge = modelOfFridge;
        this.modelOfTV = modelOfTV;
        this.animals = animals;
        this.typeOfFloor = typeOfFloor;
    }
}

class PrivateHomeInner extends HomeInner {
    constructor(roomNumbers, wallColors, heatingOfHouse, antiqueFurniture, typeOfFlowers, colorOfCurtains, modelOfFridge, modelOfTV, animals, typeOfFloor, kitchenStyle, typeOfInternet, numberOfPeople, typeOfCarpet, modelOfWashingMachine) {
        super(roomNumbers, wallColors, heatingOfHouse, antiqueFurniture, typeOfFlowers, colorOfCurtains, modelOfFridge, modelOfTV, animals, typeOfFloor);
        this.kitchenStyle = kitchenStyle;
        this.typeOfInternet = typeOfInternet;
        this.numberOfPeople = numberOfPeople;
        this.typeOfCarpet = typeOfCarpet;
        this.modelOfWashingMachine = modelOfWashingMachine;
    }

    someDescription() {
        console.log(`My home consist ${this.roomNumbers}\nI live with my mom, so my family consist ${this.numberOfPeople}`);
    }
}

const myHomeInner = new PrivateHomeInner(
  ' 7 rooms',
  'white and black',
    'with Gas',
    'piano',
    'rose',
    'green',
    'LG',
    'Samsung',
    'fish',
    'паркет',
    'highTech',
    'AkNet',
    '2 people',
    'ковролин',
    'BEKO'

);

myHomeInner.someDescription();
console.log(myHomeInner);
