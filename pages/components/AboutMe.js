import react from "react";
import Image from "next/image";

const AboutMe = () => {
    return (
        <div className="w-full h-screen text-center bg-gradient-to-b from-[#92657C] to-[#C682BE]">
            <div className="max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center">
                <div className="grid grid-cols-3 pt-4 tracking-widest text-white justify-center items-center">
                    <div className="flex justify-end items-center pr-12">
                        <Image src='/../public/assets/profile.jpeg' alt='/' width='250' height='300' className="rounded" />
                    </div>

                    <div className="text-left mr-8">
                        <h1>ABOUT ME</h1>
                        <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
                            ea commodo consequat.
                        </h3>
                    </div>
                    <Image src='/../public/assets/Education.png' alt='/' width='250' height='300' />
                </div>
            </div>
        </div>
    )
}

export default AboutMe;