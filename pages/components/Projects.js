import React from "react";
import ProjectItems from "./ProjectItems";

const Projects = () => {
    return (
        <div id="projects" className="w-full bg-gradient-to-b from-[#C682BE] to-[#F7D8E4]">
            <div className="max-w-[1240px] mx-auto px-2 py-16 text-white">
                <h1 className="uppercase tracking-widest text-[30px] md:text-[60px] font-extrabold leading-[100%] flex justify-center items-center mt-8"> PROJECTS </h1>
                <div className="grid md:grid-cols-2 gap-8 pt-4">

                    <ProjectItems title='The Jour' backgroundImg='/../public/assets/the-jour.jpeg' projectUrl='/the-jour' projectMade='ReactJS with NextJS' projecStatus='Read More' />
                    <ProjectItems title='Ala Home' backgroundImg='/../public/assets/alahome.png' projectUrl='/mamade' projectMade='Kotlin' projecStatus='Coming Soon' />
                    <ProjectItems title='The Seesoon' backgroundImg='/../public/assets/seesoon.png' projectUrl='/seesoon' projectMade='ReactJS with Laravel' projecStatus='Coming Soon' />
                    <ProjectItems title='Sinta Store' backgroundImg='/../public/assets/sinta.png' projectUrl='/sinta' projectMade='Group Project - Next / React JS' projecStatus='Github' />

                </div>
            </div>
        </div>
    )
}

export default Projects;