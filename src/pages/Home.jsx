
import Navbar from '../components/Navbar'
import { LayoutGrid } from 'lucide-react'
import img from '../assets/driver-mobile.png'
import { Link, useNavigate } from 'react-router-dom'
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
  },[navigate]);

  
  return (
    <div>
      <Navbar />

      <div className='flex justify-center mt-24'>
          <div className="img1">
              <div>
                <button className='bg-[#1aff19] p-3 w-18 rounded-2xl' disabled="disabled"><LayoutGrid size={18} /></button>
                <span className='mx-8 text-2xl font-mono font-semibold '>DriveSafe</span>
              </div>
              <div>
                <h2 className='font-serif text-3xl mt-10'>Onboarding</h2>
              </div>
              <div>
              <p className='flex flex-col text-xl mt-7 font-display'>Get started quickely and securely by storing 
              <span className='text-xl mt-2 font-display'>
                your driveing license and vehicle realated 
              </span>
              <span className='text-xl mt-2 font-display'>
                documents digitally. Say goodbye to 
              </span>
              </p>
                <div>
                  {
                    loggedIn ?
                    <button className="bg-[#1aff19] font-display rounded-3xl w-48 h-12 mt-6"><Link to="/docentral">Start Now</Link></button>
                    :
                    <button className="bg-[#1aff19] font-display rounded-3xl w-48 h-12 mt-6"><Link to="/signin">Start Now</Link></button>
                  }
                </div>
              </div>
          </div>
          <div className="img2">
              <img className="aspect-[4/3]" src={img} alt="imgtag" />
          </div>
      </div>
     
      
    </div>
  )
}

export default Home