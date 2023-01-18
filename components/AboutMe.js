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
                        <h3 className="md:w-[600px] mx-10">I am a junior student majoring in Informatics Engineering who is a determined person,
                            a planner, and a goal-getter. A good communicator who could understand and deal with people skillfully.
                            Also well known as The Liable One and The Enthusiast One. Currently, focus on learning UI/UX and Frontend Engineer.
                        </h3>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutMe;