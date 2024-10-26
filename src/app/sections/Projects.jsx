"use client";

import React from 'react'
import {projects} from "@/app/constants";
import {motion} from "framer-motion";
import {Tilt} from 'react-tilt'

const ProjectCard = (index, name, description, tags, image, href) => {

    return (
        <motion.div>
            <Tilt
                options={{max: 20, scale: 1.1, speed: 4000,}}
                className="bg-white p-5 rounded-2xl sm:w-[360px] w-full opacity-65 hover:opacity-90"
            >
                <div className='relative w-full h-[420px]'></div>
            </Tilt>
        </motion.div>
    )
}

const Projects = () => {
    return (
        <section className="max-w-7xl mx-auto c-space" id="projects">
            <div className="pt-8">
                <p className="hero_tag heading-gradient ">Projects</p>
            </div>
            <div className="my-20 flex flex-wrap gap-10 justify-between">
                {projects.map((project, index) => (
                    <ProjectCard
                        key={`project-${index}`}
                        index={index}
                        {...project}
                    />
                ))}
            </div>
        </section>
    )
}
export default Projects
