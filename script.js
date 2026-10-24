document.addEventListener("DOMContentLoaded", () => {
    const ToDoInput = document.getElementById("to-doInput")
const btn = document.getElementById("addTaskBtn")
const ToDoList = document.getElementById("To-doList")
const dark = document.getElementById("themeToggle")
tasks = JSON.parse(localStorage.getItem("newTask")) || []

dark.addEventListener("change",()=>{
    document.body.classList.toggle("dark",dark.checked)
})
function renderTask(task){
    // console.log(task);
    const li = document.createElement('li')
    li.setAttribute("data-id",task.id)
    li.innerHTML = `<span>${task.text}</span><button>Delete</button>`

    li.addEventListener("click",(e)=>{
        if(e.target.tagName === "BUTTON"){
            return
            // tasks = tasks.filter((t)=>t.id !== task.id)
            // li.remove()
            // saveTask()
        }
        // else {
            task.status = !task.status
        li.classList.toggle("completed")
        saveTask()
    // }
    })
    li.querySelector("button").addEventListener("click",(e)=>{
        e.stopPropagation() //prevent toggle from firing
        tasks = tasks.filter((t)=> t.id !== task.id)
        li.remove()
        saveTask()
    })

    ToDoList.appendChild(li)
}
tasks.forEach(element => renderTask(element));

function saveTask(){
    localStorage.setItem("newTask",JSON.stringify(tasks))
}

btn.addEventListener("click",function(){
    let input = ToDoInput.value.trim()
    if(input === "") return;
    const obj = {
        id : Date.now(),
        text : input,
        status : false
    }
    tasks.push(obj)
    saveTask()
    renderTask(obj)
    ToDoInput.value  = "" //Clear the input
    console.log(tasks);
})
})
//DOUBTS
//Why did we not use if and else conditions for the delete one
//Why everything is in render , how it works , for each....

//STEPS FOR TO-DO LIST
//Made an array of tasks - which contains objects holding details of the task
//Pushed the array to local storage using setItem(Key:value[stringify(array)])
//Revise the task array everytime from local storage by JSON.parse(__) so that no issue is faced when site is reloaded
//Render task 
//Run the render task function on each element of array using forEach() loop