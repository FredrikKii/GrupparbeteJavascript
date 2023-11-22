// Set focus on the input field when the page loads
document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("letter-input").focus();
  });

  // Get the input element using the correct ID
  var inputElement = document.getElementById('letter-input');

  // Add an event listener to the input field
  inputElement.addEventListener('input', function() {
    // Convert the input value to uppercase
    var inputValue = inputElement.value.toUpperCase();
    
    // Update the input field with the uppercase value
    inputElement.value = inputValue;
  });