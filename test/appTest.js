const assert =require('chai').assert;


describe('Fiels Test for Killer robot',function(){
    let num=6;
    let str="Adityaskjvhk"
    it('check that num is numeric',function(){
        assert.isNumber(num);
    })
    it('check that str is string',function(){
        assert.isString(str);
    })
})