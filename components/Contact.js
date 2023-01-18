import React from "react";
import Image from "next/image";
import Link from "next/link";
import { AiOutlineMail } from "react-icons/ai";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { BsFillPersonLinesFill } from "react-icons/bs"
import { HiOutlineChevronDoubleUp } from "react-icons/hi";
import contact from '../public/assets/contact.png'
const Contact = () => {
    return (
        <div id="contact" className="w-full min-h-screen bg-[#39375B] bg-cover">
            <div className="max-w-[1240px] mx-auto px-2 py-16 h-full">
                <h1 className="uppercase text-[30px] md:text-[60px] font-extrabold leading-[100%] text-center text-white">Contact</h1>
                <div className="grid lg:grid-cols-5 gap-8 py-4">

                    <div className="col-span-3 lg:col-span-2 w-full h-full shadow-xl shadow-black rounded-xl p-4 text-white">
                        <div className="lg:p-4 h-full">
                            <div className="flex justify-center items-center">
                                <Image className="rounded-xl hover:scale-105 ease-in duration-300" src={contact} width='300' height='250' alt="/" />
                            </div>
                            <div>
                                <h2 className="py-2 uppercase text-[30px] md:text-[40px] font-bold text-center">Monica Narda Davita</h2>
                                <p className="text-[15px] md:text-[20px] font-semibold underline text-center">Front-end Developer & UI/UX Designer</p>
                                <p className="py-4 text-[15px] md:text-[20px] text-center">Available for freelance or part-time positions. Contact me for the best deal</p>
                            </div>
                            <div>
                                <p className="uppercase pt-8 py-2 text-[15px] md:text-[20px] font-bold text-center">Connect with me</p>
                                <div className="flex items-center justify-between">
                                    <a href='https://www.linkedin.com/in/monica-davita/' target='_blank' rel='noreferrer'>
                                    <div className="rounded-full shadow-lg shadow-black p-3 cursor-pointer hover:scale-105 ease-in duration">
                                        <FaLinkedinIn />
                                    </div>
                                    </a>
                                    <a href="https://github.com/MonicaDavita" target='_blank' rel='noreferrer'>
                                    <div className="rounded-full shadow-lg shadow-black p-3 cursor-pointer hover:scale-105 ease-in duration">
                                        <FaGithub />
                                    </div>
                                    </a>
                                    <Link href='/#contact'>
                                    <div className="rounded-full shadow-lg shadow-black p-3 cursor-pointer hover:scale-105 ease-in duration">
                                        <AiOutlineMail />
                                    </div>
                                    </Link>
                                    <a href="https://wa.me/0895342292555">
                                    <div className="rounded-full shadow-lg shadow-black p-3 cursor-pointer hover:scale-105 ease-in duration">
                                        <BsFillPersonLinesFill />
                                    </div>
                                    </a>
                                    
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-span-3 w-full h-auto shadow-xl shadow-black rounded-xl lg:p-4 ">
                        <div className="p-4">
                            <form
                                action="https://getform.io/f/b099af98-2169-473d-9b77-93e7dd949cc8"
                                method="POST"
                                encType="multipart/form-data"
                            >
                                <div className="grid md:grid-cols-2 gap-4 w-full py-2">
                                    <div className="flex flex-col">
                                        <label className="uppercase text-sm py-2 text-white">Name</label>
                                        <input className="border-2 rounded-lg p-3 flex border-slate-400" type='text' name='name' />
                                    </div>
                                    <div className="flex flex-col">
                                        <label className="uppercase text-sm py-2 text-white">Phone Number</label>
                                        <input className="border-2 rounded-lg p-3 flex border-slate-400" type='text' name='phone' />
                                    </div>
                                </div>
                                <div className="flex flex-col py-2">
                                    <label className="uppercase text-sm py-2 text-white">Email</label>
                                    <input className="border-2 rounded-lg p-3 flex border-slate-400" type='email' name='email' />
                                </div>
                                <div className="flex flex-col py-2">
                                    <label className="uppercase text-sm py-2 text-white">Subject</label>
                                    <input className="border-2 rounded-lg p-3 flex border-slate-400" type='text' name='subject' />
                                </div>
                                <div className="flex flex-col py-2">
                                    <label className="uppercase text-sm py-2 text-white">Message</label>
                                    <textarea className="border-2 rounded-lg p-3 border-slate-400" rows='10' name='message'></textarea>
                                </div>
                                <button className="w-full p-4 text-[#39375B] mt-4 bg-gradient-to-r from-[#C682BE] to-[#F7D8E4] font-bold rounded-xl uppercase hover:-translate-y-1 hover:scale-105 duration-200">Send Me a Message</button>
                            </form>

                        </div>
                    </div>

                </div>
                <div className="flex justify-center py-12">
                    <Link href='/'>
                        <div className="rounded-full shadow-lg shadow-black p-4 cursor-pointer hover:scale-105 ease-in duration bg-gradient-to-b from-[#C682BE] to-[#F7D8E4] animate-bounce">
                            <HiOutlineChevronDoubleUp size={30} className='m-auto text-[#39375B] ' />
                        </div>
                    </Link>
                </div>
            </div>
            <div className="w-full bg-[#C682BE] flex justify-center items-center m-0">
                <h4 className="text-center text-[#39375B] font-semibold py-4">© Copyright Monica Narda Davita 2023</h4>
            </div>
        </div>
    )
}

export default Contact;