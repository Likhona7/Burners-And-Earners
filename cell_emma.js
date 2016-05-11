exports.manipulateArr = function(){

var users = "Walter sent: “It was 67MB. Is that everything? I’m busy, you know.”Jesse sent: “Damn, it was like 300MB. Dat Snaptalk is a data hog, yo.”Saul sent: “I think 283MB. That’s what the guy at the store said. I think it means MegaBites.”Gus sent: “Around 150MB. I have the receipts if you need more precise figures.”";

var user = users.replace(/MB/g, " MB").replace(/”/g, "").split(".");
var user1 = [];var user2 = [];

user.forEach(function(str) {
  user1.push(str.split(' '));
});
user1.forEach(function(arr) {
  if (arr[arr.length - 1] === "MB") {
    user2.push(arr);
  }
});
// console.log(user1);
//  console.log(user2);

var userData = [];

user2.forEach(function(arr) {

  userObj = {
    name: arr[0],
    data: Number(arr[arr.length - 2])
  };

  userData.push(userObj);

});
//console.log(userData);
return userData;
}
//////////////////////////////////////////////////////////////////////////////
exports.maximum = function(ObjectData){

  var max = -Infinity;
   var maxObj = {};
   ObjectData.forEach(function(obj) {
     if (obj.data > max) {
        max = obj.data;
        maxObj = obj;
}

})

//console.log(maxObj)
return maxObj;
}
/////////////////////////////////////////////////////////////////////////////
exports.minimum = function(ObjectData){

var min = Infinity;
var minObj = {};
ObjectData.forEach(function(obj){
  if(obj.data < min){

    min = obj.data;
    minObj = obj;

  }

})

//console.log(minObj);
return minObj;


}
