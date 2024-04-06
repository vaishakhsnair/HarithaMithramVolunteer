import { supabase } from '../../components/supabaseClient'
import { useState, useEffect } from 'react'
import UserProfile from '../User/UserProfile';
import NewUser from '../User/NewUser';
import { RxHamburgerMenu } from "react-icons/rx";
import '../../components/background.css'
import Navbar from '../../components/Navbar';
import { Link } from 'react-router-dom';

import CreatePost from '../Posts/CreatePost';



export default function Home() {
  const isLoggedIn = true;
  const [session, setSession] = useState(null)
  const [existingUser, setExistingUser] = useState(true)

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session)


    })

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session)
      if (session) {
        supabase
          .from('users')
          .select('setup_check')
          .eq('id', session.user.id)
          .then(({ data, error }) => {
            if (error) {
              console.log(error)
            } else {
              if (data.length === 0) {
                setExistingUser(false)
              } else {
                console.log(data[0].setup_check)
                setExistingUser(data[0].setup_check)
              }
            }
          })
      }
    })

    return () => subscription.unsubscribe()
  }, [])



  const bg_with_circles = (
    <div className='min-w-screen min-h-screen z-2 '>
      <div className='relative top-[-50vw] -left-[70vw] w-[140vw] h-[140vw] bg-[#EAFED6] rounded-full z-0'></div>
      <div className='relative top-[-10vw] right-0 w-[100vw] h-[100vw] bg-[#FEE5FD] rounded-full z-0'></div>
    </div>
  )


  const menuButton = (name, icon, redirectTo) => (
    <Link to={redirectTo} className='max-w-[35vw] min-w-[35vw] max-h-[35vw] min-h-[35vw] m-4 border-4 border-[#337C54] rounded-xl'>
      <div className='w-full h-1/2 flex items-center justify-center mt-4'>
        <img src={`/${icon}`} className='max-w-1/3 max-h-1/3'></img>
      </div>
      <div className=' max-w-[98%]  text-center max-h-1/3 flex flex-wrap justify-center font-bold text-sm text-[#337C54]'>
        <p>{name}</p>
      </div>
    </Link>
  )

  const KeyMap = [
    {title:'Pickup Request',image: 'pickup.png',url:'/pickup'},
    {title:'Send Announcement',image: 'announce.png',url:'/announcement'},
    {title:'Complaints Recieved',image:'complaints.png', url:'/complaints'},
    {title:'QR Scanner',image:'qrscan.png',url:'/qrscan'},
    {title:'Missed Pickup',image: 'mail.svg',url:'/missedpickup'},
    {title:'TIps & Tricks',image: 'tips.png',url:'/tips'},
  ]


  return (
    existingUser ?
      (
        <div className='relative min-w-screen min-h-screen max-h-screen flex-col overflow-y-hidden overflow-x-hidden'>
          <div className='absolute w-full h-screen border-2 border-green-400 '>
            <div className='relative'>
              <div className='bg-circle-dsg'></div>
              <div className='bg-circle-dsg'></div>
            </div>
          </div>
          <RxHamburgerMenu size={40} className='ml-4 mt-4'/>
          <div className='relative w-full h-full'>
            <img src='/kswmp.png' className='relative w-screen  z-10'></img>
          </div>

          <div className='relative w-full h-full flex flex-wrap justify-center'>
            {
              KeyMap.map((val) => {
                return menuButton(val.title, val.image, val.url)
              })
            }
          </div>
          <Navbar></Navbar>
        </div>
      )

      : <NewUser />


  )
}
