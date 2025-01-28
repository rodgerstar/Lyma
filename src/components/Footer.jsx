import React from "react";
import {assets} from "../assets/assets.js";


const Footer = () => {
    return (
        <div className='pt-10 px-4 md:px-20 lg:px-32 bg-gray-900 w-full
        overflow-hidden' id='Footer'>
            <div className='container mx-auto flex flex-col md:flex-row
            justify-between items-start'>
                <div className='w-full md:w-1/3 mb-8 md:mb-0'>
                    <img src={assets.logo_dark} alt=""/>
                    <p className='text-gray-400 mt-4'>Lorem Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda autem corporis cum dignissimos eaque, eos, esse et facilis incidunt laborum mollitia, officiis pariatur porro praesentium quam repellendus sit tempora temporibus!</p>
                </div>
                <div>
                    <h3 className='text-white text-lg font-bold
                    mb-4'>Company</h3>
                    <ul>
                        <a href="#Header"
                           className='hover:text-white'>Home</a>
                        <a href="#About"
                           className='hover:text-white'>About Us</a>
                        <a href="#Contact"
                           className='hover:text-white'>Contact us</a>
                        <a href="#"
                           className='hover:text-white'>Privacy Policy</a>
                    </ul>
                </div>
                <div></div>
            </div>
            <div></div>
        </div>
    )
}

export default Footer