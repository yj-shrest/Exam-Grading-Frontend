import { useState } from 'react'
import Home from './Home'
import Enter from './Enter'
import Question from './Question';
import Quiz from './Quiz'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
function App() {
  return (
    <Router>
      <Routes>
        <Route path='/KBC' element={<Question/>} />
        <Route path='/KBC/home' element={<Quiz/>} />
      </Routes>
    </Router>
    
  )
}

export default App
