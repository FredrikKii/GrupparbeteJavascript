
document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("letter-input").focus();
  });

  
  var inputElement = document.getElementById('letter-input');

 
  inputElement.addEventListener('input', function() {
   
    var inputValue = inputElement.value.toUpperCase();
    

    inputElement.value = inputValue;
  });