import { useEffect, useState } from 'react'
import Navbar from '../components/Navbar';
import { useNavigate, useParams } from 'react-router-dom';
import Spinner from '../Components/Spinner';
import toast from 'react-hot-toast';

const Fine = () => {

    const navigate = useNavigate();
    const { userId } = useParams();
    const [Loading, setLoading] = useState(true)
    const [Access, setAccess] = useState(false);
    const [dl, setDl] = useState();
    const [rc, setRc] = useState();
    const [puc, setPuc] = useState(0);
    const [totalFine, setTotalFine] = useState(0);
    const [fine_today, setFine_today] = useState(false);



    async function checkOneTimeFine() {
        try {
            const res = await fetch(`http://localhost:8000/api/v1/userinfo/${userId}`, {
                method: 'GET',
                headers: {
                    'Authorization': `Bearer ${localStorage.getItem('token')}`
                },
            });

            const data = await res.json();

            setFine_today(data.array[0].fine_today);

            console.log(fine_today);

            console.log(data);

        } catch (err) {
            console.log(err);
            console.log("Error aagya ji");

        }
    }




    async function applyFine() {

        checkOneTimeFine(); 

        if (fine_today == false) {

            const obj = {
                fine_dl: dl,
                fine_rc: rc,
                fine_puc: 0,
                fine_insurance: 0,
                fine_total: totalFine,
                fine_status: false,
                fined_user: userId,
            }

            try {
                await fetch(`http://localhost:8000/api/v1/fineuser/${userId}`, {
                    method: 'POST',
                    body: JSON.stringify(obj),
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${localStorage.getItem('token')}`
                    },

                });

                navigate('/')
            }
            catch (err) {
                console.log(err);
                console.log("Error aagya ji");
            }
        }


    }

    const API_URL = `http://localhost:8000/api/v1/fine/${userId}`;
    async function fetchData() {
        setLoading(false);
        try {
            const res = await fetch(API_URL, {
                method: 'GET',
                headers: {
                    'Authorization': `Bearer ${localStorage.getItem('token')}`
                },
            });

            const data = await res.json();


            if (data.data.success == true) {
                setAccess(true);
                setDl(data.data.fine_dl);
                setRc(data.data.fine_rc);
                setPuc(0);
                setTotalFine(data.data.totalFine);
            }
            else {
                setAccess(false);
            }
        }
        catch (error) {
            console.log(error);
            console.log("Error aagya ji");
        }
        setLoading(true);
    }


    useEffect(() => {
        if (localStorage.getItem('token') == null) {
            toast.error("Please Sign In First...");
        } else {
            checkOneTimeFine();
            fetchData()
        }
    }, [])

    return (
        <div>
            <Navbar />
            {
                Loading ?

                    Access ?
                        <div>
                            <h1 className='text-center font-bold text-2xl '>Fine Generation</h1>
                            <div className='flex justify-center mt-4'>
                                <div className="relative overflow-x-auto mx-2">
                                    <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                                        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                                            <tr>
                                                <th scope="col" className="px-6 py-3">
                                                    Sr No.
                                                </th>
                                                <th scope="col" className="px-6 py-3">
                                                    Document Name
                                                </th>
                                                <th scope="col" className="px-6 py-3">
                                                    Fine
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody>


                                            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                                <td className="px-6 py-4">
                                                    1
                                                </td>
                                                <td className="px-6 py-4">
                                                    Driving License
                                                </td>
                                                <td className="px-6 py-4">
                                                    {dl}
                                                </td>
                                            </tr>

                                            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                                <td className="px-6 py-4">
                                                    2
                                                </td>
                                                <td className="px-6 py-4">
                                                    RC Book
                                                </td>
                                                <td className="px-6 py-4">
                                                    {rc}
                                                </td>
                                            </tr>

                                            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                                <td className="px-6 py-4">
                                                    3
                                                </td>
                                                <td className="px-6 py-4">
                                                    P.U.C.
                                                </td>
                                                <td className="px-6 py-4">
                                                    {puc}
                                                </td>
                                            </tr>
                                            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                                <td colSpan={3} className="px-6 py-4 text-center    ">
                                                    Total : {totalFine}
                                                </td>
                                            </tr>



                                        </tbody>
                                    </table>
                                    {
                                        totalFine != 0 ?

                                            fine_today != true ?
                                                <button className='bg-gray-600 hover:bg-gray-400 mt-5 text-white font-bold py-2 px-4 rounded' onClick={applyFine}>Apply Fine</button>
                                                :
                                                <p className='text-xl mt-2'>For Today you already have fined</p>
                                            :
                                            <p className='text-xl mt-2'>No Fine</p>
                                    }

                                </div>
                            </div>

                        </div>
                        :
                        <div className='text-center mt-5'>
                            You dont have an access of scanning QR Code Sorry...
                        </div>
                    :
                    <div className='flex justify-center'>
                        <h2 className='text-2xl text-center my-8 mx-10'>Please Wait.... </h2>
                        <Spinner />
                    </div>
            }




        </div>
    )
}

export default Fine