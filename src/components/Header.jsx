import moment from 'moment';
import logo from '../assets/logo.png';
export default function Header() {
  return (
    <div className="flex flex-col gap-2 items-center justify-center py-3">
        <div className="logo">
            <img className='w-[300px]' src={logo} alt="Site logo" />
        </div>
        <h2 className='text-gray-500 text-lg'>Journalism Without Fear or Favour</h2>
        <p className='font-medium text-lg text-gray-500'>{moment().format("dddd, MMMM Do YYYY")}</p>
    </div>
  )
}
