import {useState} from "react";

function Todo(props){
    const [editable, setEditable] = useState(false);
    const [buttonText, setButtonText] = useState("Edit");
    const [todoText, setTodoText] = useState(props.text);


    function handleDelete(){
        props.deleteHandler(props.id);
    }

    function handleEditable(){
        if(editable == true){
            updateTodo();
            setEditable(false);
            setButtonText("Edit");
        }
        if(editable == false){
            setEditable(true);
            setButtonText("Save");
        }

        console.log(props.id);
    }

    function textChange(e){
        setTodoText(e.target.value);
    }

    async function updateTodo(){
        const data = {
            "id": props.id,
            "text": todoText
        };
        const requestOptions = {
            method: "PUT",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(data)
        };

        fetch("http://localhost:3000/todo", requestOptions)
            .then(() => console.log("updated"));
    }


    return(
        <div className="todo">
            {
                editable ?
                    <input type="text" value={todoText}
                           className="todo-text"
                           onChange={textChange}/>
                    : <h1 className="todo-text">{todoText}</h1>
            }
            <div className="todo-buttons">
                <button onClick={handleDelete}>Delete</button>
                <button onClick={handleEditable}>{buttonText}</button>
            </div>
        </div>
    )
}

export default Todo;