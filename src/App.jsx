
import { Routes, Route } from 'react-router-dom'
import './App.css'
import IndexPage from './pages/IndexPage'
import LoginPage from './pages/LoginPage'
import RegisterPage from './pages/RegisterPage'
import Layout from './Layout'
import { useState, useEffect } from 'react'
import axios from 'axios'

axios.defaults.withCredentials = true; 
function App() {
  const [message, setMessage] = useState('');

  useEffect(() => {
    axios.get('http://localhost:5000')
      .then(response => setMessage(response.data.message))
      .catch(error => console.error(error));
  }, []);

  return (
    <Routes>
      <Route path='/' element={<Layout />}>
       <Route index element={<IndexPage/>} />
       <Route path='/login' element={<LoginPage/>} />
       <Route path='/register' element={<RegisterPage/>}/>
      </Route>
    </Routes>
   
  )
}

export default App
