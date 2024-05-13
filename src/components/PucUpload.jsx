import { useEffect, useState } from 'react';
import Navbar from './Navbar';
import { useNavigate } from 'react-router-dom';
import { Upload } from "keep-react";
import toast, { Toaster } from 'react-hot-toast';

const PucUpload = () => {
    const navigate = useNavigate();

    const [fileName, setFileName] = useState("");
    const [percentage, setPercentage] = useState(0);
    const [uploadTime, setUploadTime] = useState(10);
    const [progressType, setProgressType] = useState("pending");
    const [showProgressBar, setShowProgressBar] = useState(false);
    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");

    const handleFileChange = async (event) => {
        const file = event.target.files[0];
        const data = new FormData();
        data.append("document", file);
        setShowProgressBar(true);
        setUploadTime(10);
        setPercentage(10);
        
        if (file) {
            setFileName(file.name);
            setUploadTime(5);
            setPercentage(50);

            try {
                const res = await fetch('http://localhost:8000/api/v1/upload_puc', {
                    method: 'POST',
                    body: data,
                    headers: {
                        'Authorization': `Bearer ${localStorage.getItem('token')}`
                    },
                });
                const result = await res.json();

                console.log(result);
                setUploadTime(0);
                setPercentage(50);
                
                if (result.success === false) {
                    setProgressType("error");
                    setError(result.message);
                    toast.error(`${result.message}`);
                } else {
                    setPercentage(100);
                    setSuccess(result.message);
                    toast.success(`PUC uploaded successfully`);
                    setProgressType("success");
                }
            } catch (error) {
                setProgressType("error");
                console.error(error);
                toast.error("File uploading failed");
            }
        }
    }

    useEffect(() => {
        const token = localStorage.getItem('token');

        if (token == null) {
            toast.error("Please Sign In First...");
            navigate('/signin');
        }
    }, [navigate]);

    return (
        <div>
            <Navbar />
            <div className='flex justify-center'>
                <div className='w-2/3 h-108 bg-[#F3F8FF] mx-2 my-8'>
                    <h1 className='flex justify-center text-blue-500 font-bold text-2xl my-3 upload font-mono'>PUC Document</h1>

                    {/* File upload */}
                    <Upload
                        onFileChange={handleFileChange}
                        file={fileName}
                        showProgressBar={showProgressBar}
                        progressType={progressType}
                        progress={percentage}
                        uploadTime={`${uploadTime} seconds left`}
                        id="upload"
                    />

                    {error && <p className='text-red-500 ml-5 font-semibold'>Message: {error}</p>}
                    {success && <p className='text-green-500 ml-5 font-semibold'>Message: {success}</p>}
                </div>
            </div>
            <Toaster
                position="bottom-center"
                reverseOrder={false}
            />
        </div>
    );
}

export default PucUpload;
