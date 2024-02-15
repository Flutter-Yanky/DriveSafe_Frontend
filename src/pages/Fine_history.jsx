import { useEffect, useState } from "react";
import Navbar from "../components/Navbar"

const Fine_history = () => {

    const [arr, setArr] = useState([]);
    let idx = 1;

    async function fetchData() {
        try {
            const res = await fetch(`http://localhost:8000/api/v1/finecollection/${localStorage.getItem('id')}`, {
                method: 'GET',
            });

            const data = await res.json();

            // console.log(data.data);

            setArr(data.data)

        } catch (err) {
            console.log(err);
        }
    }

    useEffect(() => {
        fetchData()
    }, [])


    return (
        <div>
            <Navbar />


            <div className="relative overflow-x-auto mx-5">
                <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" className="px-6 py-3">
                                Index
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Fine on Driving license
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Fine on Rc Book
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Fine on P.U.C.
                            </th>

                            <th scope="col" className="px-6 py-3">
                                Fine on Insurance
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Totalfine
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Date Of fine
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Status
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            arr.map((item) => (
                                <tr key={item._id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                        {idx++}
                                    </th>
                                    <td className="px-6 py-4">
                                        {item.fine_dl}
                                    </td>
                                    <td className="px-6 py-4">
                                        {item.fine_rc}
                                    </td>
                                    <td className="px-6 py-4">
                                        {item.fine_puc}
                                    </td>
                                    <td className="px-6 py-4">
                                        {item.fine_insurance}
                                    </td>
                                    <td className="px-6 py-4">
                                        {item.fine_total}
                                    </td>
                                    <td className="px-6 py-4">
                                        {item.fine_createdAt}.

                                    </td>
                                    <td className="px-6 py-4">
                                        {item.fine_status === "false" ? "True" : "False"}
                                    </td>
                                </tr>
                            ))
                        }


                    </tbody>
                </table>
            </div>


        </div>
    )
}

export default Fine_history