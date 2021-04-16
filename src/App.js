import React, {useState, useEffect} from 'react'

import styles from './styles/Todo.module.css';
import './styles/responsive.css';

import { FormTodo } from './component/FormTodo';
import { TodoList } from './component/TodoList';

function App() {
  const [inputText, setInputText] = useState("");
  const [todo, setTodo] = useState([]);

  const saveLocalTodos = () => {
    localStorage.setItem('todo', JSON.stringify(todo));
  };
  const getLocalTodos = () => {
    if(localStorage.getItem('todo') === null){
      localStorage.setItem('todo', JSON.stringify(todo));
    } else {
      let todoLocal = JSON.parse(localStorage.getItem('todo'));
      setTodo(todoLocal);
    }
  };

  useEffect(()=> {
    getLocalTodos();
  }, [])

  useEffect(()=> {
    saveLocalTodos();
  },[todo]);

  return (
    <div className={styles.app}>
      <FormTodo 
        inputText={inputText}
        setInputText={setInputText}
        todo={todo}
        setTodo={setTodo}
      />
      <TodoList 
        todo={todo}
        setTodo={setTodo}
      />
    </div>
  );
}

export default App;
