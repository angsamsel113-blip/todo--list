let tasks=JSON.parse(localStorage.getItem("tasks")) || [];
function showTask()

{
    
    let name=document.getElementById("userTask").value;
    if(name==""){
        document.getElementById("error").textContent="Please enter your task";

    }
    else{
        document.getElementById("error").textContent="";
        tasks.push(name);
        localStorage.setItem("tasks",JSON.stringify(tasks));
        
        document.getElementById("result").innerHTML+= "<li onclick='completeTask(this)'><span class='tick'>✅</span><span class='task-text'>" +  name+   "</span><div><button class='edit-button' onclick='editItem(event,this)'>Edit</button> <button class='delete-button' onclick='deleteItem(event,this)'>Delete</button></div></li>";
        
   
        document.getElementById("userTask").value= "";
    }
    
}
function editItem(event,button){
    event.stopPropagation();
    
    let newTask=prompt("Edit Task");
    if(newTask){
        let li=button.parentElement.parentElement;
        let taskSpan=li.querySelector(".task-text");
        let oldTask=taskSpan.textContent;
        let index=tasks.indexOf(oldTask);
        tasks[index]=newTask;
        localStorage.setItem("tasks",JSON.stringify(tasks));
        taskSpan.textContent=newTask;
        
    }

}
    

function deleteItem(event,button)
{
    event.stopPropagation();
    let li=button.parentElement.parentElement;
    let taskText=li.querySelector(".task-text").textContent;
    tasks=tasks.filter(function(task){
        return task!==taskText;
    });
    localStorage.setItem("tasks",JSON.stringify(tasks));
   
    li.remove();
}
function handleEnter(event)
{
    if(event.key=="Enter"){
        showTask();
    }
}
function completeTask(task){
    
    
    task.classList.toggle("completed");
}
window.onload=function()
{
    tasks.forEach(function(task)
    {
        document.getElementById("result").innerHTML+= "<li onclick='completeTask(this)'><span class='tick'>✅</span><span class='task-text'>" +  task+   "</span><div><button class='edit-button' onclick='editItem(event,this)'>Edit</button> <button class='delete-button' onclick='deleteItem(event,this)'>Delete</button></div></li>";
         
    });
}
        
    
