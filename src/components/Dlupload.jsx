import { useEffect, useState } from 'react'
import Navbar from './Navbar'
import { useNavigate } from 'react-router-dom';
"use client";
import { Upload } from "keep-react";
import toast from 'react-hot-toast';

const Dlupload = () => {

        const navigate = useNavigate(); 

        const [fileName, setFileName] = useState("");
        const [percentage,setPercentage] = useState(0);
        const [uploadTime,setuploadTime] = useState(10);
        const [progressType,setprogressType] = useState("pending")
        const [showProgressBar,setshowProgressBar] = useState(false)
      

        const handleFileChange = async(event) => {
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
                
                await fetch('http://localhost:8000/api/v1/upload_dl', {
                    method: 'POST',
                    body: data,
                    headers: {
                        'Authorization': `Bearer ${localStorage.getItem('token')}`
                    },
                })
                .then((res) => {
                    res.json();
                    setuploadTime(0);
                    setPercentage(100);
                    setprogressType("success")
                    console.log(res.json());
                    toast.success("File uploaded Successfully....");
                })
                .catch((error) => {
                    setprogressType("error")
                    console.log(error);
                    toast.error("File uploading failed....");
                })
            }
        }
        
    useEffect(()=>{
        const token = localStorage.getItem('token');
        if(token == null){
            toast.error("Please Sign In First...");
            navigate('/signin');
        }
    },[navigate])

    return (
        <div>
            <Navbar />
            <div className='flex justify-center'>

                <div className='w-2/3 h-108   bg-[#F3F8FF] mx-2  my-8'>
                    <h1 className='flex justify-center text-blue-500  font-bold text-2xl my-3 upload font-mono '>Driving license</h1>

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

                </div>
            </div>
        </div>


    )
}

export default Dlupload