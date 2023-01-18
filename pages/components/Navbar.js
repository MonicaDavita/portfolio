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
    const [navBg, setNavBg] = useState('#D4BEC9')
    const [linkColor, setLinkColor] = useState('#FFFFFF')

    const handleNav = () => {
        setNav(!nav)
    }

    useEffect(() => {
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
        <div style={{ backgroundColor: `${navBg}` }} className={shadow ? 'fixed w-full h-16 shadow-xl z-[100]' : 'fixed w-full h-16 z-[100]'}>
            <div className="flex justify-between items-center w-full h-full p-4 2xl:px-16 text-[#39375B] font-semibold text-[32px]">
                <Link legacyBehavior href='/'>
                    <a>
                        <Image className="py-4 cursor-pointer" src='/../public/assets/iconfix.png' alt='/' width='50' height='20' />
                    </a>
                </Link>
                <div>
                    <ul style={{ color: `{$linkColor}` }} className="hidden md:flex">
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
                            <li className="ml-20 text-sm uppercase hover:border-b">
                                Projects
                            </li>
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
                    <div style={{ color: `{$linkColor}` }} onClick={handleNav} className="md:hidden">
                        <AiOutlineMenu size={25} />
                    </div>
                </div>
            </div>
            <div className={nav ? 'md:hidden fixed left-0 top-0 w-full h-screen bg-black/70' : ''}>
                <div className={nav ? "md:hidden fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#C682BE] p-10 ease-in duration-500" : "fixed left-[-100%] top-0 w-[75%]p-10 ease-in duration-500"}>
                    <div>
                        <div className="flex w-ful items-center justify-between">
                            <Link legacyBehavior href='/'>
                                <a>
                                    <Image src='/../public/assets/iconfix.png' alt='/' width='50' height='20' />

                                </a>
                            </Link>
                            <div onClick={handleNav} className="rounded-full shadow-sm shadow-black p-3 cursor-pointer text-white">
                                <AiOutlineClose />
                            </div>
                        </div>
                        <div className="border-b my-4 border-gray-300">
                            <p className="w-[85%] md:w-[90%] py-4 text-white font-semibold">Be more than awesome together</p>
                        </div>
                    </div>
                    <div className="py-2 flex flex-col text-white">
                        <ul className="uppercase">
                            <Link href='/#homepage'>
                                <li className="py-4 text-sm">Homepage</li>
                            </Link>
                            <Link href='/#about'>
                                <li className="py-4 text-sm" onClick={()=> setNav(false)}>About Me</li>
                            </Link>
                            <Link href='/#projects'>
                                <li className="py-4 text-sm" onClick={()=> setNav(false)}>Projects</li>
                            </Link>
                            <Link href='/#skills'>
                                <li className="py-4 text-sm" onClick={()=> setNav(false)}>Skills</li>
                            </Link>
                            <Link href='/#contact'>
                                <li className="py-4 text-sm" onClick={()=> setNav(false)}>Contact</li>
                            </Link>
                        </ul>
                        <div className="pt-3">
                            <p className="uppercase tracking-widest text-white font-bold text-[16px]">Let&apos;s Connect</p>
                            <div className="flex items-center justify-between my-4 w-full sm:w-[80%]">
                                <a href="https://www.linkedin.com/in/monica-davita/" target='_blank' rel='noreferrer'>
                                <div className="rounded-full shadow-sm shadow-black p-3 cursor-pointer hover:scale-105 ease-in duration">
                                    <FaLinkedinIn />
                                </div>
                                </a>
                                <a href="https://github.com/MonicaDavita" target='_blank' rel='noreferrer'>
                                <div className="rounded-full shadow-sm shadow-black p-3 cursor-pointer hover:scale-105 ease-in duration">
                                    <FaGithub />
                                </div>
                                </a>
                                <Link href='/#contact'>
                                <div className="rounded-full shadow-sm shadow-black p-3 cursor-pointer hover:scale-105 ease-in duration">
                                    <AiOutlineMail />
                                </div>
                                </Link>
                                <a href="wa.me/+62895342292555">
                                <div className="rounded-full shadow-sm shadow-black p-3 cursor-pointer hover:scale-105 ease-in duration">
                                    <BsFillPersonLinesFill />
                                </div>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Navbar;