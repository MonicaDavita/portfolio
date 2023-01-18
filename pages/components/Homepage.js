import React from "react";
import { HiOutlineChevronDown } from "react-icons/hi";
import Image from "next/image";
import Link from "next/link";
const Homepage = () => {
    return (
        <div id="homepage" className="w-full h-screen text-center bg-hero bg-cover">
            <div className="max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center">
                <div className="pt-4 tracking-widest text-white">
                    <p className="py-4 flex justify-center text-[16px] md:text-[24px] font-semibold lg:mt-24">
                        <em className="bg-gradient-to-r text-gradient from-[#92657C] to-[#C682BE] hover:scale-105 ease-in duration-300">Thrived</em>&nbsp;Frontend Engineer
                    </p>
                    <div className="bg-gradient-to-b text-gradient from-[#745C97] to-[#F5B0CB] ">
                        <h1 className="uppercase text-[50px] md:text-[100px] font-extrabold leading-[100%]">Monica</h1>
                        <h1 className="uppercase text-[50px] md:text-[100px] font-extrabold leading-[100%]">Narda</h1>
                        <h1 className="uppercase text-[50px] md:text-[100px] font-extrabold leading-[100%]">Davita</h1>
                    </div>
                    <div className="grid grid-rows-2 justify-center text-center pt-4">
                        <Link href="#about">
                            <p className="flex justify-center text-[18px] md:text-[24px] font-thin italic hover:border-b">Get Started</p>
                            <HiOutlineChevronDown className="ml-10 md:ml-12 animate-bounce w-[36px] h-[36px]" />
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Homepage;