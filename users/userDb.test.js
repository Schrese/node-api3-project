const User = require('./userDb.js');
const db = require('../data/dbConfig.js');

describe('userDb/model', function() {
    //tests whether or not this is being run on the testing environment
    describe('test environment', function() {
        it('should be using the testing environment', function() {
            expect(process.env.DB_ENV).toBe('testing')
        })
    })
})