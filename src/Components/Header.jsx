
// import { GiSelfLove } from "react-icons/gi";
import { FaChildren } from "react-icons/fa6";

const Header = () => {
  return (
    <div className='container'>
       <section className='flex justify-around items-center mt-[1rem] mb-[1rem]'>
        <div className='flex space-x-1'>
            <h1 className='font-bold text-[1.6rem] '>IFEfoundation<strong>i</strong></h1>
            <span className='font-bold text-[1.8rem]'><FaChildren /></span>

        </div>

        <div className='w-2/5'>
            <ul className='flex justify-between'>
                <li className="hover:text-yellow-500">Home </li>
                <li className="hover:text-yellow-500">About us</li>
                <li className="hover:text-yellow-500">Media</li>
                <li className="hover:text-yellow-500">What we do</li>
                <li className="hover:text-yellow-500">Contact</li>
            </ul>

        </div>

        <div>
            <a href="#" className='px-4 bg-black text-white py-3 rounded-md'>Donate</a>
        </div>

       
       </section>

       <div className="border-t border-b-1 border-black w-80% font-bold my-4"></div>

    </div>
  )
}

export default Header
