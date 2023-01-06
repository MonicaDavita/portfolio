import React from "react";
import Image from "next/image";
const Skills = () => {
    return (
        <div className="w-full lg:h-screen p-2 bg-gradient-to-b from-[#F6D6E3] to-[#39375B]">
            <div className="max-w-[1240px] mx-auro flex flex-col justify-center h-full">
                <h1 className="uppercase text-[30px] md:text-[60px] font-extrabold leading-[100%] text-white text-center">Skills</h1>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

                    <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
                        <div className="grid grid-cols-2 gap-4 justify-center items-center">
                            <div className="m-auto">
                                <Image src='/../public/assets/html.png' alt='/' width='64' height='64' />
                            </div>
                            <div className="flex flex-col items-center justify-center">
                                <h3 className="text-xl text-white tracking-wider font-extrabold">HTML</h3>
                            </div>
                        </div>
                    </div>
                    <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
                        <div className="grid grid-cols-2 gap-4 justify-center items-center">
                            <div className="m-auto">
                                <Image src='/../public/assets/css.png' alt='/' width='64' height='64' />
                            </div>
                            <div className="flex flex-col items-center justify-center">
                                <h3 className="text-xl text-white tracking-wider font-extrabold">CSS</h3>
                            </div>
                        </div>
                    </div>
                    <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
                        <div className="grid grid-cols-2 gap-4 justify-center items-center">
                            <div className="m-auto">
                                <Image src='/../public/assets/javascript.png' alt='/' width='64' height='64' />
                            </div>
                            <div className="flex flex-col items-center justify-center">
                                <h3 className="text-xl text-white tracking-wider font-extrabold">JavaScript</h3>
                            </div>
                        </div>
                    </div>
                    <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
                        <div className="grid grid-cols-2 gap-4 justify-center items-center">
                            <div className="m-auto">
                                <Image src='/../public/assets/react.png' alt='/' width='64' height='64' />
                            </div>
                            <div className="flex flex-col items-center justify-center">
                                <h3 className="text-xl text-white tracking-wider font-extrabold">React</h3>
                            </div>
                        </div>
                    </div>
                    <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
                        <div className="grid grid-cols-2 gap-4 justify-center items-center">
                            <div className="m-auto">
                                <Image src='/../public/assets/tailwind.png' alt='/' width='64' height='64' />
                            </div>
                            <div className="flex flex-col items-center justify-center">
                                <h3 className="text-xl text-white tracking-wider font-extrabold">Tailwind</h3>
                            </div>
                        </div>
                    </div>
                    <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
                        <div className="grid grid-cols-2 gap-4 justify-center items-center">
                            <div className="m-auto">
                                <Image src='/../public/assets/figma.png' alt='/' width='64' height='64' />
                            </div>
                            <div className="flex flex-col items-center justify-center">
                                <h3 className="text-xl text-white tracking-wider font-extrabold">Figma</h3>
                            </div>
                        </div>
                    </div>
                    <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
                        <div className="grid grid-cols-2 gap-4 justify-center items-center">
                            <div className="m-auto">
                                <Image src='/../public/assets/sql.png' alt='/' width='64' height='64' />
                            </div>
                            <div className="flex flex-col items-center justify-center">
                                <h3 className="text-xl text-white tracking-wider font-extrabold">SQL</h3>
                            </div>
                        </div>
                    </div>
                    <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
                        <div className="grid grid-cols-2 gap-4 justify-center items-center">
                            <div className="m-auto">
                                <Image src='/../public/assets/microsoft.png' alt='/' width='64' height='64' />
                            </div>
                            <div className="flex flex-col items-center justify-center">
                                <h3 className="text-xl text-white tracking-wider font-extrabold">Microsoft Office</h3>
                            </div>
                        </div>
                    </div>


                </div>
            </div>
        </div>
    )
}

export default Skills;