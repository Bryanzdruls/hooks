import { TodoItem } from "./TodoItem"


export const TodoList = ({ todos =[], onRemoveTodo, onToggleTodo }) => {


  return (

    <ul className="list-group">
    {
        //TodoItem ... se muestre le informacion correcta en el span   
        todos.map( todo => (
            <TodoItem 
              key={todo.id} 
              todo={ todo }  
              onRemoveTodo={ onRemoveTodo }
              onToggleTodo={ onToggleTodo }
            />
        ))
    }   
    </ul>   
  )
}
