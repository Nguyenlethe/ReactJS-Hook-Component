
import { toast } from 'react-toastify';


function Todo({todos, deleteTodo}) {

    const handleDeleteTodo = (id) => {
        deleteTodo(id)
        toast.success('Xóa thành công !!!')
    }

    return ( 
        <>       
            {todos.map((todo, index) => {
                return ( 
                    <ul key={todo.id} className="list-todo">
                        <li className="todo"> 
                            <h4>{todo.title}</h4>
                            <button onClick={() => handleDeleteTodo(todo.id)}>Xóa</button>
                        </li>
                    </ul> 
                )
            })}
        </>
   );
}

export default Todo;