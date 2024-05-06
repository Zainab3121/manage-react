import React from "react";

const About = () => {

    const aboutArray = [
        {
            list: '01',
            heading: 'Track company-wide progress',
            description: 'See how your day-to-day tasks fit into the wider vision. Go from tracking progress at the milestone level all the way done to the smallest of details. Never lose sight of the bigger picture again.'
        },

        {
            list: '02',
            heading: 'Advanced built-in reports',
            description: 'Set internal delivery estimates and track progress toward company goals. Our customisable dashboard helps you build out the reports you need to keep key stakeholders informed.'
        },

        {
            list: '03',
            heading: 'Everything you need in one place',
            description: 'Stop jumping from one service to another to communicate, store files, track tasks and share documents. Manage offers an all-in-one team productivity solution.'
        }
       
    ]

    return (
        <div className="py-[2.5rem] px-[6rem] text-center md:text-left grid md:flex justify-between">
            <div className=" w-[65] md:w-[45%]">
                <h2 className="text-[1.5rem] md:text-[2.2rem] text-[#242D52] font-extrabold">
                    What's different about Manage?
                </h2>

                <p className="text-14px md:text-[1.1rem] mt-[3rem] text-gray-500">
                    Manage provides all the functionality your team needs, without the complexity. Our software is tailor-made for modern digital product teams 
                </p>
            </div>

            <div className="w-[100%] md:w-[50%]">
                {
                    aboutArray.map(about => (
                        <ol className="mt-[2rem]">
                            <li>
                                <div className="flex items-center gap-[1.5rem]  md:bg-transparent bg-orange-200 rounded-l-[50px] py-[.1rem]">
                                    <p className="py-[.5rem] px-[2rem] text-white bg-[#F25F3A] rounded-3xl">
                                        {about.list}
                                    </p>

                                    <h2 className="font-bold text-[14px] md:text-[1rem] text-[#242D52]">
                                        {about.heading}
                                    </h2>
                                </div>

                                <p className="ml-[6.5rem] text-[14px] md:text-[1rem] text-gray-500 text-left">
                                    {about.description}
                                </p>
                            </li>
                        </ol>
                    ))
                }
            </div>
           
        </div>
    )
}

export default About