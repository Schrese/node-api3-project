const request = require('supertest');
const server = require('./server.js');

describe('server', function() {
    //tests whether or not the test is running
    it('runs the test', function() {
        expect(true).toBe(true);
    })

    //tests base get request type
    describe('GET /', function() {
        it('should return h2 text', function() {
            return request(server).get('/').then(res => {
                expect(res.type).toMatch('text/html')
            })
        })
    })
})