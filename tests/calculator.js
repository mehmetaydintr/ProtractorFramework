/*describe('demo calultor tests', function(){
    it('addition test',function(){
        
        browser.get('http://juliemr.github.io/protractor-demo/');

        var input1 = element(by.model('first')).sendKeys('2');
        var input2 = element(by.model('second')).sendKeys('3');

        element(by.css('[ng-click="doAddition()"]')).click();

        let result = element(by.cssContainingText('.ng-binding', '5')); //Ne işe yaradığını bilmiyorum :D

        expect(result.getText()).toEqual('5'); //Beklenen 

        browser.sleep(5000);



       
    });
});*/

let homepage = require('../pages/homepage');

describe('demo calultor tests', function(){
    it('addition test',function(){
        homepage.get('http://juliemr.github.io/protractor-demo/');
        
        homepage.enterFirstNumber('10');
        
        homepage.enterSecondNumber('20');
        
        homepage.clickGo();
        
        homepage.verifyResult('30');
        
        browser.sleep(2000);
    });

    it('subtraction test',function(){
        homepage.get('http://juliemr.github.io/protractor-demo/');
        
        homepage.enterFirstNumber('10');
        
        homepage.enterSecondNumber('20');
        
        homepage.clickGo1();
        
        homepage.verifyResult('30');
        
        browser.sleep(2000);
    });
});