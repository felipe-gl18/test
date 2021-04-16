import React from 'react';

import styles from '../styles/Todo.module.css';

import {Todo} from './Todo';

export function TodoList({todo, setTodo}){
    return(
            <div className={styles.todo_container}>
                <ul className={styles.todo_ul}>
                    {todo.map((todoM) => (
                        <Todo 
                            key={todoM.id}
                            text={todoM.text} 
                            todos={todo} 
                            todo={todoM} 
                            setTodo={setTodo}       
                        />
                    ))}
                </ul>
            </div>
    );
}