"use client";

import React from 'react'
import {projects} from "@/app/constants";
import {motion} from "framer-motion";
import {Tilt} from 'react-tilt'
import DotPattern from "@/app/components/ui/dot-pattern"
import ShimmerButton from "@/app/components/ui/shimmer-button";
import Partition from "@/app/sections/Partition";
import {Compare} from "@/app/components/ui/compare";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const ProjectCard = ({index, name, subtitle, description, logo, image, href,}) => {

    return (
        <div className='border-white/[0.1] border p-10 pb-14 project-box-gradient bg-opacity-80 rounded-3xl'>
            <motion.div>
                <Tilt
                    options={{max: 20, scale: 1.04, speed: 4000,}}
                    className="bg-white p-5 rounded-2xl sm:w-[360px] opacity-65 hover:opacity-90"
                >
                    <div className='relative items-center flex flex-col justify-center'>

                        <div className='absolute -top-6 flex justify-end m-3 w-full gap-1'>
                            <div
                                onClick={() => window.open(href, "_blank")}
                                className='bg-black w-10 h-10 rounded-full flex justify-center items-center cursor-pointer hover:opacity-80'
                            >
                                <img
                                    src='/assets/github.svg'
                                    alt='source code'
                                    className='w-1/2 h-1/2 object-contain'
                                />
                            </div>

                            {index === 1 && (
                                <div
                                    onClick={() => window.open('https://sage-wallet.vercel.app', "_blank")}
                                    className='bg-black w-10 h-10 rounded-full flex justify-center items-center cursor-pointer hover:opacity-80'
                                >
                                    <img
                                        src='/assets/live.svg'
                                        alt='source code'
                                        className='w-1/2 h-1/2 object-contain'
                                    />
                                </div>
                            )}
                        </div>

                        <img
                            src={image}
                            alt={image}
                            className='relative object-center object-cover mt-9'
                        />
                        {index === 0 && (
                            <Compare
                                firstImage="/assets/gg-left.png"
                                secondImage="/assets/gg-right.png"
                                firstImageClassName="object-cover w-full h-full"
                                secondImageClassname="object-cover"
                                className="mt-4 h-[200px] w-full"
                                slideMode="hover"
                            />
                        )}
                    </div>


                </Tilt>
            </motion.div>

            <div className='my-6 flex justify-between items-center'>
                <h3 className='font-bold heading-gradient text-2xl '>{name}</h3>

                <ShimmerButton className='shadow-2xl'
                               shimmerColor='rgba(0,0,0,0)'
                               background='transparent'>
                    <span
                        className="text-center text-sm font-medium leading-none tracking-tight text-white">
                        {subtitle}
                    </span>
                </ShimmerButton>
            </div>

            <Partition/>

            <div className='max-w-[360px] text-overflow pt-8 text-white text-opacity-75'>
                {description}
            </div>
        </div>
    )
}

const Projects = () => {
    return (
        <section className="relative max-w-7xl mx-auto c-space" id="projects">
            <div className="pt-8">
                <p className="hero_tag heading-gradient ">Projects</p>
            </div>

            <div className="my-10 md:my-20 flex flex-wrap gap-10 justify-around">
                {projects.map((project, index) => (
                    <ProjectCard
                        key={`project-${index}`}
                        index={index}
                        {...project}
                    />
                ))}
            </div>

            <DotPattern
                className='-z-10 [mask-image:radial-gradient(700px_circle_at_center,white,transparent)]'
            />
        </section>
    )
}
export default Projects
