import { useState } from 'react';
import { MdFlashlightOff,MdFlashlightOn } from "react-icons/md";
import { RiCameraOffFill,RiCameraFill } from "react-icons/ri";
import {supabase} from '../../components/supabaseClient'
import { useZxing } from "react-zxing";
import { enable } from 'workbox-navigation-preload';
import { useNavigate } from 'react-router-dom';

export default function QrScanner() {

    const [paused, setPaused] = useState(false)
    const [flash, setFlash] = useState(false)
    const [result, setResult] = useState('')
    const navigate = useNavigate()

    const { 
        ref,
        torch: {on,off,isOn,isAvailable},
     } = useZxing({
        paused:paused,
        onDecodeResult(result) {
          setResult(result.getText());
          console.log(result)
          handleScan(result.text)   
        },
      });


    const handleScan = (data) => {
        supabase
            .from('users')
            .select('*')
            .eq('id',data)
            .then(({data,error})=>{
                if(error){
                    console.log(error)
                }else{
                    console.log(data)
                    if(data.length>0){
                        console.log(data[0])
                        navigate('/qrscan/result',{state:data[0]})
                    }
                }
            }
        )

    }
    return (
        <div
            className='flex flex-col items-center justify-center min-w-screen min-h-screen 
                         
                        bg-[#76b86f] text-center'>
            <div className='text-white text-4xl font-bold'>Scan Your QR Code</div>
            <div className='min-w-[90vw] max-w-[90vw] min-h-[40vh] max-h-[40vh] mt-10 flex justify-center items-center text-xl text-white  '>
                {
                    paused ? "Video Stream Is Paused... Enable to Scan" : <video ref={ref} className='min-w-full max-h-full min-h-full rounded-xl m-10'  />}
            </div>
            <div className='flex w-screen items-center justify-center gap-[50%]'>
                <div className='flex items-center justify-center  self-start ml-8

                            rounded-xl min-h-12 min-w-20 gap-10 text-center 
                            text-xl cursor-pointer text-white font-bold  '
                    onClick={() =>  setPaused(!paused)}>
                    {!paused ? <RiCameraFill size={40} color='white' className='m-2' /> : <RiCameraOffFill size={40} color='white' className='m-2' />}
                </div>
                <div className='flex items-center justify-center self-end mr-8
                            rounded-xl min-h-12  min-w-20 gap-10 text-center 
                            text-xl cursor-pointer text-white font-bold  '
                    onClick={() => setFlash(!flash)}>
                    {flash ? <MdFlashlightOff size={40} color='white' className='m-2' /> : <MdFlashlightOn size={40} color='white' className='m-2' />}
                </div>

            </div>


        

                

        </div>
    )
}