function validateANDAdd(){
  var theword = document.forms["form"]["word"].value;
  var thenumber = document.forms["form"]["number"].value;
  if(theword == ""){
    alert("Please enter a word");
    return false;
  }
  else if((thenumber != 1)&&(thenumber!=2)){
    alert("Please enter a 1 or 2 for the list.");
    document.forms["form"]["number"].value="";
    return false;
  }
  else{
    if(thenumber==1){
      var tableRef = document.getElementById("myList1");
      (tableRef.insertRow(tableRef.rows.length)).innerHTML = theword;
    }
    else{
      var tableRef = document.getElementById("myList2");
      (tableRef.insertRow(tableRef.rows.length)).innerHTML = theword;
    }
    document.forms["form"]["word"].value="";
    document.forms["form"]["number"].value="";
    return true;
  }

}

function clearList1(){
  var tableRef= document.getElementById("myList1");
  tableRef.innerHTML = " ";
}

function clearList2(){
  var tableRef= document.getElementById("myList2");
  tableRef.innerHTML = " ";
}