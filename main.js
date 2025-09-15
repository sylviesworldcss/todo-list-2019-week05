document.querySelector(".addTask").addEventListener("click", addTask)
// Objective is to see what's happening under the hood 

function addTask(){
    console.log("hello");
    // grabbing from html the user inputs and stored it in a variable called user
    let userInput = document.querySelector(".task").value
    // formatting line 7 into something we can use for this apprendChild
    let text = document.createTextNode(userInput)
    // Grabing ul and putting it in a variable called ul. Everytime we use queryslector we are "grabbing"
    let ul = document.querySelector(".allTasks")
    // creating html li in javascript
    let li = document.createElement("li")
    // This method grabs something and then throws it into what child to throw in the ul
    li.appendChild(text)
    ul.appendChild(li)
    // userInput = "" This is to clear the userInput
    console.log(userInput)
    console.log(li)
}
document.querySelector(".allTasks").addEventListener("click", done)
function done(eventObject){
    console.log(eventObject.target);
    if(eventObject.target.tagName === "LI");{
        eventObject.target.classList.toggle("done")
    }
}


// I need to build a simple to do list:
// space for four features
// Users adds Task 1 Homework: User can type in something and add that task
// Click on button and action happens


// Users can add and finish Tasks

// Users can clear the finish tasks
// Users can clear all tasks no matter what