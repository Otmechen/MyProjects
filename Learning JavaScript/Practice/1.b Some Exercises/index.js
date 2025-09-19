// select the input text field using getElementById
const textInput = document.getElementById("textInput");

// select the submit button using getElementById    
const submitButton = document.getElementById("submitButton");

// select the output div using getElementById
const outputDiv = document.getElementById("outputDiv");

// Add the event handler to the submitButton to get the data from the input field and add it to a textDiv which in turn is added to the output div. 
// This allows you to add multiple data as we did in the last section.
submitButton.addEventListener("click", () => {
    const inputText = textInput.value;
    outputDiv.textContent = inputText;
});

/*
const dateInput = document.getElementById("dateInput");
const submitButton = document.getElementById("submitButton");
const outputDiv = document.getElementById("outputDiv");

submitButton.addEventListener("click", () => {
  const selectedDate = dateInput.value; // Select the date value
  const formattedDate = new Date(selectedDate).toLocaleDateString();// Format the date using the toLocaleDateString function

  outputDiv.textContent = "Date: " + formattedDate;// Change the text content of the outputDiv to the date 
});
*/