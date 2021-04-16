import React from 'react';

export function FormTodo({inputText, setInputText, setTodo, todo}){

    function HandleInputText(e){
        setInputText(e.target.value);
    }

    function HandleInputSubmit(e){
        e.preventDefault();
        setTodo([
            ...todo,
            {text: inputText, completed: false, id: Math.random()* 300}
        ])

        setInputText("");
    }

    return(
        <form>
            <input 
                type="text" 
                onChange={HandleInputText} 
                value={inputText}
                className="input-todo"
                placeholder="insira uma nova tarefa"
            />
            <button 
                type="submit" 
                onClick={HandleInputSubmit}
                className="add-todo"
            >
                <i class="fa fa-plus-circle" aria-hidden="true"></i>
            </button>
        </form>
    )
}