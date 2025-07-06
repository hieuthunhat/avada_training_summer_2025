import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import TodoDetails from '../components/TodoDetails/TodoDetails';
import TodoPage from '../pages/TodoPage';

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<TodoPage/>}></Route>
        <Route path='/todos/:id' element={<TodoDetails/>}></Route>
      </Routes>
    </Router>
  )
}

export default AppRoutes