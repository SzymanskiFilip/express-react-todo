function Todo(props){

    function handleDelete(){
        props.deleteHandler(props.id);
    }

    return(
        <div className="todo">
            <h1>{props.text}</h1>
            <div className="todo-buttons">
                <button onClick={handleDelete}>Delete</button>
                <button>Edit</button>
            </div>
        </div>
    )
}

export default Todo;