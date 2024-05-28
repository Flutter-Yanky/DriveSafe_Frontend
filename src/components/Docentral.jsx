import { Link, useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import { useEffect, useState } from 'react';
import Spinner from "../Components/Spinner";
import toast, { Toaster } from 'react-hot-toast';

const Page = () => {


    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);
    const [dlStatus, setdlStatus] = useState();
    const [rcStatus, setrcStatus] = useState();
    const [pucStatus, setpucStatus] = useState();
    const [insurStatus, setinsurStatus] = useState();


    const id = localStorage.getItem('id');
    const API_URL = `https://drivesafe-backend.onrender.com/api/v1/userinfo/${id}`;

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

            let status3 = data.array[0].user_puc_status.status
            setpucStatus(status3)

            let status4 = data.array[0].user_insur_status.status
            setinsurStatus(status4)
        }
        catch (error) {
            console.log(error);
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
        <>
            <Navbar />
            <div className="flex justify-center mt-20">
                {
                      loading ? <Spinner />
                      :
                      <div className="w-full md:w-2/3 lg:w-1/2">
                      <table className="w-full h-auto md:h-96 border-4 border-black border-solid rounded-lg shadow-lg">
                          <tbody>
                              <tr className="bg-gray-100">
                                  <th className="p-3 md:p-4 text-center text-lg">#</th>
                                  <th className="p-3 md:p-4 text-lg">Document Type</th>
                                  <th className="p-3 md:p-4 text-center">Actions</th>
                              </tr>
                              <tr>
                                  <td className="p-3 md:p-4 text-center text-lg">1</td>
                                  <td className="p-3 md:p-4 text-lg">Upload Driving License</td>
                                  {
                                      dlStatus ?
                                          <td className="p-3 md:p-4 text-center">
                                              <button className="rounded-full px-4 md:px-6 py-1 md:py-2 bg-green-500 text-white text-sm md:text-lg hover:bg-green-600"><Link to='/Dlupload'>Document Uploaded</Link></button>
                                          </td>
                                          :
                                          <td className="p-3 md:p-4 text-center">
                                              <button className="rounded-full px-4 md:px-6 py-1 md:py-2 bg-green-500 text-white text-sm md:text-lg hover:bg-green-600"><Link to='/Dlupload'>Upload</Link></button>
                                          </td>
                                  }
  
                              </tr>
                              <tr>
                                  <td className="p-3 md:p-4 text-center text-lg">2</td>
                                  <td className="p-3 md:p-4 text-lg">Upload RC</td>
                                  {
                                    rcStatus ?
                                    <td className="p-3 md:p-4 text-center">
                                      <button className="rounded-full px-4 md:px-6 py-1 md:py-2 bg-green-500 text-white text-sm md:text-lg hover:bg-green-600"   disabled={!rcStatus}><Link to='/RcUpload'>Document Uploaded</Link></button>
                                  </td>
                                    :
                                    <td className="p-3 md:p-4 text-center">
                                      <button className="rounded-full px-4 md:px-6 py-1 md:py-2 bg-green-500 text-white text-sm md:text-lg hover:bg-green-600"><Link to='/RcUpload'>Upload</Link></button>
                                  </td>
                                  }
                            
                              </tr>
                              <tr>
                                  <td className="p-3 md:p-4 text-center text-lg">3</td>
                                  <td className="p-3 md:p-4 text-lg">Upload P.U.C</td>
                                  {
                                    pucStatus ?
                                    <td className="p-3 md:p-4 text-center">
                                      <button className="rounded-full px-4 md:px-6 py-1 md:py-2 bg-green-500 text-white text-sm md:text-lg hover:bg-green-600"   disabled={pucStatus}><Link to='/PucUpload'>Document Uploaded</Link></button>
                                  </td>
                                    :
                                    <td className="p-3 md:p-4 text-center">
                                      <button className="rounded-full px-4 md:px-6 py-1 md:py-2 bg-green-500 text-white text-sm md:text-lg hover:bg-green-600"><Link to='/PucUpload'>Upload</Link></button>
                                  </td>
                                  }
                                  
                              </tr>
                              <tr>
                                  <td className="p-3 md:p-4 text-center text-lg">4</td>
                                  <td className="p-3 md:p-4 text-lg">Upload Insurance</td>
                                  {
                                    insurStatus ?
                                    <td className="p-3 md:p-4 text-center">
                                      <button className="rounded-full px-4 md:px-6 py-1 md:py-2 bg-green-500 text-white text-sm md:text-lg hover:bg-green-600"><Link to='/InsurUpload' disabled={insurStatus}>Document Uploaded</Link></button>
                                  </td>
                                    :
                                    <td className="p-3 md:p-4 text-center">
                                      <button className="rounded-full px-4 md:px-6 py-1 md:py-2 bg-green-500 text-white text-sm md:text-lg hover:bg-green-600"><Link to='/InsurUpload'>Upload</Link></button>
                                  </td>
                                  }
                                 
                              </tr>
                          </tbody>
                      </table>
                  </div>

                }
              
                <Toaster />
            </div>
        </>
    );
}

export default Page;