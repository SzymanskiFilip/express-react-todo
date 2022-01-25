function Todo(props){
    return(
        <div className="todo">
            <h1>{props.text}</h1>
            <div className="todo-buttons">
                <button>Delete</button>
                <button>Edit</button>
            </div>
        </div>
    )
}

export default Todo;