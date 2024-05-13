import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';

const Page = () => {
    return (
        <>
        <Navbar />
        <div className="flex justify-center mt-20">
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
                            <td className="p-3 md:p-4 text-center">
                                <button className="rounded-full px-4 md:px-6 py-1 md:py-2 bg-green-500 text-white text-sm md:text-lg hover:bg-green-600"><Link to='/Dlupload'>Upload</Link></button>
                            </td>
                        </tr>
                        <tr>
                            <td className="p-3 md:p-4 text-center text-lg">2</td>
                            <td className="p-3 md:p-4 text-lg">Upload RC</td>
                            <td className="p-3 md:p-4 text-center">
                                <button className="rounded-full px-4 md:px-6 py-1 md:py-2 bg-green-500 text-white text-sm md:text-lg hover:bg-green-600"><Link to='/RcUpload'>Upload</Link></button>
                            </td>
                        </tr>
                        <tr>
                            <td className="p-3 md:p-4 text-center text-lg">3</td>
                            <td className="p-3 md:p-4 text-lg">Upload P.U.C</td>
                            <td className="p-3 md:p-4 text-center">
                                <button className="rounded-full px-4 md:px-6 py-1 md:py-2 bg-green-500 text-white text-sm md:text-lg hover:bg-green-600"><Link to='/PucUpload'>Upload</Link></button>
                            </td>
                        </tr>
                        <tr>
                            <td className="p-3 md:p-4 text-center text-lg">4</td>
                            <td className="p-3 md:p-4 text-lg">Upload Insurance</td>
                            <td className="p-3 md:p-4 text-center">
                                <button className="rounded-full px-4 md:px-6 py-1 md:py-2 bg-green-500 text-white text-sm md:text-lg hover:bg-green-600"><Link to='/InsurUpload'>Upload</Link></button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
        </>
    );
}

export default Page;