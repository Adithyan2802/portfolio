"use client";
import React from 'react';
import {BentoGrid, BentoGridItem} from "@/app/components/ui/bento-grid";
import {features} from "@/app/constants";

const About = () => {

    return (
        <section className="max-w-7xl mx-auto c-space " id="about">
            <div className="py-8">
                <p className="hero_tag heading-gradient ">About</p>
            </div>

            <BentoGrid className="pb-16">
                {features.map(
                    (item) => (
                        <BentoGridItem
                            key={item.id}
                            id={item.id}
                            title={item.title}
                            description={item.description}
                            className={item.className}
                            img={item.img}
                            imgClass={item.imgClass}/>
                    )
                )}
            </BentoGrid>
        </section>
    );
};

export default About;