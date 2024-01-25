import { useEffect, useState } from 'react'
import Navbar from '../components/Navbar';
import { useParams } from 'react-router-dom';
import Spinner from '../Components/Spinner';
import toast from 'react-hot-toast';

const Fine = () => {

    const { userId } = useParams();
    const [dl, setDl] = useState();
    const [rc, setRc] = useState();
    const [puc, setPuc] = useState(0);
    const [totalFine, setTotalFine] = useState(0);
    const [Loading, setLoading] = useState(true)

    const API_URL = `http://localhost:8000/api/v1/fine/${userId}`;

    async function fetchData() {
        setLoading(false);

        try {
            const res = await fetch(API_URL, {
                method: 'GET',
                headers: {
                    //   'Authorization': `Bearer ${localStorage.getItem('token')}`
                },
            });

            const data = await res.json();

            setDl(data.data[0].fine_dl);
            setRc(data.data[0].fine_rc);
            setTotalFine(data.data[0].totalFine);

            console.log(data);

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
            fetchData()
        }
    }, [])

    return (
        <div>
            <Navbar />
            {
                Loading ?
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
                            </div>
                        </div>
                        
                    </div>
                    :
                    <div className='flex justify-center'>
                        <h2 className='text-2xl text-center my-8 mx-10'>Please Wait.... </h2>
                        <Spinner/>
                    </div>
            }

            {
                totalFine > 0 ? 
                <div className="Failed text-center text-xl mt-8 lg:text-2xl">
                    <p>Sorry! You have to pay fine as per generated receipt</p>
                </div>
                :
                <div className="Success text-center text-xl mt-8 lg:text-2xl">
                    <p>Congratulations🎉 Your account has no fine.</p>
                </div>
            }
         </div>
         
    )
}

export default Fine