import React from 'react'
import { useLocation,useNavigate } from 'react-router-dom'


function QrResult(){
    const location = useLocation()
    const navigate = useNavigate()

    const data = location?.state
    if(!data){
        navigate('/qrscan')
    }
    console.log(data)
    return (
    <div className='flex flex-col items-center justify-center min-w-screen min-h-screen 
                 
                bg-black text-center'>
    <div className='text-white text-4xl font-bold'>User Found</div>
    <div className='text-white text-2xl font-bold'>{data?.name}</div>
    <div className='text-white text-2xl font-bold'>{data?.email}</div>
    <div className='text-white text-2xl font-bold'>{data?.phone_no}</div>
    <div className='text-white text-2xl font-bold'>{data?.address}</div>
    <div className='flex w-screen items-center justify-center gap-[50%]'>

    </div>
    </div>
    )
}

export default QrResult
