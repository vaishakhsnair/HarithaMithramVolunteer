import{ Link } from 'react-router-dom'
import { BiHomeAlt2 ,BiMessageDetail,BiCalendar} from "react-icons/bi";
import { MdOutlinePersonOutline } from "react-icons/md";

const Navbar = () => {
    return(
        <div className="w-screen py-2 flex gap-8 absolute bottom-0 h-[8vh] bg-white rounded-t-3xl justify-center">
            <Link to={'/'} >
                <BiHomeAlt2 size={48} className='mx-4'/>
            </Link>

            <Link to={'/chat'} >
                <BiMessageDetail size={48} className='mx-4'/>
            </Link>

            <Link to={'/calendar'} >
                <BiCalendar size={48} className='mx-4'/>
            </Link>

            <Link to={'/profile'} >
                <MdOutlinePersonOutline size={48} className='mx-4'/>    
            </Link>

        </div>
    )
}

export default Navbar