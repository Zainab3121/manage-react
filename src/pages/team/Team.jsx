import React from "react";
import Anisha from '../../assets/images/avatar-anisha.png'
import Ali from '../../assets/images/avatar-bravo.png'
import Richard from '../../assets/images/avatar-richard.png'
import Shanai from '../../assets/images/avatar-shanai.png'
import OwlCarousel from 'react-owl-carousel'
import 'owl.carousel/dist/assets/owl.carousel.css'
import 'owl.carousel/dist/assets/owl.theme.default.css'

const Team = () => {

    const teamArray = [
       
        {
            img: Anisha,
            heading: 'Anisha Li',
            description: "Manage has supercharged our team's workflow. The maintain visibility on large milesones at all times keeps everyone motived"
        },

        {
            img: Ali,
            heading: 'Ali Bravo',
            description: "We have been able to cancle so many other subsceiptions since using manage. There is no more cross-channel confusion and everyone is much more focused!"
        },
        
        {
            img: Richard,
            heading: 'Richard Watts',
            description: "Manage alows us to provide structures and project that keeps us organised and focused. I can't stop recommending them to everyone I talk to!"
        },

        {
            img: Shanai,
            heading: 'Shanai Gough',
            description: "Their software allows us to track,manage and collaborate on our project from anywhere.It keeps the whole team in-sync without being intrusive."
        }
    ]

    const options = {
        margin: 40,
        responsiveClass: true,
        nav: true,
        dots: true,
        autoplay: true,
        // navText: true,
        // navText: ["Prev", "Next"],
        smartSpeed: 1000,
        loop:true,
        responsive: {
            0: {
                items: 1,
            },
            400: {
                items: 1,
            },
            600: {
                items: 2,
            },
            700: {
                items: 3,
            },
            1000: {
                items: 3,
    
            }
        },
    };


    return (
        <div className="py-[2.5rem] px-[6rem]">
            <h1 className="text-[2rem] md:text-[2.5rem] text-[#242D52] font-extrabold text-center mb-16">
                What they've said
            </h1>

                <div className="flex flex-cols-1 ">
            <OwlCarousel {...options}>
                    {
                        teamArray.map(team => (
                            <div className="text-center pt-0 px-4 pb-4">
                                <img src={team.img} alt="" className="image" />

                                <div className="bg-[#FAFAFA] pt-16 px-4 pb-8 mt-[-2.5rem]">
                                    <h2 className="text-base text-[#242D52] font-extrabold">
                                        {team.heading}
                                    </h2>

                                    <p className="text-[1rem]">
                                        {team.description}
                                    </p>
                                </div>
                            </div>
                        ))
                    }
            </OwlCarousel>
                </div>

               <div className="text-center mt-9 mb-24 ">
                    <button className='bg-[#F25F3A] py-[10px] px-[19px] text-white rounded-3xl' style={{boxShadow: '0  0 10px #F25F3A'}}>
                            Get Started
                    </button>
               </div>


        </div>
    )
}

export default Team