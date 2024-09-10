const assert = require('chai').assert
const app = require('../app')



describe('Unit Test cases for App', function(){
    it('return hello', function(){
        //assert.equal(app(), 'hello')
        assert.equal(app.sayHello(), 'hello')
    })
    
    it('greater than 5', function(){
            assert.isAbove(app.addNubers(4,2),5)
    })
})
    //import fetch from 'node-fetch';