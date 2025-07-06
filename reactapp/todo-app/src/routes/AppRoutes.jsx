import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import TodoPage from '../pages/TodoPage';
import TodoDetailsPage from '../pages/TodoDetailsPage';

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<TodoPage/>}></Route>
        <Route path='/todos/:id' element={<TodoDetailsPage/>}></Route>
      </Routes>
    </Router>
  )
}

export default AppRoutes