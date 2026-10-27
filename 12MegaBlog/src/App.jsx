import React ,{ useState, useEffect } from 'react'
import {useDispatch} from 'react-redux'
import './App.css'
import authService from './appwrite/auth'
import {login, logOut} from './store/authSlice'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import { Outlet } from 'react-router'

function App() {
  const[loading, setLoading] = useState(true);
  const disptach = useDispatch();

  useEffect(() => {
    authService.getCurrentUser()
    .then((userData) => {
      if (userData) {
        disptach(login({userData}))
      }
      else{
        disptach(logOut())
      }
    })
    .finally(() => setLoading(false))
  }, [])

  return !loading ? (
    <div className='min-h-screen flex flex-wrap content-between bg-gray-500'>
      <Header/>
      <main>A Blog app with Appwrite 
        <Outlet/>
      </main>
      <Footer/>
    </div>
  ) : null
}


export default App
