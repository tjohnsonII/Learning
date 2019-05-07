function validateForm() {
  var x = document.forms["userInfo"]["fname"].value;
  var y = document.forms["userInfo"]["lname"].value;
  var z = document.forms["userInfo"]["numb"].value;

  if (x == "") {
    alert("Name must be filled out");
    return false;
  }
  else{
    alert("Submitted successfully")
  }
  if(y == ""){
    alert("Name must be filled out");
    return false;
  }
  else{
    alert("Submitted successfully")
  }
  if(isNaN(z) || z < 1 || z > 120){
    alert("Age is not valid");
  }
  else{
    alert("Valid Age");
  }
}
