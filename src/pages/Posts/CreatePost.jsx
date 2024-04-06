import { AiOutlineArrowLeft, AiOutlineDoubleRight } from 'react-icons/ai'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useState,useEffect ,React } from 'react'
import { supabase } from '../../components/supabaseClient';
import { useNavigate } from 'react-router-dom'
import '../../styles/styles.css'
import { data } from 'autoprefixer';

const CreatePost = () => {
    const [region,setRegion] = useState(null);
    const [overlay,setOverlay] = useState(false)
    const [regionResult,setRegionResult] = useState('')
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
    const UserCard = (user) => {
        return(
            <div className='w-5/6 py-2 bg-white flex items-center justify-start '>
                <div className='w-12 h-12 rounded-full bg-black border-2 border-green-500'></div>
                    <div className='w-1/2 py-2 ml-6 max-w-full'>
                        <p aria-placeholder='name'>{user.username}</p>
                </div>
            </div>
        )
    }
    const regionDirect = ({regionCode}) =>{
        return(
            <button 
                className='w-full h-auto py-3 text-[#005C29] bg-[#005C29]/[.20] text-center font-semibold text-2xl rounded-lg hover:bg-[#005C]/[.30] hover:text-white'
                onClick={() => {
                    selectRegion({regionCode});
                    NextSection();
                    fetchRegionUsers({regionCode})
                }}
           >
                {regionCode}
             </button>
        )
    }   
    async function fetchRegionUsers(region){

        try {
            if(sessionExists){
                console.log("fetching regional memebers")

                console.log('Fetcing Session')
                console.log(regionResult)
            }
            
        } catch (error) {
            console.log(error)
        }

    };
    const [sessionExists,SetExistingSession] = useState(null);
    useEffect(()=>{
            supabase.auth.getSession().then(({data:session})=>{
                SetExistingSession(session)
                console.log(session)
            })        
        },[])
        

  return (
    <section className='w-screen h-screen flex flex-col overflow-hidden'>
        <div className='relative z-10'>
            <div className='absolute w-[600px] h-[600px] rounded-full bg-green-400/[.2] translate-x-[-20%] translate-y-[-75%]'></div>
        </div>
        <div className='z-10 absolute w-full h-full items-center flex flex-col'>
            <div className='w-full p-3 max-h-48 h-12 flex gap-12 mt-12 justify-start items-center'>
                <button type='button' className='rounded-xl p-2' onClick={()=>(
                    navigate(-1)
                )}>
                    <AiOutlineArrowLeft className='w-12 h-12' />
                </button>
                <span className='font-semibold text-[#005C2]/[.95] text-4xl'>
                    Locations
                </span>
            </div>
            <div className='flex flex-col w-11/12 mt-14 h-auto items-center gap-4 '>
                {regionDirect({regionCode:'R1',value:'asia',url:'/posts/Asia'})}
                {regionDirect({regionCode:'R1',url:'/posts/Europe'})}
                {regionDirect({regionCode:'R3',url:'/posts/Africa'})}
                {regionDirect({regionCode:'R4',url:'/posts/NorthAmerica'})}
                {regionDirect({regionCode:'R5',url:'/posts/SouthAmerica'})}
                {regionDirect({regionCode:'R6',url:'/posts/Australia'})}
            </div>
            {overlay && <div className='w-full h-screen bg-white absolute'>
                    <section className='relative w-full h-full'>
                    <div className='w-full p-3 max-h-48 h-12 flex gap-12 mt-12 justify-start items-center'>
                    <button type='button' className='border-2 border-white rounded-xl p-4' onClick={()=>{CloseNextSection()}}>
                        <AiOutlineArrowLeft className='w-12 h-12' />
        
                    </button>
                    <span className='font-semibold text-[#005C2]/[.95] text-4xl'>
                        Regions
                    </span>
                    </div>
                     <div className='flex flex-col items-center gap-2 justify-center mt-8'>
                        <UserCard user={data}/>
                     </div>
                     <div className='absolute position-proceed rounded-full flex items-center justify-center overflow-hidden
                     z-30'>
                        <button type='button' 
                            className='btn-proceed-animtn rounded-full bg-[#8a18e7] hover:bg-[#0a8b87]  text-white p-2 flex items-center justify-center  w-14 h-14 '
                            >
                                <AiOutlineDoubleRight className='w-14 h-14' />
                        </button>
                     </div>
                    </section>
                </div>
            }
        </div>
    </section>
  )
}


export default CreatePost;