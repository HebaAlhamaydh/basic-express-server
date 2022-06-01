'use strict';
// const validator = require('../src/middleware/validator');
const supertest = require('supertest');
const server = require('../src/server');
// const { response } = require('express');
const request = supertest(server.app);

describe ("Testing validator",()=>{
   
test("Is name null in the query string",async ()=>{
const response = await request.get('/person');
expect(response.status).toEqual(500);

});

test("name is in the query string",async ()=>{
    const response = await request.get('/person?name=heba');
    expect(response.status).toEqual(200);
});

test(" Output object is correct",async ()=>{
    const response = await request.get('/person?name=heba');
    expect(response.body).toEqual({"name":"heba"})

})

test(" name is empty",async ()=>{
    const response = await request.get('/person?name=');
    expect(response.body).toEqual({"name":"user"})

})

test(" name is not string",async ()=>{
    const response = await request.get('/person?name=$');
    expect(response.body).toEqual({"name":"wrong Name"})

})

})