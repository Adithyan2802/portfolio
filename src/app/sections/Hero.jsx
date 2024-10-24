"use client";
import React, {Suspense} from 'react'
import {Canvas} from "@react-three/fiber";
import {PerspectiveCamera} from "@react-three/drei";
import HackerRoom from "../components/HackerRoom.jsx";
import CanvasLoader from "../components/CanvasLoader.jsx";
import {useMediaQuery} from "react-responsive";
import {calculateSizes} from "@/app/constants";
import HeroCamera from "../components/HeroCamera.jsx";
import {SparklesCore} from "../components/ui/sparkles";
import BlurIn from "@/app/components/ui/blur-in";
import ShimmerButton from "@/app/components/ui/shimmer-button";
import {Spotlight} from "@/app/components/ui/spotlight";

const Hero = () => {

    const isSmall = useMediaQuery({maxWidth: 440});
    const isMobile = useMediaQuery({maxWidth: 768});

    const sizes = calculateSizes(isSmall, isMobile);

    return (
        <section className="min-h-screen flex flex-col relative" id="home">
            <Spotlight
                className="-top-40 left-0 md:left-40 md:-top-20"
                fill="#fcba03"
            />
            <Spotlight
                className="-top-40 left-20 md:left-60 md:-top-20"
                fill="blue"
            />
            <Spotlight
                className="-top-40 left-full"
                fill="white"
            />

            <SparklesCore
                id="tsparticlesfullpage"
                background="transparent"
                minSize={0.6}
                maxSize={1.4}
                speed={0.2}
                particleDensity={10}
                className="w-full h-full absolute"
                particleColor="#FFFFFF"/>

            <div className="z-10 c-space w-full flex justify-center mt-8">
                <a href="#contact" className="w-fit">
                    <ShimmerButton className="shadow-2xl h-4/5">
                        <span className="relative flex h-3 w-3">
                            <span className="btn-ping"></span>
                            <span className="btn-ping_dot"></span>
                        </span>
                        <span
                            className="whitespace-pre-wrap text-center text-sm font-medium leading-none tracking-tight text-white dark:from-white dark:to-slate-900/10 lg:text-lg">
                            {"   "}Let's work together
                        </span>
                    </ShimmerButton>
                </a>
            </div>

            <div className="w-full mx-auto flex flex-col mt-4 c-space gap-3">
                <p className="xl:text-4xl md:text-3xl sm:text-2xl text-xl title-name font-bold shadow-inner text-white text-center">
                    Adithyan Sathyanarayanan {" "}
                    <span className="waving-hand">👋</span>
                </p>
                <BlurIn className="hero_tag heading-gradient" word="Molding Your Vision with My Craft"
                        duration={2}/>
            </div>
            <br/>
            <div className="w-full h-full absolute inset-0">
                <Canvas className="w-full h-full">
                    <Suspense fallback={<CanvasLoader/>}>
                        <PerspectiveCamera makeDefault position={[0, 0, 30]}/>
                        <HeroCamera isMobile={isMobile}>
                            <HackerRoom
                                scale={sizes.deskScale}
                                position={sizes.deskPosition}
                                rotation={[0.1, -Math.PI, 0]}/>
                        </HeroCamera>
                        <ambientLight intensity={1}/>
                        <directionalLight position={[10, 10, 10]} intensity={0.5}/>
                    </Suspense>
                </Canvas>
            </div>
        </section>
    )
}
export default Hero
