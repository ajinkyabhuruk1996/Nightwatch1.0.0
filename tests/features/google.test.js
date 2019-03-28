//https://medium.freecodecamp.org/how-to-easily-start-automatically-testing-your-website-8629ea8df04a?gi=219c101dc926

module.exports= {
    'step one: navigate to google page': function(browser){
        browser
        .url('https://google.com')
        .waitForElementVisible('body',1000)
    },
    'step two: enter search data': function(browser){
        browser
        .setValue('input[title=Search][role=combobox]',['Learning Angular', browser.keys.ENTER])
        .pause(10000)
       // .click('ul > li:nth-child(2)')
        .end();
    }
};