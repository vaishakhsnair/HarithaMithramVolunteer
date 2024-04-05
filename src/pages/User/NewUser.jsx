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
    const [check,setCheck] = useState(false)

    useEffect(() => {
        supabase.auth.onAuthStateChange((_event, session) => {
            console.log(session)
            setSession(session)

            supabase.from('users').select('setup_check').eq('id',session.user.id).then(({data,error})=>{
                if(error){
                    console.log(error)
                }else{
                    console.log(data)
                    if(data[0].setup_check){
                        setCheck(true)
                }
            }
        }
        )
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

    }).eq('id',session.user.id).then(({data,error})=>{
        if(error){
            console.log(error)
        }else{
            console.log(data)
            alert("Updated")
        }
    })
}

    const askDetails = (
        <form className='flex flex-col w-full h-full p-4 border-2 items-center text-center justify-center border-slate-900 gap-4'
            onSubmit={handleSubmit}
        >
            <div className='w-full flex flex-start'>
                <AiOutlineArrowLeft />
            </div>
           <div className='flex flex-col gap-2 items-start'>
                <h1 className='font-bold text-2xl'>Fill Your Profile</h1>
                <p>Dont Worry,you can always change it later</p>
           </div>
           <BiUserCircle className='w-48 h-48' />
            <label htmlFor='fullname' className='w-full h-auto'>
                <input type='text' placeholder='Full Name' className='rounded-lg border-2 py-2 w-full ' onChange={
                    (e)=>{
                        setFormData({...formData,Name:e.target.value})
                    }
                } value={formData.Name}   required></input>
            </label>
            <label htmlFor='address' className='w-full h-auto'>
                <input type='text' placeholder='Address' className='rounded-lg border-2 py-2 w-full ' onChange={
                    (e)=>{
                        setFormData({...formData,address:e.target.value})
                    }
                } value={formData.address} required></input>
            </label>
            <label htmlFor='email' className='w-full h-auto'>
                <input type='email' placeholder='Email' className='rounded-lg border-2 py-2 w-full ' onChange={
                    (e)=>{
                        setFormData({...formData,email:e.target.value})
                    }
                } value={formData.email} required></input>
            </label>
            <label htmlFor='phone' className='w-full h-auto'>
                <input type='text' placeholder='Phone number' className='rounded-lg border-2 py-2 w-full ' minLength={10} onChange={
                    (e)=>{
                        setFormData({...formData,pno:e.target.value})
                    }
                } value={formData.pno} required></input>
            </label>
            <button type='submit' className='w-3/6 py-2 rounded-lg bg-slate-500/[.2] text-slate-700' >SUBMIT</button>
        </form>
    )
  return (
    <section className='bg-white w-screen h-screen overflow-hidden'>
        {askDetails}
    </section>
  )
}

export default NewUser