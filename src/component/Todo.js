import React from 'react';

import styles from '../styles/Todo.module.css';

export function Todo({text, setTodo, todo, todos}){
    
    function deleteHandler(){
        setTodo(todos.filter((el) => el.id !== todo.id));
    }

    function completeHandler(){
        setTodo(todos.map((item) =>{
            if(item.id === todo.id){
                return {
                    ...item,
                    completed: !item.completed
                }
            }
            return item;
        }))
    }

    return(
        <div className={styles.todo}>
            <li className={`${todo.completed ? styles.completed_item : styles.todo_item}`}>{text}</li>
            <button
                onClick={completeHandler}
                className={styles.complete_btn}
            >
                <i class="fa fa-check-circle" aria-hidden="true"></i>
            </button>
            <button
                className={styles.trash_btn}
                onClick={deleteHandler}
            >
                <i class="fa fa-minus-square" aria-hidden="true"></i>
            </button>
        </div>
    );
}