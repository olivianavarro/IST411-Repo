function validateANDAdd(){
  var theword = document.forms["form"]["word"].value;
  var thenumber = document.forms["form"]["number"].value;
  if(theword == ""){
    alert("Please enter a word");
    return false;
  }
  else if((thenumber != 1)&&(thenumber!=2)&&(thenumber!=3)){
    alert("Please enter a 1, 2 or 3 for the algorithm.");
    document.forms["form"]["number"].value="";
    return false;
  }
  else{
    if(thenumber==1){
      var tableRef = document.getElementById("algorithm1");
      var result = Alg1(theword);
      (tableRef.insertRow(tableRef.rows.length)).innerHTML = result;
      

    }
    else if(thenumber ==2){
      var tableRef = document.getElementById("algorithm2");
      var result = Alg2(theword);
      (tableRef.insertRow(tableRef.rows.length)).innerHTML = result;
    }

    else{
      var tableRef = document.getElementById("algorithm3");
      var result = Alg3(theword);
      (tableRef.insertRow(tableRef.rows.length)).innerHTML = result;
    }
    document.forms["form"]["word"].value="";
    document.forms["form"]["number"].value="";
    return true;
  }

}

function Alg1(theword){
  theword = theword.toLowerCase();
  j = theword.length-1;
  i = 0;
  while(i < j){
    if(theword[i]!=theword[j]){
      return theword + ": False"
      
      
      
    }
    else{
      i++;
      j--;
    }
    
    }
    
    return theword+": True";

}


function Alg2(theword){
  theword = theword.toLowerCase();
  str ="";
  for (let i = theword.length-1; i>=0; i--){
    str+= theword[i];
  }
  if (str==theword){
    return theword + ": True";
  }
  return theword + ": False";

}

function Alg3(theword){
  theword = theword.toLowerCase();
  newWord = theword.split("").reverse();
  const newWord2 = newWord.join("");
  
  if (newWord2 == theword){
    return theword + ": True";
  }
  return theword + ": False";

}

function clearList1(){
  var tableRef= document.getElementById("algorithm1");
  tableRef.innerHTML = " ";
}

function clearList2(){
  var tableRef= document.getElementById("algorithm2");
  tableRef.innerHTML = " ";
}

function clearList3(){
  var tableRef= document.getElementById("algorithm3");
  tableRef.innerHTML = " ";
}