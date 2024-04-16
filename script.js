const inputText = document.getElementById("inputText");
const inputButton = document.getElementById("inputButton");
const taskList = document.getElementById("taskList");
const pleaseEnter = document.getElementById("enterTask");
const blankField = document.getElementById("blankError");
var inputData = "";
var taskTotal = 0;
    inputButton.addEventListener('click', function(){
        inputData = inputText.value.trim();
        if (inputData != ""){
            taskTotal++;
            blankField.classList.add("hidden");
            pleaseEnter.classList.add("hidden");
            taskList.innerHTML = taskList.innerHTML + `<li class="task"><span class="taskText">${inputData}</span>
            <button type="button" class="deleteTask"><span class="material-icons">
            delete
            </span></button></li>`
            inputText.value = "";
        } else{
            blankField.classList.remove("hidden");
            inputText.value = "";
        }
    })
    taskList.addEventListener("click", (e) => {
    if (e.target.classList.contains("deleteTask")){
        taskTotal--;
        e.target.parentElement.remove();
        if (taskTotal < 1){
            pleaseEnter.classList.remove("hidden");
        }
    }
    });