import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../Context/ContextApi";
import { auth } from "./firebase";
import { signOut } from "firebase/auth";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const navigate = useNavigate();
  
  const store = useContext(UserContext);

  const handleSignIn = ()=>{
    navigate('/login');
  }
  
  const handleLogOut = ()=>{
    console.log('Log out called');
    signOut(auth).then((res)=> {
      console.log("Successfully logged out!");
      localStorage.removeItem("token");
      localStorage.removeItem("userId");
      store.setSignedIn(false);
      store.setUser(null);
      store.setEmail(null);
      navigate("/login")
    })
  }

  return (
    <div className="max-w-[1640px] flex justify-between items-center p-4">
      {/* Left side */}
      <div className="flex items-center">
        {/* <div onClick={()=> setNav(!nav)} className='cursor-pointer'>
          <AiOutlineMenu size={30} />
        </div> */}

        <h1 className="text-2xl sm:text-3xl lg:text-4xl px-2">
          <span className="font-bold">Avinya App</span>
        </h1>

        {/* <div className='hidden  md:flex items-center bg-gray-200 rounded-full p-1 text-[14px]'>
          <p className='bg-black text-white rounded-full p-2'>Multiutility</p>
          <p className='p-2'>App</p>
        </div> */}
      </div>

      {/* Search Input */}
      {/* <div className='bg-gray-200 rounded-full flex items-center px-2 w-[200px] sm:w-[400px] lg:w-[500px]'>
        <AiOutlineSearch size={25} />
        <input className='bg-transparent p-2 w-full focus:outline-none'  type='text'  placeholder='Search foods'/>
      </div> */}

      {/* Cart button */}
      {/* <a href="#Tools">
        <button className="bg-black text-white hidden md:flex items-center py-2 rounded-full">
          {" "}
          <BsFillCartFill size={20} className="mr-2" /> App
        </button>
      </a> */}

      {!store.signedIn ? <button
        type="button"
        className="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"

        onClick={handleSignIn}
      >
        LogIn/SignUp
      </button> : 
      <button
        type="button"
        className="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"

        onClick={handleLogOut}
      >
        Log out
      </button>
      }

      {/* Mobile Menu */}
      {/* Overlay */}
      {/* {nav ? <div className='bg-black/80 fixed w-full h-screen z-10 top-0 left-0'></div> : ''} */}

      {/* Side drawer menu */}
      {/* <div className={nav ? 'fixed top-0 left-0 w-[300px] h-screen bg-white z-10 duration-300' : 'fixed top-0 left-[-100%] w-[300px] h-screen bg-white z-10 duration-300' }>
        <AiOutlineClose  onClick={()=> setNav(!nav)} size={30} className='absolute right-4 top-4 cursor-pointer' /> */}
      {/* <h2 className='text-2xl p-4'>  MultiUtility <span className='font-bold'>App</span></h2>
        <ul className='flex flex-col p-4 text-gray-800'>
            <li className='text-xl py-4 flex'><TbTruckDelivery size={25} className='mr-4' /> Orders</li>
            <li className='text-xl py-4 flex'><MdFavorite size={25} className='mr-4' /> Favorites</li>
            <li className='text-xl py-4 flex'><FaWallet size={25} className='mr-4' /> Wallet</li>
            <li className='text-xl py-4 flex'><MdHelp size={25} className='mr-4' /> Help</li>
            <li className='text-xl py-4 flex'><AiFillTag size={25} className='mr-4' /> Promotions</li>
            <li className='text-xl py-4 flex'><BsFillSaveFill size={25} className='mr-4' /> Best Ones</li>
            <li className='text-xl py-4 flex'><FaUserFriends size={25} className='mr-4' /> Invite Friends</li>
        </ul> */}
      {/* </div> */}
    </div>
  );
};

export default Navbar;
