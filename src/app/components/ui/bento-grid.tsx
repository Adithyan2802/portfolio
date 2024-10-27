import {cn} from "@/lib/utils";
import {GlobeDemo} from "@/app/components/ui/gridglobe";
import IconCloud from "@/app/components/ui/icon-cloud";
import {slugs} from "@/app/constants";
import Confetti, {ConfettiRef} from "@/app/components/ui/confetti";
import React, {useRef, useState} from "react";
import Meteors from "@/app/components/ui/meteors"
import Ripple from "@/app/components/ui/ripple"
import {AnimatedSubscribeButton} from "@/app/components/ui/animated-subscribe-button"
import {CheckIcon, ChevronRightIcon} from "lucide-react"
import PulsatingButton from "@/app/components/ui/pulsating-button";

export const BentoGrid = ({
                              className,
                              children,
                          }: {
    className?: string;
    children?: React.ReactNode;
}) => {
    return (
        <div
            className={cn(
                "grid md:auto-rows-[18rem] grid-cols-1 md:grid-cols-4 gap-4 max-w-7xl mx-auto ",
                className
            )}
        >
            {children}
        </div>
    );
};

export const BentoGridItem = ({
                                  className,
                                  title,
                                  description,
                                  id,
                                  img,
                                  imgClass,
                              }: {
    className?: string;
    title?: string | React.ReactNode;
    description?: string;
    id?: number;
    img?: string;
    imgClass?: string;
}) => {
    const confettiRef = useRef<ConfettiRef>(null);

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [hasCopied, setHasCopied] = useState(false);

    const handleCopy = () => {
        navigator.clipboard.writeText('adithyan2802@gmail.com');
        setHasCopied(true);

        setTimeout(() => {
            setHasCopied(false);
        }, 2000);
    };

    const openResume = () => {
        window.open('/assets/resume.pdf', '_blank');
    };

    return (

        <div
            className={cn(
                "row-span-1 relative overflow-hidden rounded-xl group/bento hover:shadow-xl transition duration-200 dark:shadow-none p-4 dark:bg-black dark:bg-opacity-5 dark:border-white/[0.1] border border-transparent justify-between flex flex-col space-y-4 min-h-[400px] md:min-h-28",
                className
            )}
        >

            {id === 2 && (
                <div className='translate-y-8 md:translate-y-0 scale-110 md:scale-100'>
                    <IconCloud iconSlugs={slugs}/>
                </div>)}

            {id === 3 && <Meteors number={30}/>}

            {id === 6 && (
                <Confetti
                    ref={confettiRef}
                    className="absolute left-0 top-0 z-0 size-full"
                    onMouseEnter={() => {
                        confettiRef.current?.fire({});
                    }}
                />)}

            {id === 6 && (
                <div className="relative w-11/12 h-11/12 flex flex-col justify-center items-center">
                    {img && (
                        <img
                            src={img}
                            alt={img}
                            className={cn(imgClass, 'relative object-center object-cover translate-y-4 transition-[transform,opacity] duration-500 ease-in-out group-hover/bento:-translate-y-0 group-hover/bento:opacity-100')}
                        />
                    )}
                </div>
            )}

            <div className="group-hover/bento:translate-x-2 transition duration-500 ease-in-out">
                <div className="text-2xl font-semibold heading-gradient mb-1 mt-2">
                    {title}
                </div>
                <div className="font-normal opacity-60">
                    {description}
                </div>
            </div>

            {id === 5 && (
                <div className="w-11/12 h-11/12 flex flex-col justify-center items-center">
                    {img && (
                        <img
                            src={img}
                            alt={img}
                            className={cn(imgClass, 'scale-125 md:scale-100 relative object-center object-cover transition-transform duration-700 ease-in-out group-hover/bento:rotate-6 md:group-hover/bento:translate-x-20 group-hover/bento:translate-x-24')}
                        />
                    )}
                    <img
                        src='/assets/videocam.svg'
                        alt='/assets/videocam.svg'
                        className='absolute left-0 md:left-2 bottom-0 opacity-60 object-center object-cover h-1/3 md:h-1/2 mx-auto transition-transform duration-700 ease-in-out group-hover/bento:-translate-y-2/3 md:group-hover/bento:-translate-y-1/2'
                    />
                    <img
                        src='/assets/cam.svg'
                        alt='/assets/cam.svg'
                        className='absolute left-2/3 md:left-3/4 top-16 opacity-60 object-center object-cover h-1/6 md:h-1/4 mx-auto transition-position duration-700 ease-in-out group-hover/bento:top-1/3 md:group-hover/bento:top-2/3'
                    />
                </div>
            )}
            {id === 7 && <GlobeDemo/>}

            {id === 3 && (
                <div>
                    <img
                        src='/assets/flash.svg'
                        alt='/assets/flash.svg'
                        className='absolute overflow-auto -top-4 md:top-20 w-48 left-0 right-0 mx-auto transition-transform duration-700 ease-in-out group-hover/bento:scale-150'
                    />
                </div>
            )}

            {id === 4 && (
                <div>
                    <Ripple/>
                    <img
                        src='/assets/handshake.svg'
                        alt='/assets/handshake.svg'
                        className='object-center object-cover mx-auto scale-50 transition-transform duration-700 ease-in-out group-hover/bento:scale-75 translate-y-6 md:translate-y-2'
                    />
                </div>)}

            {id === 4 && (
                <div className='mx-auto flex flex-col justify-center items-center'>
                    <PulsatingButton onClick={openResume} className='-translate-y-8'>View my
                        Resume</PulsatingButton>

                    <div onClick={handleCopy}>
                        <AnimatedSubscribeButton
                            buttonColor="#000000"
                            buttonTextColor="#ffffff"
                            subscribeStatus={false}
                            initialText={
                                <span className="group inline-flex items-center">
                                    Copy My Email{" "}
                                    <ChevronRightIcon
                                        className="ml-1 size-4 transition-transform duration-300 group-hover:translate-x-1"/>
                                </span>
                            }
                            changeText={
                                <span className="group inline-flex items-center">
                                     <CheckIcon className="mr-2 size-4"/>
                                     Copied{" "}
                                </span>
                            }
                        />
                    </div>
                </div>)}

            <img
                src={'/assets/spotlight2.png'}
                alt={'background spotlight'}
                className='absolute object-center object-cover -top-4 right-0 h-full'
            />

            <img
                src={'/assets/spotlight5.png'}
                alt={'background spotlight'}
                className='absolute object-center object-cover bottom-0 left-0 rotate-180 h-full'
            />

        </div>
    );
};
