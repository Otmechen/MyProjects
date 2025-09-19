content1Description = "This is Task 1";
content1Date = "2025-10-04"

content2Description = "This is Task 2";
content2Date = "2025-10-12"

content3Description = "This is Task 3";
content3Date = "2025-04-01"

var currentDate = new Date();

displayContents(content1Description, content1Date);
displayContents(content2Description, content2Date);
displayContents(content3Description, content3Date);

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