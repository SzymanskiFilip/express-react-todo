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

    async function deleteTodo(id){
        const data = {
            "id": id
        };
        const requestOptions = {
            method: "DELETE",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(data)
        };

        fetch("http://localhost:3000/todo", requestOptions)
            .then(() => getTodos());
    }


    return(
        <div className="todo-list">
            {
                todos.map(todo => <Todo
                    text={todo.text}
                    key={todo.id}
                    id={todo.id}
                    deleteHandler={deleteTodo}
                />)
            }
        </div>
    )
}

export default TodoList;