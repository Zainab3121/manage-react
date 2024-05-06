import React from "react";
import Illustration from '../../assets/images/illustration-intro.svg'


const Home = () => {
    return (
        <div className="flex-col-reverse md:flex-row text-center md:text-left flex justify-between items-center px-[100px] py-[0] my-[3rem]">
            <div className="w-[62%] md:w-[55%] lg:w-[42%]">
                <h1 className="text-[2em] md:text-[2.5rem] lg:text-[3rem] text-[#242D52] font-extrabold">
                    Bring everyone together to build better products.
                </h1>

                <p className="my-[1rem] text-[1.2rem] text-gray-500">
                    Manage makes it simple for software teams to plan day-to-day tasks while keeping the larger team goals in view
                </p>

                <button className='bg-[#F25F3A] py-[10px] px-[19px] text-white rounded-3xl' style={{boxShadow: '0  0 10px #F25F3A'}}>
                    Get Started
                </button>
            </div>

            <img src={Illustration} alt="illustration" className="w-[62] md:w-[50%] lg:w-[45%]" />

        </div>
    )
}

export default Home