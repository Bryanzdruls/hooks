import { useEffect, useReducer } from "react"
import { todoReducer,TodoList,TodoAdd } from "./"


const initialState =[
/*     {
        id: new Date().getTime(),
        description:  'Recolectar la piedra del alma',
        done:false,
    },
    {
        id: new Date().getTime()*3,
        description:  'Recolectar la piedra del tiempo',
        done:false,
    }, */
]

const init =  () => {
    return JSON.parse( localStorage.getItem('todos') )|| [];
}

export const TodoApp = () => {
    
     
    const [todos, dispatch] = useReducer( todoReducer, initialState, init );


    useEffect(() => {
        localStorage.setItem( 'todos', JSON.stringify( todos ) );
    }, [todos])

    const handleNewTodo = (todo)=>{
        const action = {
            type: '[TODO] Add Todo',
            payload: todo,
        }
        dispatch( action );
    };

    const handleRemoveTodo =( id ) => {
        dispatch({
            type: '[TODO] Remove Todo',
            payload: id,
        });
    };
    const handleToggleTodo =( id ) => {        
        dispatch({
            type: '[TODO] Toggle Todo',
            payload: id,
        });
    };
    return (
    <>
        <h1>TodoApp (10) <small>pendientes: 2</small></h1>
        
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
