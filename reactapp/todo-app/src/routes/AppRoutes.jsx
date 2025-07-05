import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {TodoContainer } from '../components/TodoContainer/TodoContainer';
import TodoDetails from '../components/TodoDetails/TodoDetails';

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<TodoContainer></TodoContainer>}></Route>
        <Route path='/todos/:id' element={<TodoDetails></TodoDetails>}></Route>
      </Routes>
    </Router>
  )
}

export default AppRoutes