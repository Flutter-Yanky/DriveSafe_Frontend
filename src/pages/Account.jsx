import Navbar from '../components/Navbar'
import { useEffect, useState } from 'react'
import Spinner from "../Components/Spinner";
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import linkimg from '../assets/link.png'
import toast, { Toaster } from 'react-hot-toast';
import QRCode from "react-qr-code";
import copy from "copy-to-clipboard";

const Account = () => {

  const navigate = useNavigate();
  const [data, setdata] = useState([]);
  const [loading, setLoading] = useState(false);
  const [dlStatus, setdlStatus] = useState();
  const [rcStatus, setrcStatus] = useState();
  const [toggle, settoggle] = useState(false);
  const [url, setUrl] = useState()
  const [role,setRole] = useState('user');

  const val = `http://localhost:5173/fine/${localStorage.getItem('id')}`;
  const checkQr = () => {
    settoggle(!toggle)
    setUrl(val)
  }

  const scanCode = () => {
    navigate(`/scanqrcode`)
  }


  const copyCode = () => {
    copy(val);
    toast.success(`You have copied url`);
  }


  const logout = () => {
    localStorage.clear();
    window.location.href = "/";
  }



  const id = localStorage.getItem('id');

  const API_URL = `http://localhost:8000/api/v1/userinfo/${id}`;

  function fine_history() {
    navigate("/fine_history");
  }

  async function fetchData() {
    setLoading(true);

    try {
      const res = await fetch(API_URL, {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('token')}`
        },
      });

      const data = await res.json();

      console.log(data.array[0]);
      console.log(data.array[0].fine_today);

      let { status } = data.array[0].user_dl_status

      setdlStatus(status);

      let status2 = data.array[0].user_rc_status.status
      setrcStatus(status2)

      setdata(data.array[0]);
      setRole(data.array[0].role)
    }
    catch (error) {
      console.log(error);
      console.log("Error aagya ji");
      setdata([]);
    }
    setLoading(false);
  }

  useEffect(() => {
    if (localStorage.getItem('token') == null) {
      toast.error("Please Sign In First...");
      navigate('/signin');
    } else {
      fetchData()
    }
  }, [navigate])


  return (
    <div>
      <Navbar />

      <div className='flex justify-center my-8'>
        {

          loading ? <Spinner />
            :
            <div className="bg-white max-w-2xl shadow overflow-hidden sm:rounded-lg">
              <div className="px-4 py-5 sm:px-6">
                <h3 className="text-lg leading-6 font-medium text-gray-900">
                  User details
                </h3>
                <p className="mt-1 max-w-2xl text-sm text-gray-500">
                  Details and informations about user.
                </p>
              </div>

              <div className="border-t border-gray-200">
                <dl>
                  {/* 0 */}
                  <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                    <dt className="text-sm font-medium text-gray-500">
                      User Id
                    </dt>
                    <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                      {data._id}
                    </dd>
                  </div>

                  {/* 1 */}
                  <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                    <dt className="text-sm font-medium text-gray-500">
                      Full name
                    </dt>
                    <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                      {data.user_name}
                    </dd>
                  </div>

                  {/* 2 */}
                  <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                    <dt className="text-sm font-medium text-gray-500">
                      Email address
                    </dt>
                    <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                      {data.user_email}
                    </dd>
                  </div>

                  {/* 3 */}
                  <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                    <dt className="text-sm font-medium text-gray-500">
                      Mobile No
                    </dt>
                    <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                      {data.user_mobileNo}
                    </dd>
                  </div>

                  {/* 4 */}

                  {
                    role == "officer" ?
                    <div> </div> 
                    :
                    <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                    <dt className="text-sm font-medium text-gray-500">
                      Driving license
                    </dt>
                    <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">

                      <div className='flex justify-start'>

                        {
                          dlStatus ? <div>True</div>
                            :
                            <div className='flex justify-start'>
                              <div>false</div>
                              <Link to="/dlupload" className='mx-5'>
                                <img src={linkimg} alt="" width={12} height={12} />
                              </Link>
                            </div>

                        }
                      </div>
                    </dd>
                  </div>

                      }

                  {/* 5 */}

                  {
                    role == "officer" ? <div></div>
                    :
                    <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                    <dt className="text-sm font-medium text-gray-500">
                      Rc Book
                    </dt>
                    <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">

                      <div className='flex justify-start'>
                        <div>

                          {
                            rcStatus ? <div>True</div>
                              :
                              <div className='flex justify-start'>
                                <div>false</div>
                                <Link to="/rcupload" className='mx-5'>
                                  <img src={linkimg} alt="" width={12} height={12} />
                                </Link>
                              </div>

                          }
                        </div>

                      </div>

                    </dd>
                  </div>
                  }

                  
                  
                  

                  {/* 6 */}
                  <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                    <dt className="text-sm font-medium text-gray-500">
                      About
                    </dt>
                    <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                      {data.user_about}
                    </dd>
                  </div>

                 
                  {/* 8 */}

                  {
                    role == "officer" ?
                    <div></div>
                    :
                    <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                    <dt className="text-sm font-medium text-gray-500">
                      Generate Qr code
                    </dt>
                    <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded" onClick={checkQr}>QR code</button>

                      {
                        toggle ?
                          <div>
                            <QRCode className="my-3" value={url}>  </QRCode>
                            <div className='flex text-sm text-teal-70 '>
                              <p className=''></p>
                            </div>
                            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded" onClick={copyCode}>Copy URL</button>
                          </div>
                          : null

                      }

                    </dd>
                  </div>

                  }

                



                  <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">

                    {
                      role == "officer" ?
                      <div>
                        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border  border-blue-700 rounded" onClick={scanCode}>Scan QR Code</button>
                        
                      </div> : <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded"
                      onClick={fine_history}>Fine History</button>

                    }
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded"
                      onClick={logout}>
                      Logout
                    </button>
                    
                    
                  </div>
                </dl>
              </div>
            </div>
        }

      </div>
      <Toaster />
    </div>
  )
}

export default Account