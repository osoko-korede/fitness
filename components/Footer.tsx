import React from 'react'
import { FaBehance, FaDribbble, FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa'
import { FaBasketball } from 'react-icons/fa6'

const Footer = () => {
  return (
    <div className='flex flex-col gap-10'>
        <div className="flex flex-col items-center pt-24 gap-8 max-container text-center">
            <h1 className='section-subtitle'>try it free for 14 days 🎾</h1>
            <h1 className="section-heading">Anywhere you want. <br />Anytime you want.</h1>
            <p className=" section-paragraph">Get started with two free weeks of unlimited yoga, fitness, and meditation classes. Cancel anytime.</p>
            <button className="btn_primary">Start free trial</button>
        </div>

        <hr className='text-gray-500 px-10'/>

        <div className='max-container grid md:grid-cols-4 gap-32 md:items-start'>
            <div className='text-3xl font-semibold flex gap-3 items-center'>
                <FaBasketball className='text-3xl'/> <span className=' md:hidden'>Fitness</span>
            </div>
            <div>
                <ul className='text-gray-500 flex flex-col text-sm gap-4'>
                    <li>Lifestyle</li>
                    <li>Pricing</li>
                    <li>Class</li>
                    <li>Features</li>
                    <li>Download</li>
                </ul>
            </div>
            <div className='flex flex-col gap-7'>
                <h1 className='font-bold uppercase text-sm'>Contact</h1>
                <p className='text-sm font-light leading-7'>43252 Borer Mountains <br /> Zackerychester <br /> Bahamas <br /> 732-528-4945</p>
            </div>
            <div className='flex flex-col gap-7'>
                <h1 className='font-bold uppercase text-sm'>newsletter</h1>
                <p className='text-sm font-light leading-7'>Subscribe our newsletter to get more free design course and resource.</p>
            </div>

        </div>

        <hr className='text-gray-500 px-10'/>


        <div className='max-container md:text-sm md:font-light md:leading-7 grid grid-rows-2 items-center md:grid-cols-2 py-7  md:gap-x-[200px] lg:gap-x-[600px] '>
            <div className=''>
                <p className=' '>Copyright © 2024 Korede. All rights reserved</p>
            </div>
            <div className='flex gap-7 text-gray-500 justify-center text-2xl pt-4 md:justify-end'>
                <FaFacebook/>
                <FaTwitter/>
                <FaInstagram/>
                <FaDribbble/>
                <FaBehance/>
            </div>

        </div>
    </div>
    
  )
}

export default Footer