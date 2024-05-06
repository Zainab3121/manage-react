import React from 'react'
import Tablet2 from '../../assets/images/bg-tablet-pattern.svg'
import Logo from '../../assets/images/logo_footer.svg'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <div className='items-center w-full'>
           <div className='footer grid md:flex justify-between py-[2.5rem] px-[6rem] bg-[#F25F3A] items-center'>
            
            <div className='w-full md:w-[52%]'>
                <h2 className='text-[2.2rem] md:text-[2.5rem] text-center md:text-left font-semibold text-white'>
                    Simplify how your team works today.
                </h2>
            </div>

            <div className='text-center mt-5 md:mt-0 '>
                <button className='bg-white py-[10px] px-[19px] text-[#F25F3A] rounded-3xl' style={{boxShadow: '0  0 10px #F25F3A'}}>
                    Get Started
                </button>
            </div>               
           </div>

           <div className='flex-cols-1 md:flex justify-center md:justify-between items-center bg-[#1D1E25] py-[2rem] px-[6rem]'>
            <div>
                <Link>
                    <img src={Logo} alt="logo" className='invert mx-auto' />
                </Link>

                <ul className='mt-[5rem] flex justify-center  gap-[2rem] md:gap-[1rem] lg:gap-[2rem] text-white'>
                    <li>
                    <Link><i class="ri-facebook-circle-fill"></i></Link>
                    </li>
                    <li>
                    <Link><i class="ri-youtube-line"></i></Link>
                    </li>
                    <li>
                    <Link><i class="ri-twitter-line"></i></Link>
                    </li>
                    <li>
                    <Link><i class="ri-whatsapp-line"></i></Link>
                    </li>
                    <li>
                    <Link><i class="ri-instagram-line"></i></Link>
                    </li>
                </ul>
            </div>

            <div className='item-center text-center  text-white  my-[3rem]'>
                <ul>
                    <li><Link to='/'>Home</Link></li>
                    <li className='my-[1rem]'><Link to='/about'>About</Link></li>
                    <li><Link to='/team'>Team</Link></li>
                </ul>
            </div>

           <div>
                <div className='text-center'>
                    <input type="text" placeholder="Update in your inbox..." className='py-[10px] px-[19px] rounded-3xl outline-none' />
                    <button className='bg-[#F25F3A] py-[10px] px-[19px] text-black rounded-3xl' style={{boxShadow: '0  0 10px #F25F3A'}}>
                        Go
                    </button>
                </div>

                <p className='text-white mt-5 text-center'>
                    &copy; copyright {new Date().getFullYear()}. All Rights Reserved
                </p> 
            </div>
            </div>
             
             <img src={Tablet2} alt="tablet" className='absolute z-[-1] bottom-[10px] left-[-10rem] md:bottom-[-60px] md:left-[-15rem] w-[50%] md:w-[40%]' />
            
        </div>
    )
}

export default Footer