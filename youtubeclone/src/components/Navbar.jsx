import { useDispatch } from 'react-redux'
import { RxHamburgerMenu } from "react-icons/rx";
import { setNavValue } from '../store/sideSlice';
import { useState } from 'react';
import { CiBellOn } from "react-icons/ci";
import { CiVideoOn } from "react-icons/ci";
import { CiSearch } from "react-icons/ci";
import { FaMicrophone } from "react-icons/fa";

const Navbar = () => {

    const dispatch = useDispatch();

    const [newNavValue, setNewNavValue] = useState(false)

    const handleSideBar = () => {
        setNewNavValue(prev => !prev)
        dispatch(setNavValue(!newNavValue))
    }

    return (
        <>
            <nav className='w-full h-16 bg-black flex justify-self-center  items-center px-7 md:px-10  lg:px-7 md: py-10 fixed z-50 '>
                <div className='w-[15%] h-[50%] absolute flex items-center'>
                    <div className='logocontainer hover:bg-zinc-800 w-10 h-10 flex justify-center items-center rounded-full cursor-pointer'>
                        <RxHamburgerMenu color="white" size={24} className='cursor-pointer' onClick={handleSideBar} />
                    </div>
                    <img src="../ytlogo.png" alt="" className='w-10 h-10 absolute left-10 cursor-pointer' />
                    <p className='text-white absolute left-[3.3em] w-[0.5em] text-2xl font-semibold tracking-tighter cursor-pointer '>YouTube</p>
                </div>

               
                    <div className='hover:bg-zinc-800 rounded-full w-[2.5em] h-[2.5em] flex justify-center items-center absolute right-[9em] md:right-[20em] lg:hidden cursor-pointer'>
                        <span><CiSearch size={24} color='white' /></span>
                    </div>
                    <div className='hover:bg-zinc-800 rounded-full w-[2.5em] h-[2.5em] flex justify-center items-center absolute right-[7em] md:right-[16em] lg:hidden cursor-pointer '>
                        <span><FaMicrophone size={18} color='white' /></span>
                    </div>
    

                <div className='invisible lg:visible flex justify-center items-center w-[50%] relative h-[80%] mx-auto'>
                    <input type="text" placeholder='Search' className='w-[80%] h-[60%] rounded-full bg-zinc-800 p-5 outline-none border-none text-white' />
                    <div className='z-[99] h-[61%] flex justify-center items-center w-[4em] rounded-r-full cursor-pointer relative '>
                        <span><CiSearch size={24} color='white' /></span>
                    </div>
                    <div className='rounded-full w-[3em] h-[65%] flex justify-center items-center hover:rounded-full right-[0em] absolute'>
                        <span><FaMicrophone size={18} color='white' className='cursor-pointer' /></span>
                    </div>
                </div>

                <div className='lg:w-[13%] right-[1em] md:right-[3em] absolute p-2 w-[25%] h-[100%] flex justify-between items-center'>
                    <div className='hover:bg-zinc-800 rounded-full w-[3em] h-[3em] flex justify-center items-center cursor-pointer '>
                        <CiVideoOn size={25} color='white' />
                    </div>
                    <div className='hover:bg-zinc-800 rounded-full w-[3em] h-[3em] flex justify-center items-center cursor-pointer'>
                        <CiBellOn color='white' size={25} />
                    </div>
                    <span className='lg:w-[20%] lg:h-[72%] w-[25%] h-[1.2em] rounded-full cursor-pointer md:w-[25%] md:h-[2.8em]'>
                        <img src="https://images.unsplash.com/photo-1715412405304-b83d4d31a316?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMnx8fGVufDB8fHx8fA%3D%3D" alt="" className='w-[100%] h-[100%] rounded-full' />
                    </span>
                </div>
            </nav>
        </>
    )
}

export default Navbar