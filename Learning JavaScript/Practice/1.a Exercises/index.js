const submitButton = document.getElementById("submitButton");

submitButton.addEventListener("click", () => {
  // Access the input field using getElementById
  const inputTextField = document.getElementById("inputText");
  // Access the data of the input field using .value method
  const inputData = inputTextField.value
  // alert the input data
  alert(inputData);
});

// Get a reference to the button element
//const button = document.getElementById("myButton");

// Define the event listener function
//function handleClick() {
//  button.textContent = "I got touched :p"
//}

// Add the event listener to the button
//button.addEventListener("click", handleClick);