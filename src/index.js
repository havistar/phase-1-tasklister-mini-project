document.addEventListener("DOMContentLoaded", () => {
  // your code here
  let form = document.querySelector('form')
  form.addEventListener('submit', event =>{
      
      event.preventDefault()
      let taskDescription = document.querySelector('#new-task-description').value
      // create <li> elements
      let taskList = document.createElement('li')
     
      //create delete button 
      let deleteTask = document.createElement('button')
      deleteTask.addEventListener('click', () => taskList.remove())
      deleteTask.textContent = "Delete"
      // get input value
      taskList.textContent = `${taskDescription} `
      // create child in parents 
      taskList.appendChild(deleteTask)
      
      // create drop down color
     
      let choice = document.createElement('select') 
      colorArr =["Red", "Yellow","Green"]
      let setColor = () =>{
        
        for(const colors of colorArr){
        
          option = document.createElement('option')
          option.textContent = colors
          option.setAttribute('id', colors)
          let value = option.setAttribute('value',colors)
          option.style.color = colors
          choice.appendChild(option)


        } 
        
      
    }
taskList.appendChild(choice, setColor())
document.querySelector("#tasks").appendChild(taskList)
      //reset form
      form.reset()