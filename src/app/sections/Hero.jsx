"use client";
import React, {Suspense} from 'react'
import {Canvas} from "@react-three/fiber";
import {PerspectiveCamera} from "@react-three/drei";
import HackerRoom from "../components/HackerRoom.jsx";
import CanvasLoader from "../components/CanvasLoader.jsx";
import {useMediaQuery} from "react-responsive";
import {calculateSizes} from "@/app/constants";
import HeroCamera from "../components/HeroCamera.jsx";
import Button from "../components/Button.jsx";
import {SparklesCore} from "../components/ui/sparkles";

const Hero = () => {

    const isSmall = useMediaQuery({maxWidth: 440});
    const isMobile = useMediaQuery({maxWidth: 768});

    const sizes = calculateSizes(isSmall, isMobile);

    return (
        <section className="min-h-screen w-full flex flex-col relative" id="home">
            <SparklesCore
                id="tsparticlesfullpage"
                background="transparent"
                minSize={0.6}
                maxSize={1.4}
                speed={0.2}
                particleDensity={10}
                className="w-full h-full absolute"
                particleColor="#FFFFFF"/>
            <div className="w-full mx-auto flex flex-col sm:mt-36 mt-20 c-space gap-3">
                <p className="sm:text-3xl text-xl font-bold text-white text-center font-generalsans">
                    Adithyan Sathyanarayanan {" "}
                    <span className="waving-hand">👋</span>
                </p>
                <p className="hero_tag text-purple_gradient">Molding Your Vision with My Craft</p>
            </div>

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

            <div className="absolute bottom-7 left-0 right-0 w-full z-10 c-space">

                <a href="#contact" className="w-fit">
                    <Button name="Let's work together" isBeam containerClass="sm:w-fit w-full sm:min-w-96"/>
                </a>
            </div>
        </section>
    )
}
export default Hero
