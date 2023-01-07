import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { AiOutlineMenu, AiOutlineClose, AiOutlineMail } from "react-icons/ai";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { BsFillPersonLinesFill, BsWindowSidebar } from "react-icons/bs"
import { RiArrowDropDownLine } from "react-icons/ri";
const Navbar = () => {
    const [nav, setNav] = useState(false)
    const [shadow, setShadow] = useState(false)
    const handleNav = () => {
        setNav(!nav)
    }

    useEffect( () => {
            const handleShadow = () => {
                if (window.scrollY >= 90) {
                    setShadow(true)
                } else {
                    setShadow(false)
                }
            }
            window.addEventListener('scroll', handleShadow)
        }, []
    );

    return (
        <div className={shadow ? 'fixed w-full h-20 shadow-xl z-[100] bg-[#F6D6E3]' : 'fixed w-full h-20 z-[100]' }>
            <div className="flex justify-between items-center w-full h-full px-2 2xl:px-16 text-[#39375B] font-semibold text-[32px]">
                <Image className="py-4" src='/../public/assets/iconfix.png' alt='/' width='50' height='20' />
                <div>
                    <ul className="hidden md:flex">
                        <Link href='#homepage'>
                            <li className="ml-20 text-sm uppercase hover:border-b">
                                Homepage
                            </li>
                        </Link>
                        <Link href='#about'>
                            <li className="ml-20 text-sm uppercase hover:border-b">
                                About Me
                            </li>
                        </Link>
                        <Link href='#projects'>
                            <div className="flex justify-between">
                                <li className="ml-20 text-sm uppercase hover:border-b">
                                    Projects
                                </li>
                                <RiArrowDropDownLine className="pb-2" />
                            </div>
                        </Link>
                        <Link href='#skills'>
                            <li className="ml-20 text-sm uppercase hover:border-b">
                                Skills
                            </li>
                        </Link>
                        <Link href='#contact'>
                            <li className="ml-20 text-sm uppercase hover:border-b">
                                Contact
                            </li>
                        </Link>
                    </ul>
                    <div onClick={handleNav} className="md:hidden">
                        <AiOutlineMenu size={25} />
                    </div>
                </div>
            </div>
            <div className={!nav ? 'md:hidden fixed left-0 top-0 w-full h-screen bg-black/70' : ''}>
                <div className={!nav ? "md:hidden fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#C682BE] p-10 ease-in duration-500" : "fixed left-[-100%] top-0 w-[75%]p-10 ease-in duration-500"}>
                    <div>
                        <div className="flex w-ful items-center justify-between">
                            <Image src='/../public/assets/iconfix.png' alt='/' width='50' height='20' />
                            <div onClick={handleNav} className="rounded-full shadow-lg shadow-white p-3 cursor-pointer">
                                <AiOutlineClose />
                            </div>
                        </div>
                        <div className="border-b my-4 border-gray-300">
                            <p className="w-[85%] md:w-[90%] py-4">Be more than awesome together</p>
                        </div>
                    </div>
                    <div className="py-4 flex flex-col">
                        <ul className="uppercase">
                            <Link href='/#homepage'>
                                <li className="py-4 text-sm">Homepage</li>
                            </Link>
                            <Link href='/#about'>
                                <li className="py-4 text-sm">About Me</li>
                            </Link>
                            <Link href='/#projects'>
                                <li className="py-4 text-sm">Projects</li>
                            </Link>
                            <Link href='/#skills'>
                                <li className="py-4 text-sm">Skills</li>
                            </Link>
                            <Link href='/#contact'>
                                <li className="py-4 text-sm">Contact</li>
                            </Link>
                        </ul>
                        <div className="pt-40">
                            <p className="uppercase tracking-widest text-white font-bold text-[24px]">Let's Connect</p>
                            <div className="flex items-center justify-between my-4 w-full sm:w-[80%]">
                                <div className="rounded-full shadow-lg shadow-white p-3 cursor-pointer hover:scale-105 ease-in duration">
                                    <FaLinkedinIn />
                                </div>
                                <div className="rounded-full shadow-lg shadow-white p-3 cursor-pointer hover:scale-105 ease-in duration">
                                    <FaGithub />
                                </div>
                                <div className="rounded-full shadow-lg shadow-white p-3 cursor-pointer hover:scale-105 ease-in duration">
                                    <AiOutlineMail />
                                </div>
                                <div className="rounded-full shadow-lg shadow-white p-3 cursor-pointer hover:scale-105 ease-in duration">
                                    <BsFillPersonLinesFill />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Navbar;