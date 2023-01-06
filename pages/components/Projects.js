import React from "react";
import ProjectItems from "./ProjectItems";

const Projects = () => {
    return (
        <div className="w-full bg-gradient-to-b from-[#C682BE] to-[#F7D8E4]">
            <div className="max-w-[1240px] mx-auto px-2 py-16 text-white">
                <h1 className="uppercase tracking-widest text-[30px] md:text-[60px] font-extrabold leading-[100%] flex justify-center items-center"> PROJECTS </h1>
                <div className="grid md:grid-cols-2 gap-8 pt-4">

                    <ProjectItems title='The Journey' backgroundImg='/../public/assets/journal.png' projectUrl='/journal' projectMade='React JS' />
                    <ProjectItems title='Mamade' backgroundImg='/../public/assets/Mamade.png' projectUrl='/mamade' projectMade='PHP Laravel' />
                    <ProjectItems title='The Seesoon' backgroundImg='/../public/assets/seesoon.png' projectUrl='/seesoon' projectMade='Kotlin' />
                    <ProjectItems title='Sinta Store' backgroundImg='/../public/assets/sinta.png' projectUrl='/sinta' projectMade='Next / React JS' />

                </div>
            </div>
        </div>
    )
}

export default Projects;