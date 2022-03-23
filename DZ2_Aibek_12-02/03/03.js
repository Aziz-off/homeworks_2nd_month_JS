for (let i = 1; i <= 100; i++) {
    if (i % 3 == 0) {
        console.log('Coca');
    }
    if (i % 5 == 0) {
        console.log('Cola');
    }
    if (i % 5 == 0 && i % 3 == 0) {
        console.log('CocaCola');
    }
    // i % 3 == 0 Coca
    // i % 5 == 0 Cola
    // i % 5 == 0 && i % 3 == 0 CocaCola
}
