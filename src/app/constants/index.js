export const navLinks = [
    {
        id: 1,
        name: 'Home',
        href: '#home',
    },
    {
        id: 2,
        name: 'About',
        href: '#about',
    },
    {
        id: 3,
        name: 'Projects',
        href: '#projects',
    },
    {
        id: 4,
        name: 'Contact',
        href: '#contact',
    },
];

export const slugs = [
    "typescript",
    "javascript",
    "java",
    "react",
    "android",
    "html5",
    "css3",
    "nodedotjs",
    "nextdotjs",
    "amazonaws",
    "postgresql",
    "vercel",
    "docker",
    "jira",
    "github",
    "oracle",
    "visualstudiocode",
    "figma",
    "unity",
    "blender",
    "dotnet",
    "mongodb",
    "adobe",
    "python",
    "rstudio",
    "threedotjs"
];

export const features = [
    {
        title: 'Hi, I\'m Adhi ',
        description: 'Innovative problem-solver with a passion for crafting seamless digital experiences. Always pushing boundaries, I merge creativity with cutting-edge technology to deliver elegant solutions that inspire.',
        id: 1,
        className: 'md:col-span-2'
    },
    {title: 'My Strength', id: 2},
    {title: 'Fast dev. Fast site.', id: 3, className: 'md:row-span-2'},
    {title: 'Connect & Collaborate', id: 4, className: 'md:row-span-2'},
    {
        title: 'Creator by passion. Coder by profession.',
        id: 5,
        img: '/assets/notes.svg',
        className: 'md:col-span-2',
        imgClass: 'mx-auto h-auto opacity-60 -translate-y-14 translate-x-10 rotate-30'
    },
    {
        title: 'Capable, Qualified, Experienced.',
        id: 6,
        className: 'flex items-center',
        img: '/assets/University.svg',
        imgClass: 'mx-auto h-auto opacity-80',
    },
    {
        title: 'Flexible Communication',
        description: 'Based in Melbourne, Australia. Open to remote work worldwide.',
        id: 7,
        className: 'md:col-span-2'
    },
];

export const projects = [
    {
        name: 'Podcastr - AI Podcast Platform',
        description: 'Podcastr is a revolutionary Software-as-a-Service platform that transforms the way podcasts are created. With advanced AI-powered features like text-to-multiple-voices functionality, it allows creators to generate diverse voiceovers from a single text input.',
        href: 'https://www.youtube.com/watch?v=zfAb95tJvZQ',
        logo: '/assets/project-logo1.png',
        logoStyle: {
            backgroundColor: '#2A1816',
            border: '0.2px solid #36201D',
            boxShadow: '0px 0px 60px 0px #AA3C304D',
        },
        tags: [
            {
                id: 1,
                name: 'React.js',
                path: '/assets/react.svg',
            },
            {
                id: 2,
                name: 'TailwindCSS',
                path: 'assets/tailwindcss.png',
            },
            {
                id: 3,
                name: 'TypeScript',
                path: '/assets/typescript.png',
            },
            {
                id: 4,
                name: 'Framer Motion',
                path: '/assets/framer.png',
            },
        ],
    },
    {
        name: 'LiveDoc - Real-Time Google Docs Clone',
        description: 'LiveDoc is a powerful collaborative app that elevates the capabilities of real-time document editing. As an enhanced version of Google Docs, It supports millions of collaborators simultaneously, ensuring that every change is captured instantly and accurately.',
        href: 'https://www.youtube.com/watch?v=y5vE8y_f_OM',
        logo: '/assets/project-logo2.png',
        logoStyle: {
            backgroundColor: '#13202F',
            border: '0.2px solid #17293E',
            boxShadow: '0px 0px 60px 0px #2F6DB54D',
        },
        tags: [
            {
                id: 1,
                name: 'React.js',
                path: '/assets/react.svg',
            },
            {
                id: 2,
                name: 'TailwindCSS',
                path: 'assets/tailwindcss.png',
            },
            {
                id: 3,
                name: 'TypeScript',
                path: '/assets/typescript.png',
            },
            {
                id: 4,
                name: 'Framer Motion',
                path: '/assets/framer.png',
            },
        ],
    },
    {
        name: 'CarePulse - Health Management System',
        description: 'An innovative healthcare platform designed to streamline essential medical processes. It simplifies patient registration, appointment scheduling, and medical record management, providing a seamless experience for both healthcare providers and patients.',
        href: 'https://www.youtube.com/watch?v=lEflo_sc82g',
        logo: '/assets/project-logo3.png',
        logoStyle: {
            backgroundColor: '#60f5a1',
            background:
                'linear-gradient(0deg, #60F5A150, #60F5A150), linear-gradient(180deg, rgba(255, 255, 255, 0.9) 0%, rgba(208, 213, 221, 0.8) 100%)',
            border: '0.2px solid rgba(208, 213, 221, 1)',
            boxShadow: '0px 0px 60px 0px rgba(35, 131, 96, 0.3)',
        },
        tags: [
            {
                id: 1,
                name: 'React.js',
                path: '/assets/react.svg',
            },
            {
                id: 2,
                name: 'TailwindCSS',
                path: 'assets/tailwindcss.png',
            },
            {
                id: 3,
                name: 'TypeScript',
                path: '/assets/typescript.png',
            },
            {
                id: 4,
                name: 'Framer Motion',
                path: '/assets/framer.png',
            },
        ],
    },
];

export const calculateSizes = (isSmall, isMobile) => {
    return {
        deskScale: isSmall ? 0.05 : isMobile ? 0.06 : 0.065,
        deskPosition: isMobile ? [0.5, -4.5, 0] : [0.25, -5.5, 0],
    };
};