import { IoMdArrowBack } from "react-icons/io";
import { useNavigate } from "react-router-dom";

export default function Calendar() {
    const navigate = useNavigate();

  const today = new Date();
  const month = today.toLocaleString('default', { month: 'long' });

  const startOfWeek = today.getDate() - today.getDay();
  const endOfWeek = startOfWeek + 6; // Saturday

    const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']; 
  const week = Array.from({length: 7}, (v, i) => {
    const day = new Date(today.getFullYear(), today.getMonth(), startOfWeek + i);
    return day.getDate();
  });

  const dayComponent = (day, date) => {
    const isToday = date === today.getDate();
    return (
      <div className="w-[12.5vw] h-[12.5vw] bg-[#EAFED6] rounded-xl flex-col text-center justify-center">
        <div className="text-2xl font-lg ">{day}</div>
        <div className={`text-xl font-lg ${isToday ? 'bg-blue-200 rounded-full p-1' : ''}s`}>{date}</div>  
      </div>
    );
  };

  const schedule = (day,date,message) => {
    const isToday = date === today.getDate();
    return (
      <div className="w-screen h-18   mt-4   rounded-xl flex text-center gap-10">
        <div className="w-[12.5vw] h-[12.5vw]  rounded-xl flex-col text-center justify-center ">
            <div className="text-2xl font-lg ">{day}</div>
            <div className={`text-xl font-lg ${isToday ? 'bg-blue-200 rounded-full p-1' : ''}s`}>{date}</div>  
        </div>
        <div className="w-3/4 h-18 border-2 border-black rounded-2xl text-2xl flex items-center justify-center">
            <span>{message}</span>
        </div>
      </div>
    );
  }

  return (
    <div className="min-w-screen min-h-screen flex-col">
      <div className='absolute top-[-50vw] -left-[70vw] w-[150vw] h-[140vw] bg-[#EAFED6] rounded-full z-0 translate-x-[30%]'></div>
        <IoMdArrowBack size={40} color="black" className="absolute left-0 top-10" onClick={() => {
            navigate(-1)
        }}/>
      <div className="relative top-0 text-center text-4xl mt-[10vh] font-bold opacity-50" >{month}</div>
      <div className="relative flex flex-wrap justify-center gap-2 mt-4 opacity-50">
        {week.map((date, i) => dayComponent(days[i], date))}
      </div>
    <div className="relative flex-col ">
        <div className="relative flex flex-wrap justify-center gap-2 mt-20 opacity-50 mx-4">
            {schedule('Sun', 1, 'Meeting')}
            {schedule('Mon', 2, 'Gym')}
            {schedule('Tue', 3, 'Lunch')}
            {schedule('Wed', 4, 'Dinner')}
            {schedule('Thu', 5, 'Work')}
            {schedule('Fri', 6, 'Study')}
            {schedule('Sat', 7, 'Party')}
        </div>
    </div>

    </div>
  );
}