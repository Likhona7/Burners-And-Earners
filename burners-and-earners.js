var newWalter = [];
////////////////////////////////////////////////////////////
var newJesse = [];
////////////////////////////////////////////////////////////
var newSaul = [];
////////////////////////////////////////////////////////////
var newGus = [];
/////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////
var CalAllArr = [];
var Walter ="It was 67MB. Is that everything? I’m busy, you know.",
 Jesse = " Damn, it was like 300MB. Dat Snaptalk is a data hog, yo.",
 Saul = "I think 283MB. That’s what the guy at the store said. I think it means MegaBites.",
 Gus = "Around 150MB. I have the receipts if you need more precise figures.";
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////



 var splitWord = Walter.replace(/MB/g, " MB");
var newWalter = splitWord.split(" ");
//console.log(Number(newWalter[2]));
/////////////////////////////////////////////////////////////////////////////////////////////////
var splitWord = Jesse.replace(/MB/g, " MB");
var newJesse = splitWord.split(" ")
//console.log(Number(newJesse[5]));
//////////////////////////////////////////////////////////////////////////////////////////////////
var splitWord = Saul.replace(/MB/g, " MB");
var newSaul = splitWord.split(" ");
//console.log(Number(newSaul[2]));
///////////////////////////////////////////////////////////////////////////////////////////////////
var splitWord = Gus.replace(/MB/g, " MB");
var newGus = splitWord.split(" ");
//console.log(Number(newGus[1]));

 //var CalAllArr = newWalter[2].push(newWalter);

 // newWalter.forEach(function(item) {
 //   var item = newWalter;
 //   CalAllArr.push(item[2]);

   var CalAllArr = [];
   sub1 = newWalter[2];
   sub2 = newJesse[5];
   sub3 = newSaul[2];
   sub4 = newGus[1];


   CalAllArr.push(sub1, sub2, sub3, sub4)
   console.log(CalAllArr);



   var min = Math.min.apply(null, CalAllArr),
     max = Math.max.apply(null, CalAllArr);

console.log(max + "MB", "Jesse Uses Most Data");
console.log(min + "MB", "Walter Uses Least Data");



var newWalterApp =[];
 var newJesseApp =[];
 var newSaulApp = [];
 var newGusApp = [];
/////////////////////////////////////////

var latestAppWalter = [];
var latestAppWalter = [];
var latestAppWalter = [];

var WalterApp = "Hello. I’ve got Faceblock and Instantgam. I’m too old for the other ones.",
JesseApp = "Yo! I’ve got ‘em all. Tooter, Faceblock, Instantgam, Snaptalk.",
SaulApp = "I’m on LankedOn for Business. And I have an Instantgam account for my cats. Oh, and Faceblock for my ex-husbands.",
GusApp = "I use Tooter and Instantgam. My customers aren’t on the others, so I can’t get them to engage with my brand there.";


//////////////////////////////////////////////////////////////////////////////
var splitWord = WalterApp.replace(/ Instantgam./g, " Instantgam");
var newWalterApp = splitWord.split(" ");
newWalterApp[3]
//console.log(newWalterApp);
/////////////////////////////////////////////////////////////////////////////////
var splitWord = JesseApp.replace(/Snaptalk./g, "Snaptalk");
var newJesseApp = splitWord.split(" ");
//console.log(newJesseApp);
///////////////////////////////////////////////////////////////////////////////////
var newSaulApp = SaulApp.split(" ");
//console.log(newSaulApp);
////////////////////////////////////////////////////////////////////////////////////
var splitWord = GusApp.replace(/Instantgam./g, "Instantgam");
var newGusApp = splitWord.split(" ");
console.log(newGusApp);

// var latestAppWalter = newWalterApp[2].push(newWalterApp);

var App = newJesseApp[5],
App1 = newJesseApp[6],
App2 = newJesseApp[7],
App3 = newJesseApp[8];


var latestAppWalter = [];
sub1 = newWalterApp[3];
sub2 = newWalterApp[5];


latestAppWalter.push(sub1, sub2)
console.log(latestAppWalter);
// var latestAppWalter = [];
//
// sub1 = newWalterApp[2] ;
// sub2 = newJesseApp[5] ;
// sub3 = newSaulApp[2] ;
// sub4 = newGusApp[1] ;
//
// latest.push(sub1, sub2, sub3, sub4)
// console.log(CalAllArr);
