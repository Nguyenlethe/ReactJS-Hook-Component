
import Nav from './views/Nav';
import './App.scss';
import { toast } from 'react-toastify';
import { useState, useRef, useEffect } from 'react';
import Todo from './views/Todo';
import Covit from './views/Covit';


function App() {

  let inputFocus = useRef()

  let ListTodo = [
    {id: 1, title: 'Yêu Nhung'},
    {id: 2, title: 'Yêu Lan'},
    {id: 3, title: 'Yêu Liên'},
    {id: 4, title: 'Yêu Dương'},
    {id: 5, title: 'Yêu Hương'},
  ]

  const [name, setName] = useState('')
  const [todo, setTodo] = useState(ListTodo)


  useEffect(() => {
    document.title = name
  },[name])

  
  // Click tạo todo
  const handleEventClick = (e,name) => {
    if(name.trim() !== ''){
      const NewTodo = {id: Math.floor(Math.random() * 100), title: name}
      setTodo([...todo,NewTodo])
      setName('')
      inputFocus.current.focus()
      toast.success(`Thêm thành công !!!`); 
    }else{
      toast.error(`Vui lòng nhập dữ liệu !!!`);
    }
  } 
    
  // Onchange input set lại dl cho name
  const handleEventOnchange = (e) => {
    setName(e.target.value)
  }

  // Xl xóa todo
  const deleteTodo = (id) => {
    let newTodo = todo.filter(item => item.id !== id)
    setTodo(newTodo)
  }

  return (
      <>
        <Nav/>
        <div className='from-nav'>
          <input ref={inputFocus} type="text" value={name} onChange={handleEventOnchange} />
          <button onClick={(e) => handleEventClick(e,name)}>Click Me!!!</button>

          <Todo 
            todos={todo}
            deleteTodo={deleteTodo}
          />
        </div>

        <Covit/>
      </>
  );
}

export default App;
