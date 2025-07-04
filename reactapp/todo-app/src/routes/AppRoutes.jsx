import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { TodoApp } from '../components/TodoContainer/TodoContainer';
import TodoDetails from '../components/TodoDetails/TodoDetails';

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<TodoApp></TodoApp>}></Route>
        <Route path='/todos/:id' element={<TodoDetails></TodoDetails>}></Route>
      </Routes>
    </Router>
  )
}

export default AppRoutes