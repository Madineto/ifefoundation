
// import { GiSelfLove } from "react-icons/gi";
import { FaChildren } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className='container bg-black text-white py-[4em] px-[8rem]'>
         <div className=' flex'>
            <div className='w-3/5 flex space-x-[3rem] '>
                <div className='flex space-x-1 '>
                <h1 className='font-medium text-[1.3rem] '>IFEfoundation<strong>i</strong></h1>
                <span className='font-medium text-[1.3rem]'><FaChildren /></span>

                 </div>

                <div className='flex space-x-[5.0em] text-[0.8em]'>
                <ul className='space-y-5 font-thin'>
                    <li className='font-bold text-blue-500 '>Home </li>
                    <li className='hover:text-yellow-500'>About us</li>
                    <li className='hover:text-yellow-500'>Media</li>
                    <li className='hover:text-yellow-500'>What we do</li>
                    <li className='hover:text-yellow-500'>Contact</li>
                </ul>

                <ul className='space-y-5 font-thin'>
                    <li className='font-bold  text-blue-500'>More </li>
                    <li className='hover:text-yellow-500'>Projects</li>
                    <li className='hover:text-yellow-500'>Events</li>
                    <li className='hover:text-yellow-500'>Donate</li>
                    <li className='hover:text-yellow-500'>Blog</li>
                </ul>

                <ul className='space-y-5 font-thin'>
                    <li className='font-bold  text-blue-500'>Connect </li>
                    <li className='hover:text-yellow-500'>Facebook</li>
                    <li className='hover:text-yellow-500'>Instagram</li>
                    <li className='hover:text-yellow-500'>Twitter</li>
                    <li className='hover:text-yellow-500'>Linkedin</li>
                </ul>



                
            </div>

        </div>

        <div className='w-2/5'>
            <h1 className='font-bold text-[1.8em]'>
                Subscribe to get latest updates
            </h1>

            <div>
                <input type="email" placeholder='Your email' className='py-3 px-[2.0em] mt-[2.5em]
                 bg-black  border-[0.5px] border-gray-500 rounded-tl-md rounded-bl-md w-[19em]' />

                 {/* button */}
                 <button className='bg-white text-[0.88rem] text-black py-3 pt-4 px-3 border-[0.5px] rounded-br-md rounded-tr-md
                  font-bold'>Subscribe</button>
            </div>

        </div>

    </div>
    
    </div>

    
   
  )
}

export default Footer