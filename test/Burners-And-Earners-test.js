var assert = require("assert");

var cell_emma = require("../cell_emma");


var ObjectData = [ { name: 'Walter', data: 67 },
  { name: 'Jesse', data: 300 },
  { name: 'Saul', data: 283 },
  { name: 'Gus', data: 150 } ]


describe("Take the string inputs above and calculate", function(){

 it("should return the Object with usernames and data values", function(){
var vee =   [ { name: 'Walter', data: 67 },
     { name: 'Jesse', data: 300 },
     { name: 'Saul', data: 283 },
     { name: 'Gus', data: 150 } ]

 var result = cell_emma.manipulateArr(ObjectData);
 assert.deepEqual(result, vee)

 })




it("should return user who uses most data", function(){
  var vee1 = {name: 'Jesse', data: 300};
var result = cell_emma.maximum(ObjectData);
assert.deepEqual(result,vee1)
})

it("should return user who uses the least data", function(){

var vee2 = { name: 'Walter', data: 67 };
var result = cell_emma.minimum(ObjectData);
assert.deepEqual(result,vee2)
})


it("should return user Who uses the most apps", function(){
var result = cell_emma();
assert.equal(result)
})
it("should return Who uses Faceblock?", function(){
  var result = cell_emma();
  assert.equal(result)
})

it("should return Who doesn’t use Faceblock?", function(){
  var result = cell_emma();
  assert.equal(result)
})

it("should return For each person, estimate how much data each app uses. Use the data ratios from our friend at the network.", function(){
  var result = cell_emma();
  assert.equal(result)
})

})
