import { Scanner } from '@yudiel/react-qr-scanner';
import { useState } from 'react';
import { MdFlashlightOff,MdFlashlightOn } from "react-icons/md";
import { RiCameraOffFill,RiCameraFill } from "react-icons/ri";
import {supabase} from '../../components/supabaseClient'

export default function QrScanner() {

    const [enabled, setEnabled] = useState(true)
    const [flash, setFlash] = useState(false)

    const handleScan = (data,result) => {
        console.log(data,result)
        supabase
            .from('users')
            .select('*')
            .eq('id',data)
            .then(({data,error})=>{
                if(error){
                    console.log(error)
                }else{
                    console.log(data)
                }
            }
        )

    }
    return (
        <div
            className='flex flex-col items-center justify-center min-w-screen min-h-screen 
                         
                        bg-black text-center'>
            <div className='text-white text-4xl font-bold'>Scan Your QR Code</div>
            <Scanner
                onResult={(text, result) => handleScan(text,result)}
                onError={(error) => console.log(error?.message)}
                enabled={enabled}
                switchTorch={flash}
            />

            <div className='flex w-screen items-center justify-center gap-[50%]'>
                <div className='flex items-center justify-center  self-start ml-8

                            rounded-xl min-h-12 min-w-20 gap-10 text-center 
                            text-xl cursor-pointer text-white font-bold  '
                    onClick={() => setEnabled(!enabled)}>
                    {enabled ? <RiCameraFill size={40} color='white' className='m-2' /> : <RiCameraOffFill size={40} color='white' className='m-2' />}
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