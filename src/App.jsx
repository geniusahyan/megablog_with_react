import { useDispatch } from 'react-redux';
import authService from './appwrite/auth';
import { useEffect, useState } from 'react';
import {login, logout} from './store/authSlice'
import Header from './components/Header/Header.jsx'
import Footer from './components/Footer/Footer.jsx'
import { Outlet } from 'react-router-dom';

function App() {

  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    authService.getCurrectUser()
    .then((userData)=>{
      if (userData) {
        dispatch(login({userData}))
      }else{
        dispatch(logout())
      }
    })
    .finally(()=> setLoading(false))

  }, [])
  
  return !loading ? (
    <div className="min-h-screen text-white flex flex-wrap text-center bg-[#0c1d30] ">
      <div className="w-full block">
        <Header />
        <main>
          LIST: {/* <Outlet /> */}
        </main>
        <Footer />
      </div>
    </div>
  ) : null
}

export default App
