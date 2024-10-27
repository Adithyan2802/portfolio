"use client";
import emailjs from '@emailjs/browser';
import React, {useRef, useState} from 'react';

import useAlert from '../hooks/useAlert.js';
import Alert from '../components/Alert.jsx';
import GridPattern from "@/app/components/ui/grid-pattern";
import {ShootingStars} from "@/app/components/ui/shooting-stars";
import {StarsBackground} from "@/app/components/ui/stars-background";
import ShimmerButton from "@/app/components/ui/shimmer-button";

const Contact = () => {
    const formRef = useRef();

    const {alert, showAlert, hideAlert} = useAlert();
    const [loading, setLoading] = useState(false);

    const [form, setForm] = useState({name: '', email: '', message: ''});

    const handleChange = ({target: {name, value}}) => {
        setForm({...form, [name]: value});
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);

        emailjs
            .send(
                process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
                process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
                {
                    from_name: form.name,
                    to_name: 'Adithyan Sathyanarayanan',
                    from_email: form.email,
                    to_email: 'adithyan2802@gmail.com',
                    message: form.message,
                },
                process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
            )
            .then(
                () => {
                    setLoading(false);
                    showAlert({
                        show: true,
                        text: 'Thank you for your message 😃',
                        type: 'success',
                    });

                    setTimeout(() => {
                        hideAlert(false);
                        setForm({
                            name: '',
                            email: '',
                            message: '',
                        });
                    }, [3000]);
                },
                (error) => {
                    setLoading(false);
                    console.error(error);

                    showAlert({
                        show: true,
                        text: "I didn't receive your message 😢",
                        type: 'danger',
                    });
                },
            );
    };

    return (
        <section className="max-w-7xl mx-auto c-space relative" id="contact">
            <div className="py-8">
                <p className="hero_tag heading-gradient ">Contact</p>
            </div>

            {alert.show && <Alert {...alert} />}

            <div className="absolute inset-0 ">
                <GridPattern
                    className="h-full w-full [mask-image:linear-gradient(to_top,white,transparent,transparent)]"
                />
            </div>

            <div className="relative min-h-[80vh] flex items-center justify-center flex-col pb-6">
                <div
                    className='relative contact-background md:w-3/4 p-10 py-20 flex items-center justify-center rounded-3xl border border-white/[0.15] overflow-clip'>
                    <img
                        src={'/assets/spotlight5.png'}
                        alt={'background spotlight'}
                        className='absolute object-center object-cover h-full'
                    />

                    <img
                        src={'/assets/spotlight2.png'}
                        alt={'background spotlight'}
                        className='absolute opacity-50 left-0 bottom-0 rotate-180 object-center object-cover h-full'
                    />

                    <div className="contact-container">
                        <h3 className="head-text heading-gradient">Let&apos;s talk</h3>
                        <p className="text-lg text-white-600 mt-3">
                            Whether you’re looking to build a new website, improve your existing platform, or bring a
                            unique
                            project to
                            life, I’m here to help.
                        </p>

                        <form ref={formRef} onSubmit={handleSubmit} className="mt-12 flex flex-col space-y-7">
                            <label className="space-y-3">
                                <span className="field-label">Full Name</span>
                                <input
                                    type="text"
                                    name="name"
                                    value={form.name}
                                    onChange={handleChange}
                                    required
                                    className="field-input"
                                    placeholder="ex., Tony Stark"
                                />
                            </label>

                            <label className="space-y-3">
                                <span className="field-label">Email address</span>
                                <input
                                    type="email"
                                    name="email"
                                    value={form.email}
                                    onChange={handleChange}
                                    required
                                    className="field-input"
                                    placeholder="ex., starkindustries@gmail.com"
                                />
                            </label>

                            <label className="space-y-3">
                                <span className="field-label">Your message</span>
                                <textarea
                                    name="message"
                                    value={form.message}
                                    onChange={handleChange}
                                    required
                                    rows={5}
                                    className="field-input"
                                    placeholder="Share your thoughts or inquiries..."
                                />
                            </label>

                            <ShimmerButton className="shadow-2xl" type="submit" disabled={loading}>
                                <span
                                    className="whitespace-pre-wrap text-center text-sm font-medium leading-none tracking-tight text-white lg:text-lg">
                                {loading ? 'Sending...' : 'Send Message'}
                                </span>
                                <img src="/assets/arrow-up.png" alt="arrow-up" className="ml-4 field-btn_arrow"/>
                            </ShimmerButton>
                        </form>
                    </div>

                    <ShootingStars/>
                    <StarsBackground starDensity={0.00008}/>
                </div>
            </div>
        </section>
    );
};

export default Contact;