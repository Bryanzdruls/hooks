import { TodoList,TodoAdd } from "./"
import { useTodos } from "../hooks/useTodos";

export const TodoApp = () => {

    const {todos, todosCounter ,pendingTodos ,  handleNewTodo,handleRemoveTodo,handleToggleTodo} = useTodos();


    return (
    <>
        <h1>TodoApp {todosCounter} <small>pendientes: {pendingTodos}</small></h1>
        
        <hr />
        
        <div className="row">
            <div className="col-7">
                <TodoList 
                    todos={todos} 
                    onRemoveTodo={ handleRemoveTodo }
                    onToggleTodo={ handleToggleTodo }
                />
            </div>
            
            <div className="col-5">
                <h4>Agregar TODO</h4>
        
                <hr />
        
                <TodoAdd onNewTodo={ handleNewTodo }/>
        
            </div>
        </div>
    </>
  )
}
