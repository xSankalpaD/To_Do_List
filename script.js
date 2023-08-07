const taskInput= document.getElementById("input-box");
const taskList= document.getElementById("list");
let deleteButton, editButton; // Declare these globally

function addTask(){
    const taskText= taskInput.value;
    if (taskInput.value== ''){
        alert("Please enter a Task!");
       
    }    
    else{
        const newTask = createTaskItem(taskText);
        taskList.appendChild(newTask);
        taskInput.value = "";       
       
    }
    
}
function createTaskItem(taskText) {

    const taskItem= document.createElement("li");
    taskItem.textContent = taskText;
  
    const deleteButton = createDeleteButton(); // Create delete button
    const editButton = createEditButton();     // Create edit button

    taskItem.appendChild(deleteButton);
    taskItem.appendChild(editButton);
    
    return taskItem;
}


taskList.addEventListener("click", function(e){

    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        
    }

});

// Function to create "Delete" button
function createDeleteButton() {
    const deleteButton = document.createElement("button");
    deleteButton.classList.add("delete-btn");

    const deleteImage = document.createElement("img");
    deleteImage.src = "images/delete.png";
    deleteButton.appendChild(deleteImage);

    deleteButton.addEventListener("click", function () {
        deleteButton.parentElement.remove();
    });

    return deleteButton;
}

// Function to create "Edit" button
function createEditButton() {
    const editButton = document.createElement("button");
    editButton.classList.add("edit-btn");
    editButton.textContent = "Edit";

    editButton.addEventListener("click", function () {
        const taskItem = editButton.parentElement;
        const updatedText = prompt("Edit the task:", taskItem.textContent);
        if (updatedText !== null && updatedText.trim() !== "") {
            taskItem.textContent = updatedText.trim();
            taskItem.appendChild(deleteButton); // Re-add delete button
            taskItem.appendChild(editButton);   // Re-add edit button
        }
    });

    return editButton;
}






