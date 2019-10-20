let calcOperations = require('../pages/calcOperations');

describe(' home page calcOperations', function() {
    it('Addition ', function() {
        calcOperations.openBrowser();
        calcOperations.enterFirstNo('1');
        calcOperations.enterSecondNumber('2');
        calcOperations.selectOperator('+');
        calcOperations.clickButton();
        calcOperations.verifyResult('3');
        
    });

    it('Subtraction ', function() {
        calcOperations.openBrowser();
        calcOperations.enterFirstNo('6');
        calcOperations.enterSecondNumber('2');
        calcOperations.selectOperator('#');
        calcOperations.clickButton();
        calcOperations.verifyResult('4');
        
    });


    it('Multiplication ', function() {
        calcOperations.openBrowser();
        calcOperations.enterFirstNo('5');
        calcOperations.enterSecondNumber('2');
        calcOperations.selectOperator('*');
        calcOperations.clickButton();
        calcOperations.verifyResult('10');
        
    });


    it('Division ', function() {
        calcOperations.openBrowser();
        calcOperations.enterFirstNo('9');
        calcOperations.enterSecondNumber('3');
        calcOperations.selectOperator('/');
        calcOperations.clickButton();
        calcOperations.verifyResult('3');
        
    });

  });