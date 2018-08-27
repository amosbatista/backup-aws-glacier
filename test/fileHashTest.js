import chai from "chai"
let expect = chai.expect

import testFunc from './src/hashGenerator.js'

describe('hashGenerator', function(){
    it('should return KKK e aeh man', function(){
        expect(testFunc()).to.be.equal('KKKK e aeh man')
    })
});


export default {}
