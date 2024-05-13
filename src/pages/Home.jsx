

import Navbar from '../components/Navbar';
import { LayoutGrid } from 'lucide-react';
import img from '../assets/driver-mobile.png';
import { Link, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react'

const Home = () => {


  const navigate = useNavigate()

  const [loggedIn, setloggedIn] = useState(false);
  
  const checkuserLogin = () => {
    if (localStorage.getItem("name")) {
      setloggedIn(true);
    }
    else {
      setloggedIn(false);
    }
  }


 

  
  useEffect(() => {
    checkuserLogin();
    
  }, [navigate]);


  return (
    <div>
      <Navbar />

      <div className='container mx-auto px-4 py-12'>
        <div className="flex flex-col lg:flex-row items-center justify-center">
          {/* Image on top for mobile devices */}


          <div className="lg:w-1/3 lg:pr-8 ">
            <div className="flex items-center">
              <button className='bg-[#1aff19] p-3 w-12 rounded-2xl' disabled="disabled">
                <LayoutGrid size={18} /></button>
              <span className='ml-4 text-2xl font-mono font-semibold'>DriveSafe</span>
            </div>
            <h2 className='mt-10 text-3xl font-serif'>Onboarding</h2>
            <p className='mt-7 text-xl font-display'>Get started quickly and securely by storing
              <span className='block mt-2'>your driving license and vehicle related</span>
              <span className='block mt-2'>documents digitally. Say goodbye to</span>
            </p>
            
            {
              loggedIn ?
              <button className="bg-[#1aff19] font-display rounded-3xl w-full lg:w-48 h-12 mt-6"><Link to="/docentral">Start Now</Link></button>
              :
              <button className="bg-[#1aff19] font-display rounded-3xl w-full lg:w-48 h-12 mt-6"><Link to="/signin">Start Now</Link></button>

            }
          </div>

          {/* Image on the side for larger screens */}
          <div className="hidden lg:block lg:w-1/3 lg:pl-8">
            <img src={img} alt="imgtag" className="w-full" />
          </div>

          <div className="lg:hidden mb-8">
            <img src={img} alt="imgtag" className="w-full" />
          </div>

        </div>
      </div>
    </div>
  )
}

export default Home;

