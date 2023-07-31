const taskInput= document.getElementById("input-box");
const taskList= document.getElementById("list");

function addTask(){
    const taskText= taskInput.value;
    
    if (taskText.value== ''){
        alert("Please enter a Task!");
    }
    else{
        const newTask = createTaskItem(taskText);
        taskList.appendChild(newTask);
        taskInput.value = "";       
       
    }

function createTaskItem(taskText) {

    const taskItem= document.createElement("li");
    taskItem.textContent = taskText;
        
    // Adding delete button
    const deleteButton = document.createElement("button");
    deleteButton.classList.add("delete-btn"); //Add the custom CSS class to the button to edit it
    
    // Create an image element and set the image source
    const deleteImage = document.createElement("img");
    deleteImage.src = "delete.png"; // path to image

    deleteButton.appendChild(deleteImage); // Append the image to the button
    deleteButton.addEventListener("click", function (){
        taskItem.remove();
    }); 

    taskItem.appendChild(deleteButton);

    return taskItem;
}

}