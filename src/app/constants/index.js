export const navLinks = [
  {
    name: "Home",
    link: "#home",
  },
  {
    name: "About",
    link: "#about",
  },
  {
    name: "Projects",
    link: "#projects",
  },
  {
    name: "Contact",
    link: "#contact",
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
  "threedotjs",
];

export const features = [
  {
    title: "Hey, I'm Adhi ",
    description:
      "Innovative problem-solver with a passion for crafting seamless digital experiences. Always pushing boundaries, I merge creativity with cutting-edge technology to deliver elegant solutions that inspire.",
    id: 1,
    className: "md:col-span-2",
  },
  { title: "My Strength", id: 2 },
  { title: "Fast dev. Fast site.", id: 3, className: "md:row-span-2" },
  { title: "Connect & Collaborate", id: 4, className: "md:row-span-2" },
  {
    title: "Coder by profession. Creator by passion.",
    id: 5,
    img: "/assets/notes.svg",
    className: "md:col-span-2",
    imgClass:
      "mx-auto h-auto opacity-60 -translate-y-14 translate-x-10 rotate-30",
  },
  {
    title: "Capable, Qualified, Experienced.",
    id: 6,
    className: "flex items-center",
    img: "/assets/University.svg",
    imgClass: "mx-auto h-auto opacity-80",
  },
  {
    title: "Flexible Communication",
    description:
      "Based in Melbourne, Australia. Open to remote work worldwide.",
    id: 7,
    className: "md:col-span-2",
  },
];

export const projects = [
  {
    name: "Galactic Guardians",
    subtitle: "3D Game",
    description:
      "Galactic Guardians is an immersive 3D experience, seamlessly powered by Rokoko’s state-of-the-art motion capture gloves for intuitive, real-time interaction. Designed for stunning engagement on large displays, it features meticulously crafted 3D models built in Blender, all brought to life in Unity through seamless Rokoko Studio integration.",
    image: "/assets/galactic-guardians.svg",
    href: "https://github.com/Adithyan2802/Galactic-Guardians",
  },
  {
    name: "Sage Wallet",
    subtitle: "AI Cloud App",
    description:
      "Sage Wallet is a cutting-edge expense tracker and budgeting app powered by AI to deliver smart financial insights. With secure login and a beautifully interactive dashboard, Sage Wallet offers seamless cloud-based expense management, putting control of your finances at your fingertips.",
    href: "https://github.com/Adithyan2802/Sage-Wallet",
    image: "/assets/sage-wallet.svg",
  },
  {
    name: "Clima Trackr",
    subtitle: "Weather Website",
    description:
      "Clima Trackr delivers real-time weather insights with a sleek, intuitive interface. Simply enter your city, and Clima Trackr instantly fetches current weather data using advanced API technology. Featuring a beautifully crafted page and an elegant grid layout, it’s designed to captivate while making weather details effortlessly clear.",
    href: "https://github.com/Adithyan2802/Clima-Trackr",
    image: "/assets/clima-trackr.svg",
  },
];

export const calculateSizes = (isSmall, isMobile) => {
  return {
    deskScale: isSmall ? 0.05 : isMobile ? 0.06 : 0.065,
    deskPosition: isMobile ? [0.5, -4.5, 0] : [0.25, -5.5, 0],
  };
};
