async function getBaconipsum(){
  //first build the API call string by starting with the URL
  var apiString ="https://baconipsum.com/api/";
  //next add the parameters to the string using the drop down lists;
  var theNewParagraphs = document.getElementById("newParagraphs").value;
  var theType = document.getElementById("meatOrFiller").value;
  apiString = apiString + "?type=" + theType + "&paras=" + theNewParagraphs;
  
  alert(apiString); // show the API string

  //now make the API call to the web service using the string and store what is returned in response
  var response = await fetch(apiString);

  //finally, print the response in the various formats
  document.getElementById("myRawData").innerHTML =""; //clear what previuosly shown
  document.getElementById("myFormattedData").innerHTML =""; //clear what previuosly shown
  document.getElementById("myEncryptedData").innerHTML ="";

  var jsonData = await response.json(); //read the response as JSON

  //stringly and print the JSON object in the RawData section
  document.getElementById("myRawData").innerHTML = JSON.stringify(jsonData);


  //loop through the JSON object one paragraph at a time and print each in the FormattedData section
  for(var para in jsonData){
    document.getElementById("myFormattedData").innerHTML += "<p>" +jsonData[para] + "<p>";
    let encryptedPara = caesarCipher(jsonData[para],2);
    document.getElementById("myEncryptedData").innerHTML += "<p>" +encryptedPara + "<p>";

  }
  return true;



function caesarCipher(str, num){
  var lowerCaseStr = str.toLowerCase();
  var alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
  var newStr = '';

  for (var i = 0; i< lowerCaseStr.length; i++){
    var currentLetter = lowerCaseStr[i];
    if(currentLetter===' '){
      newStr += currentLetter;
      continue;
    }
    var currentIndex = alphabet.indexOf(currentLetter);
    var newIndex = currentIndex +num;
    if(newIndex > 25) newIndex = newIndex - 26;
    if(newIndex < 0) newIndex = newIndex + 26;
    if(str[i]=== str[i].toUpperCase()){
      newStr += alphabet[newIndex].toUpperCase();
    }
    else newStr += alphabet[newIndex];
  }
  return newStr;
}


}