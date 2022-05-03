test("One euro should be 1.206 dollars", function(){
    //import the function from app.js
    const { fromEuroToDollar } = require('./app.js')

    // use the function like its suppoed to be used
    const dollars = fromEuroToDollar(3.5)

    // if 1 euro are 1.206 dollars, then 3.5 euros should be (3.5 * 1.2)
    const expected = 3.5 * 1.2; 
    
    // this is the comparison for the unit test
     expect(fromEuroToDollar(3.5)).toBe(4.2); //1 euro are 1.2 dolares, then 3.5 euros should be = (3.5 * 1.2)
})

test("one dollar to yen should be 127.9 yen", function(){
    const { fromDollarToYen} = require('./app.js')
    const yen = fromDollarToYen(1)

    const expected = 1 * 127.9; 
    
    // this is the comparison for the unit test
     expect(fromDollarToYen(1)).toBe(127.9);
})

test("yen to britishpound 0.8", function(){
    const {fromYenToPound} = require('./app.js')
    const pound = fromYenToPound(1)

    const expected = 1 * 0.8; 
    
    // this is the comparison for the unit test
     expect(fromYenToPound(1)).toBe(0.8);
})