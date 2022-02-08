import React from 'react';
import AddItem from './Todo';

const TodoUI = () =>{

    return (
        <>
        
        <div id="main">
        <h2 id="heading">Todo Application</h2>
        <div>
            <input type="text" id="item"></input>
            <button onClick ={AddItem} className='addBtn'><b>Add Task</b></button>
            <button  className='delAllBtn'><b>Delete All</b></button>
        </div>
        </div>

        <div id="content">
            <table id="ftab">
            </table>
        </div>
        
        </>

    );

}




export default TodoUI;