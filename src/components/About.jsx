import React from "react";
import {assets} from "../assets/assets.js";
import {motion} from "motion/react";

const About = () => {
    return (
        <motion.div
             initial={{opacity:0, x:200}}
             transition={{duration:1}}
             whileInView={{opacity:1, x:0}}
             viewport={{once:true}}


            className='flex flex-col items-center justify-center
        container mx-auto p-14 md:px-20 lg:px-32 w-full overflow-hidden'
             id='About'>
            <h1 className='text-2xl sm:text-4xl font-bold mb-2'>About <span
                className='underline underline-offset-4 decoration-1 under font-light'>Our Brand</span></h1>
            <p className=' text-gray-500 max-w-90 text-center mb-8'>Lyma Engineering: Driven by innovation, committed to
                excellence in engineering solutions.</p>
            <div className='flex flex-col md:flex-row items-center md:items-start md:gap-20'>
                <img src={assets.brand_img} alt="" className='w-full sm:w-1/2 max-w-lg'/>
                <div className='flex flex-col items-center-start mt-10 text-gray-600'>
                    <div className='grid grid-cols-2 gap-6 md:gap-10 w-full 2xl pr-28'>
                        <div>
                            <p className='text-4xl font-medium text-gray-800 '>9+</p>
                            <p>Years of Excellence</p>
                        </div>
                        <div>
                            <p className='text-4xl font-medium text-gray-800'>100+</p>
                            <p>Projects Completed</p>
                        </div>
                        <div>
                            <p className='text-4xl font-medium text-gray-800'>9+</p>
                            <p>Years of Excellent Service</p>
                        </div>
                        <div>
                            <p className='text-4xl font-medium text-gray-800'>15+</p>
                            <p>Ongoing Projects</p>
                        </div>
                    </div>
                    <p className='my-10 max-w-lg sm:text-sm '>Established in 2016, Lyma Engineering Services is a
                        multi-disciplinary company specializing in the sale, distribution, and servicing of high-quality
                        products for the process industry. We provide expert solutions in: <br/>
                        <li>air compressors and air treatment equipments.</li>
                        <li>refrigeration and air conditioning equipments.</li>
                        <li>water pipelines, fittings, steam, and hot water equipment.</li>
                       <br className='-mt-3'/>
                        as well as steam distribution systems. Our commitment is to deliver reliable installation and maintenance
                        services tailored to meet industry standards and client needs..</p>
                    <button className='bg-blue-600 text-white px-6 py-2 rounded max-w-40 -mt-5'>Learn More</
                    button>
                </div>
            </div>
        </motion.div>
    )
}
export default About