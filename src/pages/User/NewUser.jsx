import React, { useEffect, useState } from 'react'
import { AiOutlineArrowLeft } from 'react-icons/ai'
import { BiUserCircle } from 'react-icons/bi'
import {supabase} from '../../components/supabaseClient'
const NewUser = () => {
    const [formData,setFormData] = useState(
        {
            Name:'',address:'',email: '', pno: ''
        }
    )
    const [session,setSession] = useState();
    useEffect(() => {
        supabase.auth.onAuthStateChange((_event, session) => {
            console.log(session)
            setSession(session)
        })
    }, [])



    
   const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData)
    supabase.from('users').update({
        name:formData.Name,
        address:formData.address,
        phone_no:formData.pno,
        setup_check:true
    }).eq('id',session.user.id)
    .then((data) => {
        console.log(data)
        if(data.status === 204){
            window.location.href = '/'
        }
    }).catch((error) => {
        console.log(error)
    })


}
  return (
    <section className='bg-white min-w-screen min-h-screen overflow-hidden mt-[5vh] '>
        <form className='flex flex-col w-full h-full px-2 items-center text-center justify-center border-slate-900 gap-[2vh]'
            onSubmit={handleSubmit}
        >
            <div className='w-full flex flex-start'>
                <AiOutlineArrowLeft />
            </div>
           <div className='flex flex-col gap-2 items-start'>
                <h1 className='font-bold text-2xl'>Fill Your Profile</h1>
                <p>Please Enter your details to finish sign-up</p>
           </div>
           <BiUserCircle className='w-48 h-48' />
            <label htmlFor='fullname' className='w-full h-auto'>
                <input type='text' placeholder='Full Name' className='rounded-lg border-2 py-2 w-full ps-2 ' onChange={
                    (e)=>{
                        setFormData({...formData,Name:e.target.value})
                    }
                } value={formData.Name}   required></input>
            </label>
            <label htmlFor='address' className='w-full h-auto'>
                <input type='text' placeholder='Address' className='rounded-lg border-2 py-2 w-full ps-2 ' onChange={
                    (e)=>{
                        setFormData({...formData,address:e.target.value})
                    }
                } value={formData.address} required></input>
            </label>
            <label htmlFor='email' className='w-full h-auto'>
                <input type='email' placeholder='Email' className='rounded-lg border-2 py-2 w-full ps-2 ' onChange={
                    (e)=>{
                        setFormData({...formData,email:e.target.value})
                    }
                } value={formData.email} required></input>
            </label>
            <label htmlFor='phone' className='w-full h-auto'>
                <input type='number' placeholder='Phone number' className='rounded-lg border-2 py-2 w-full ps-2 snap-none' minLength={10} onChange={
                    (e)=>{
                        setFormData({...formData,pno:e.target.value})
                    }
                } value={formData.pno} required onWheel={(e) => e.preventDefault()}></input>
            </label>
            <button type='submit' className='w-3/6 py-2 rounded-lg bg-slate-500/[.2] text-slate-700' >SUBMIT</button>
        </form>
    </section>
  )
}

export default NewUser