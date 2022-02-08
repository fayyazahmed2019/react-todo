import React from 'react';
import TodoUI from './TodoUI';

let table = document.getElementById("ftab");

const AddItem = () =>{

    let todo_item = document.getElementById("item");
    console.log(todo_item)
    if(todo_item.value.replace(/\s/g,"") == ""){
        alert("Please enter your task to Add")
    }
    
    else{
        
        let tasktd = document.createElement("td")
        let edittd = document.createElement("td")
        let deltd = document.createElement("td")
        let editBtn = document.createElement("button")
        let delBtn = document.createElement("button")
    
        tasktd.setAttribute("className","firstTd")
        edittd.setAttribute("className","secondTd")
        deltd.setAttribute("className","thirdTd")
    
        let taskText = document.createTextNode(todo_item.value)
        let editText = document.createTextNode("Edit")
        let delText = document.createTextNode("Delete")
    
        editBtn.appendChild(editText)
        delBtn.appendChild(delText)
    
        editBtn.setAttribute("className","editBtn")
        editBtn.setAttribute("onClick","editItem(this)")
        delBtn.setAttribute("className","delBtn")
        delBtn.setAttribute("onClick","delItem(this)")
    
        tasktd.appendChild(taskText)
        edittd.appendChild(editBtn)
        deltd.appendChild(delBtn)
    
        let row = document.createElement("tr")
        row.appendChild(tasktd)
        row.appendChild(edittd)
        row.appendChild(deltd)
    
        table.appendChild(row)
    
        todo_item.value = ""
        console.log(AddItem)
    

}


return (

<>

<AddItem />


</>


);

}

export default AddItem;