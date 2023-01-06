import React from "react";
import Image from "next/image";
import Link from "next/link";

const ProjectItems = ( {title, backgroundImg, projectUrl, projectMade} ) => {
    return (
        <div className="relative flex items-center justify-center h-auto w-full shadow-xl shadow-white rounded-xl p-4 group hover:bg-gradient-to-r from-[#C682BE] to-[#F7D8E4]">
            <Image className="rounded-xl group-hover:opacity-10" src={backgroundImg} alt='/'  width='200' height='200'/>
            <div className="hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
                <h3 className="text-2xl text-[#745C97] tracking-wider text-center font-extrabold">{title}</h3>
                <p className="pb-4 pt-2 text-[#745C97] text-center font-semibold">{projectMade}</p>
                <Link href={projectUrl}>
                    <p className="text-center py-3 rounded-lg bg-[#745C97] text-white text-lg cursor-pointer font-bold">Explore More</p>
                </Link>
            </div>
        </div>
    )
}

export default ProjectItems;