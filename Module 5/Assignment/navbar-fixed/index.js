async function find(){
  //first build the API call string by starting with the URL
  var apiString ="https://date.nager.at/api/v3/publicholidays/";
  //next add the parameters to the string using the drop down lists;
  var year = document.getElementById("year").value;
  var code = document.getElementById("code").value;
  apiString = apiString + year + "/" + code;
  alert(apiString); // show the API string

  //now make the API call to the web service using the string and store what is returned in response
  var response = await fetch(apiString);


  //finally, print the response in the various formats
  document.getElementById("newYear").innerHTML =""; //clear what previuosly shown
  document.getElementById("holiday").innerHTML =""; //clear what previuosly shown



  var jsonData = await response.json(); //read the response as JSON
  for (let i =0 ; i < jsonData.length ; i++){
    names = jsonData[i].name;
    date = jsonData[i].date;
    document.getElementById("newYear").innerHTML += "<p>" +names +" -> "+ date + "<p>";
    //document.getElementById("holiday").innerHTML += "<p>" +date + "<p>";
  }
    
  
  return true;
}

