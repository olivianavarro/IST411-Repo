async function getQuote(){
  //first build the API call string by starting with the URL
  var apiString ="https://api.quotable.io";
  //next add the parameters to the string using the drop down lists;
  var theQuoteSize = document.getElementById("quoteSize").value;
  var variableMax = parseInt(theQuoteSize)+20;
  apiString = apiString + "/quotes/random?minLength="+ theQuoteSize+"&maxLength="+variableMax ;
  alert(apiString); // show the API string

  //now make the API call to the web service using the string and store what is returned in response
  var response = await fetch(apiString);


  //finally, print the response in the various formats
  document.getElementById("quote").innerHTML =""; //clear what previuosly shown
  document.getElementById("author").innerHTML =""; //clear what previuosly shown



  var jsonData = await response.json(); //read the response as JSON
  quote2 = jsonData[0].content;
  author2 = jsonData[0].author;
console.log(quote2);
console.log(author2);
  //loop through the JSON object one paragraph at a time and print each in the FormattedData section
  
    document.getElementById("quote").innerHTML += "<p>" +quote2 + "<p>";
    document.getElementById("author").innerHTML += "<p>" +author2 + "<p>";
  
  return true;
}

