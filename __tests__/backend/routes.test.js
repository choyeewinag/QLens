const request = require('supertest');
const express = require('express');
const testMongoDBURI = require('../../server/controllers/TestMongoDBURI');
const app = require('../../server/server');

// beforeAll(done => {
//     done()
//   })
  
//   afterAll(done => {
//     // Closing the DB connection allows Jest to exit successfully.
//     mongoose.connection.close()
//     done()
//   })


describe('Route integration', () => {
    describe('/getURI', () => {
      describe('POST -> /getURI', () => {
        it('responds with 200 status and text/html content type with mongoURI passed in req body', (done) => {
          return request(app)
            .post('/getURI')
            .send({ userURI: testMongoDBURI })
            .expect('Content-Type', /text\/html/)
            .expect(200, done);
        });
      });
    })
})    