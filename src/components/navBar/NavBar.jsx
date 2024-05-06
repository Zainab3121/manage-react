import React, { useState } from 'react'
import Logo from '../../assets/images/logo.svg'
import { Link } from 'react-router-dom'
// import logo from '../../images/logo.svg'
import Tablet from '../../assets/images/bg-tablet-pattern.svg'

const NavBar = () => {
    const [showNav, setShowNav] = useState(false) 

    return (
        <div className='py-[2.5rem] px-[2rem] sm:px-[4rem] md:px-[6rem] flex justify-between items-center '>
            <Link to="/">
                <img src={Logo} alt="logo" />
            </Link>

            {
                showNav &&
                <ul className='gap-[2.5rem] flex-col sm:flex-row fixed sm:relative bg-white sm:bg-transparent shadow-sm sm:shadow-none left-[50%] top-[15%] py-[2rem] px-[5rem] sm:px-0 translate-x-[-50%] sm:left-0 sm:top-0 sm:translate-x-0 z-10 flex justify-between items-center text-gray-500'>
                    <li>
                        <Link to='/'>
                            Home
                        </Link>
                    </li>

                    <li>
                        <Link to='/about'>
                            About
                        </Link>
                    </li>

                    <li>
                        <Link to='/team'>
                            Team
                        </Link>
                    </li>
                </ul>

            }

            <ul className='sm:flex hidden gap-[2.5rem] flex-col sm:flex-row fixed sm:relative bg-white sm:bg-transparent shadow-sm sm:shadow-none left-[50%] top-[15%] py-[2rem] px-[5rem] sm:px-0 translate-x-[-50%] sm:left-0 sm:top-0 sm:translate-x-0 z-10 justify-between items-center text-gray-500'>
                <li>
                    <Link to='/'>
                        Home
                    </Link>
                </li>

                <li>
                    <Link to='/about'>
                        About
                    </Link>
                </li>

                <li>
                    <Link to='/team'>
                        Team
                    </Link>
                </li>
            </ul>


            
            <button className='hidden sm:block bg-[#F25F3A] py-[10px] px-[19px] text-white rounded-3xl' style={{boxShadow: '0  0 10px #F25F3A'}}>
                Get Started
            </button>

            <i class="ri-menu-2-line sm:hidden" onClick={() => setShowNav(!showNav)}></i>

            <img src={Tablet} alt="tablet" className='absolute w-[50%] z-[-1] right-[-70px] top-[-40px]' />            
            
        </div>
    )
}

export default NavBar