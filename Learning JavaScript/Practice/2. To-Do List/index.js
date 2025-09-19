var strikeButton = document.getElementById("strikeButton");

strikeButton.addEventListener("click", () => {
    var highstrike = document.getElementById('highPriorityContainer');
    highstrike.style.textDecoration = "line-through";
    var lowstrike = document.getElementById('lowPriorityContainer');
    lowstrike.style.textDecoration = "line-through";
})

var delButton = document.getElementById("delButton");

delButton.addEventListener("click", () => {
    var highdel = document.getElementById('highPriorityContainer');
    highdel.innerHTML = '';
    var lowdel = document.getElementById('lowPriorityContainer');
    lowdel.innerHTML = '';
})

const textInput = document.getElementById("taskInput");
const submitButton = document.getElementById("addButton");
const dateInput = document.getElementById("deadlineInput");

submitButton.addEventListener("click", () => {
  const content1Description = textInput.value;
  const content1Date = dateInput.value;
  displayContents(content1Description, content1Date);
});

var currentDate = new Date();

function displayContents(contentDescription, contentDate) {
  if (new Date(contentDate) <= currentDate.getTime()) {
      var container1 = document.getElementById("highPriorityContainer");
      var contentItem1 = createContentElement(contentDescription, contentDate);      
      highPriorityContainer.appendChild(contentItem1);
  } else {
      var container2 = document.getElementById("lowPriorityContainer");
      var contentItem2 = createContentElement(contentDescription, contentDate);
      lowPriorityContainer.appendChild(contentItem2);
  }
}

function createContentElement(description, date) {
    var contentItem = document.createElement("div")
  
    var checkbox = document.createElement("input");
    checkbox.type = "checkbox";
  
    var label = document.createElement("label");
    label.innerHTML = description + " (Target date: " + date + ")";
  
    contentItem.appendChild(checkbox);
    contentItem.appendChild(label);

    return contentItem;
}