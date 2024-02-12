
import  vid from '../assets/Images/video.png'

const Know = () => {
  return (
    <div className='container flex ml-[5rem]  justify-around'>
        <div className='flex flex-col w-2/5  space-y-4 mt-[2rem]'>

            <h1 className='pt-5 font-bold '>
                ABOUT US
            </h1>

            <h1 className='font-bold text-[2.2rem]'>
                A Safe Haven for Children With Special Needs.
            </h1>

            <p className='font-thin '> Ex enim nisi in exercitation officia veniam. Ex pariatur pariatur laborum mollit incididunt magna.</p>

            <p className='font-thin mb-4'>
                
 Laboris pariatur officia aliquip aliqua ex eiusmod enim deserunt minim. Amet non anim aliqua in aliqua cupidatat. Exercitation id labore non esse eu eiusmod voluptate laboris pariatur duis.
            </p>

            

            <a href="#" className=' py-1 bg-green-600 w-[7rem] text-center rounded-sm font-medium'>Learn More</a>

        </div>

        <div className=' w-1/5 mx-auto pt-7'>
            <img src={vid} alt="" className='h-[25rem] w-[22rem]' />
        </div>
        
    </div>
  )
}

export default Know
