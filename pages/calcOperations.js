let calcOperations = function(){

        let URL = 'https://mouniqa.github.io/calc/';
        let firstNumber = element(by.model('first'));
        let secondNummber = element(by.model('second'));
        let buttonGo = element(by.buttonText('Result'));        
        
        
        
        
        this.openBrowser = function(){
            browser.get(URL);
            
        };
        this.enterFirstNo=function(enterNumber){
            firstNumber.sendKeys(enterNumber);
        };
        this.enterSecondNumber=function(enterNumber){
            secondNummber.sendKeys(enterNumber)
        };
        this.selectOperator=function(operator){
           element(by.cssContainingText('option', operator)).click();
        };
        this.clickButton=function(){
            buttonGo.click();
        };
        this.verifyResult=function(result){
            let output=element(by.cssContainingText('.ng-binding',result));
            expect(output.getText()).toEqual(result);
            
        };
        this.browserWait=function(timeinSeconds){
            browser.sleep(timeinSeconds*1000)
        };

}

module.exports = new calcOperations();