import react from "react";
import Image from "next/image";

const AboutMe = () => {
    return (
        <div id="about" className="w-full h-screen flex items-center bg-gradient-to-b from-[#92657C] to-[#C682BE]">
            <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-4">
                <div className="col-span-3 text-white">
                    <div className="flex justify-center items-center mt-16">
                        <Image src='/../public/assets/profile.jpeg' alt='/' width='200' height='250' className="rounded hover:scale-105 ease-in duration-300 mr-3" />
                        <Image src='/../public/assets/Education.png' alt='/' width='120' height='170' />
                    </div>

                    <div className="text-center md:my-2 my-4">
                        <h1 className="uppercase text-[30px] md:text-[60px] font-extrabold leading-[100%]">ABOUT ME</h1>
                        <h3 className="md:w-[600px] mx-10">Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
                            ea commodo consequat.
                        </h3>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutMe;