var dataUsers = "Walter sent: “It was 67MB. Is that everything? I’m busy, you know.”|Jesse sent: “Damn, it was like 300MB. Dat Snaptalk is a data hog, yo.”|Saul sent: “I think 283MB. That’s what the guy at the store said. I think it means MegaBites.”|Gus sent: “Around 150MB. I have the receipts if you need more precise figures.”";


var fixdataUsers = dataUsers.replace(/MB/g, " ");


var dataUsers1 = fixdataUsers.split("|");
//console.log(dataUsers1);

var splitdata = [];
var getImpArr = [];
dataUsers1.forEach(function(fixdataUsers) {
splitdata.push(fixdataUsers.split("."));
  });
    // console.log(splitdata);



//
// fixdataUsers.forEach(function(splitdata)
// getImpArr.push(splitdata.split(","));
//
// console.log(getImpArr);
//


    // var str = 'Joe has 20mb';
  //  var arrDataNumber = dataUsers.split('');
    //  var splitdata1 = splitdata.split(",");

  //  console.log(splitdata1);
  var nameData = {};
     for (var z =0; z < splitdata.length; z++) {
       //beginning of 2nd loop
     	var dataArray = splitdata[z];

     	if(typeof parseInt(splitdata[z]) == 'number') {
     		data = parseInt(splitdata[z]);
      //  console.log();
     	}
      //end of 2nd loop
      }


       console.log(name + ' ' + data);
