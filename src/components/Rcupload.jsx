import { useEffect, useState } from 'react'
import Navbar from './Navbar'
import { useNavigate } from 'react-router-dom';
"use client";
import { Upload } from "keep-react";
import toast, { Toaster } from 'react-hot-toast';

const Rcupload = () => {

    const navigate = useNavigate();

    const [fileName, setFileName] = useState("");
    const [percentage, setPercentage] = useState(0);
    const [uploadTime, setuploadTime] = useState(10);
    const [progressType, setprogressType] = useState("pending")
    const [showProgressBar, setshowProgressBar] = useState(false)
    const [Error, setError] = useState("");
    const [success, setSuccess] = useState("");

    const handleFileChange = async (event) => {
        const file = event.target.files[0];
        const data = new FormData();
        data.append("document", file);
        setshowProgressBar(true)
        setuploadTime(10)
        setPercentage(10)
        if (file) {

            setFileName(file.name);
            setuploadTime(5)
            setPercentage(50)

            await fetch('http://localhost:8000/api/v1/upload_rc', {
                method: 'POST',
                body: data,
                headers: {
                    'Authorization': `Bearer ${localStorage.getItem('token')}`
                },
            })
            .then((res) => {
                return res.json();
            })
            .then((res) =>{
                console.log(res);
                setuploadTime(0);
                setuploadTime(50);
                if(res.success == false){
                    setprogressType("error")
                    setError(res.message);
                    toast.error(`${res.message}`);
                    
                }else{
                    setPercentage(100);
                    setSuccess(res.message);
                    toast.success(`Driving License uploaded successfully `);
                    setprogressType("success")
                }
            })
            .catch((error) => {
                setprogressType("error")
                console.log(error);
                toast.error("File uploading failed....");
            })
        }
    }


    useEffect(() => {

        const token = localStorage.getItem('token');

        if (token == null) {
            toast.error("Please Sign In First...");
            navigate('/signin');
        }
    }, [navigate])

    return (
        <div>
            <Navbar />
            <div className='flex justify-center'>

                <div className='w-2/3 h-108   bg-[#F3F8FF] mx-2  my-8'>
                    <h1 className='flex justify-center text-blue-500  font-bold text-2xl my-3 upload font-mono '>RC Book</h1>

                    {/* file upload */}
                    <Upload
                        onFileChange={handleFileChange}
                        file={fileName}
                        showProgressBar={showProgressBar}
                        progressType={progressType}
                        progress={percentage}
                        uploadTime={`${uploadTime} seconds left`}
                        id="upload"
                    />

                    {
                        Error
                        ?
                        <p className='text-red-500 ml-5 font-semibold'>Message : {Error}</p>
                        :
                        <></>
                    }

                    {
                        success
                        ?
                        <p className='text-green-500 ml-5 font-semibold'>Message : {success}</p>
                        :
                        <></>
                    }

                </div>
            </div>
            <Toaster
                position="bottom-center"
                reverseOrder={false}
            />
        </div>


    )
}

export default Rcupload