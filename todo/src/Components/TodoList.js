import {useState, useEffect} from "react";
import Todo from "./Todo";

function TodoList(){

    const [todos, setTodos] = useState([]);

    useEffect(() => {
        getTodos();
    }, []);

    async function getTodos(){
        const res = await fetch("http://localhost:3000/todos");
        const json = await res.json();
        console.log(json);
        setTodos(json);
    }

    async function deleteTodo(){
        console.log("DELETED");
    }

    async function markAsDone(){
        console.log("DONE");
    }

    return(
        <div className="todo-list">
            {
                todos.map(todo => <Todo text={todo.text} key={todo.id}/>)
            }
        </div>
    )
}

export default TodoList;