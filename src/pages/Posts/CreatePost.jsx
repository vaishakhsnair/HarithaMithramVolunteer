import React from 'react'
import { AiOutlineArrowLeft } from 'react-icons/ai'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const CreatePost = () => {
    const [region,setRegion] = useState(null);
    const [overlay,setOverlay] = useState(false)
    const navigate = useNavigate();
    const selectRegion = ({regionCode}) => {
        setRegion(regionCode)   
        console.log(regionCode)
    }
    const NextSection = () =>{
        console.log("Next Section "+overlay)
        return(
            <section className='w-full h-full p-1 z-50'>
                {overlay ? setOverlay(false) : setOverlay(true)}
            </section>
        )
    }
    const CloseNextSection = () =>{
        setOverlay(false)
    }
    const regionDirect = ({regionCode,url}) =>{
        return(
            <button 
                className='w-full h-auto py-3 text-[#005C29] bg-[#005C29]/[.20] text-center font-semibold text-2xl rounded-lg hover:bg-[#005C]/[.30] hover:text-white'
                onClick={()=>(selectRegion({regionCode}),NextSection())}
           >
                {regionCode}
             </button>
        )
    }


  return (
    <section className='w-screen h-screen flex flex-col overflow-hidden'>
        <div className='relative z-10'>
            <div className='absolute w-[600px] h-[600px] rounded-full bg-green-400/[.2] translate-x-[-20%] translate-y-[-75%]'></div>
        </div>
        <div className='z-10 absolute w-full h-full items-center flex flex-col'>
            <div className='w-full p-3 max-h-48 h-12 flex gap-12 mt-12 justify-start items-center'>
                <AiOutlineArrowLeft className='w-12 h-12' />
                <span className='font-semibold text-[#005C2]/[.95] text-4xl'>
                    Locations
                </span>
            </div>
            <div className='flex flex-col w-11/12 mt-14 h-auto items-center gap-4 '>
                {regionDirect({regionCode:'Asia',value:'asia',url:'/posts/Asia'})}
                {regionDirect({regionCode:'Europe',url:'/posts/Europe'})}
                {regionDirect({regionCode:'Africa',url:'/posts/Africa'})}
                {regionDirect({regionCode:'North America',url:'/posts/NorthAmerica'})}
                {regionDirect({regionCode:'South America',url:'/posts/SouthAmerica'})}
                {regionDirect({regionCode:'Australia',url:'/posts/Australia'})}
            </div>
            {overlay && <div className='w-full h-screen bg-red-900 absolute'>
                     <p className=' flex items-center justify-center text-white'>Overlay</p>
                     <button type='button' className='border-2 border-white rounded-xl p-4' onClick={()=>{CloseNextSection()}}>X</button>
                </div>}
        </div>
    </section>
  )
}

export default CreatePost