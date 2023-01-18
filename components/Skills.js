import React from "react";
import Image from "next/image";
import html from '../public/assets/html.png'
import css from '../public/assets/css.png'
import javascript from '../public/assets/javascript.png'
import react from '../public/assets/react.png'
import tailwind from '../public/assets/tailwind.png'
import figma from '../public/assets/figma.png'
import sql from '../public/assets/sql.png'
import msoffice from '../public/assets/microsoft.png'

const Skills = () => {
    return (
        <div id="skills" className="w-full lg:h-screen p-2 bg-gradient-to-b from-[#F6D6E3] to-[#39375B]">
            <div className="max-w-[1240px] mx-auto flex flex-col justify-center h-full">
                <h1 className="uppercase text-[30px] md:text-[60px] font-extrabold leading-[100%] text-white text-center">Skills</h1>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

                    <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
                        <div className="grid grid-cols-2 gap-4 justify-center items-center">
                            <div className="m-auto">
                                <Image src={html} alt='/' width='64' height='64' />
                            </div>
                            <div className="flex flex-col items-center justify-center">
                                <h3 className="text-xl text-white tracking-wider font-extrabold">HTML</h3>
                            </div>
                        </div>
                    </div>
                    <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
                        <div className="grid grid-cols-2 gap-4 justify-center items-center">
                            <div className="m-auto">
                                <Image src={css} alt='/' width='64' height='64' />
                            </div>
                            <div className="flex flex-col items-center justify-center">
                                <h3 className="text-xl text-white tracking-wider font-extrabold">CSS</h3>
                            </div>
                        </div>
                    </div>
                    <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
                        <div className="grid grid-cols-2 gap-4 justify-center items-center">
                            <div className="m-auto">
                                <Image src={javascript} alt='/' width='64' height='64' />
                            </div>
                            <div className="flex flex-col items-center justify-center">
                                <h3 className="text-xl text-white tracking-wider font-extrabold">JavaScript</h3>
                            </div>
                        </div>
                    </div>
                    <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
                        <div className="grid grid-cols-2 gap-4 justify-center items-center">
                            <div className="m-auto">
                                <Image src={react} alt='/' width='64' height='64' />
                            </div>
                            <div className="flex flex-col items-center justify-center">
                                <h3 className="text-xl text-white tracking-wider font-extrabold">React</h3>
                            </div>
                        </div>
                    </div>
                    <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
                        <div className="grid grid-cols-2 gap-4 justify-center items-center">
                            <div className="m-auto">
                                <Image src={tailwind} alt='/' width='64' height='64' />
                            </div>
                            <div className="flex flex-col items-center justify-center">
                                <h3 className="text-xl text-white tracking-wider font-extrabold">Tailwind</h3>
                            </div>
                        </div>
                    </div>
                    <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
                        <div className="grid grid-cols-2 gap-4 justify-center items-center">
                            <div className="m-auto">
                                <Image src={figma} alt='/' width='32' height='32' />
                            </div>
                            <div className="flex flex-col items-center justify-center">
                                <h3 className="text-xl text-white tracking-wider font-extrabold">Figma</h3>
                            </div>
                        </div>
                    </div>
                    <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
                        <div className="grid grid-cols-2 gap-4 justify-center items-center">
                            <div className="m-auto">
                                <Image src={sql} alt='/' width='64' height='64' />
                            </div>
                            <div className="flex flex-col items-center justify-center">
                                <h3 className="text-xl text-white tracking-wider font-extrabold">SQL</h3>
                            </div>
                        </div>
                    </div>
                    <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
                        <div className="grid grid-cols-2 gap-4 justify-center items-center">
                            <div className="m-auto">
                                <Image src={msoffice} alt='/' width='64' height='64' />
                            </div>
                            <div className="flex flex-col items-center justify-center">
                                <h3 className="text-xl text-white tracking-wider font-extrabold text-center">Microsoft Office</h3>
                            </div>
                        </div>
                    </div>


                </div>
            </div>
        </div>
    )
}

export default Skills;