import { useState, useEffect } from 'react'
import {supabase} from '../../components/supabaseClient'
import './login.css'


export default function Login() {
    return (
<div 
    className='flex items-center justify-center min-w-screen min-h-screen 
                bg-image bg-no-repeat bg-cover 
                bg-center border-2 '>
    <div className='flex items-center justify-center min-w-[80%] min-h-[20%]'>
        Login With Google
    </div>
</div>
    )
}