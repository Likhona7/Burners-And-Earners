exports.objarr = function(){

  var users = "Walter sent: “It was 67MB. Is that everything? I’m busy, you know.”|Jesse sent: “Damn, it was like 300MB. Dat Snaptalk is a data hog, yo.”|Saul sent: “I think 283MB. That’s what the guy at the store said. I think it means MegaBites.”|Gus sent: “Around 150MB. I have the receipts if you need more precise figures.”";


  var user = users.split(".");
  var userData = [];
  var userData2 = [];
// var userData3 = [];

    userData.push(user[0]);userData.push(user[2]);
    userData.push(user[4]);userData.push(user[7]);

userData.forEach(function(arr){
userData2.push(arr.split(","));


});
console.log(userData2);

//var replasUser = userData2.replace(/"|"/g, "");


//console.log(replasUser);
  });
  console.log(userData2);
}
