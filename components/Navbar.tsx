

"use client";
import React, { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { BiMenuAltRight } from 'react-icons/bi'
import { AiOutlineClose } from 'react-icons/ai'
import { FaBasketball } from "react-icons/fa6"

const Navbar = () => {
    const currentPath = usePathname();
    const [toggle, setToggle] = useState(true);


    return (
        <nav className='sticky top-0 right-0 bg-[#f2f2f2] z-50 w-full h-fit border-b'>
            <div className=" flex justify-between h-[10vh] items-center  max-container">
                <Link href="/">
                  <p className="flex text-3xl font-bold items-center gap-2 tracking-tight">
                    <FaBasketball /> Fitness
                  </p>
                </Link>

                <div className='text-3xl text-slate-600 cursor-pointer lg:hidden' onClick={() => setToggle(prev => !prev)}>
                    {toggle ? <BiMenuAltRight /> : <AiOutlineClose />}
                </div>

                <div className="hidden lg:flex links gap-10 text-slate-600">
                    <Link href={'/'} className={currentPath === "/" ? "text-orange-500 font-semibold" : "text-slate-600"}>Home</Link>
                    <Link href={'/features'} className={currentPath === "/features" ? "text-orange-500 font-semibold" : "text-slate-600"}>Features</Link>
                    <Link href={'/pricing'} className={currentPath === "/pricing" ? "text-orange-500 font-semibold" : "text-slate-600"}>Pricing</Link>
                    <Link href={'/download'} className={currentPath === "/download" ? "text-orange-500 font-semibold" : "text-slate-600"}>Download</Link>
                    <Link href={'/lifestyle'} className={currentPath === "/lifestyle" ? "text-orange-500 font-semibold" : "text-slate-600"}>Lifestyle</Link>
                    <Link href={'/class'} className={currentPath === "/class" ? "text-orange-500 font-semibold" : "text-slate-600"}>Class</Link>
                </div>
                <div className='hidden lg:block'>
                  <button className='btn_outline '>Get free trial</button>
                </div>
            </div>
            {!toggle && <div className='fixed right-0 z-20 bg-[#f2f2f2] py-10 flex flex-col justify-center items-center lg:hidden w-full'>
                <div className=' flex flex-col gap-6 py-10 overflow-hidden'>
                    <Link href={'/'} className={`${currentPath === "/" ? "text-orange-500 font-semibold px-3 rounded-md" : "text-slate-600"} py-3 text-center`} onClick={() => setToggle(true)}>Home</Link>
                    <Link href={'/features'} className={`${currentPath === "/features" ? "text-orange-500 font-semibold px-3 rounded-md" : "text-slate-600"} py-3 text-center`} onClick={() => setToggle(true)}>Features</Link>
                    <Link href={'/pricing'} className={`${currentPath === "/pricing" ? "text-orange-500 font-semibold px-3 rounded-md" : "text-slate-600"} py-3 text-center`}onClick={() => setToggle(true)} >Pricing</Link>
                    <Link href={'/download'} className={`${currentPath === "/download" ? "text-orange-500 font-semibold px-3  rounded-md" : "text-slate-600"} py-3 text-center`} onClick={() => setToggle(true)}>Download</Link>
                    <Link href={'/lifestyle'} className={`${currentPath === "/lifestyle" ? "text-orange-500 font-semibold px-3 rounded-md" : "text-slate-600"} py-3 text-center`} onClick={() => setToggle(true)}>Lifestyle</Link>
                    <Link href={'/class'} className={`${currentPath === "/class" ? "text-orange-500 font-semibold px-3 rounded-md" : "btn_outline"} py-3 text-center`} onClick={() => setToggle(true)}>Get free trial</Link>
                </div>
            </div>}
        </nav>
    )
}

export default Navbar