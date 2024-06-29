

export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Testimonials", link: "#testimonials" },
  { name: "Contact", link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    title: "I prioritize client collaboration, fostering open communication ",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/b1.svg",
    spareImg: "",
  },
  {
    id: 2,
    title: "I'm very flexible with time zone communications",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "My tech stack",
    description: "I constantly try to improve",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Tech enthusiast with a passion for development.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },

  {
    id: 5,
    title: "Currently building a JS Animation library",
    description: "The Inside Scoop",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Do you want to start a project together?",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const projects = [
  {
    id: 1,
    title: "The Next Generation Payment Methode",
    des: "Explore the wonders of our Payment system with this  method captivating simulation using Next.js.",
    img: "/RP.png",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/fm.svg"],
    link: "https://github.com/king-sws/Robot",
  },
  {
    id: 2,
    title: "Homyz - Rent Your Dream Homes",
    des: "Rent the best homes and hotels anywhere you like, smoothly and easily",
    img: "/HTT.png",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/stream.svg", "/c.svg"],
    link: "https://github.com/king-sws/RESP",
  },
  {
    id: 3,
    title: "Insove - A Medical Website ",
    des: "In order to protect your health and the health of your family, simply and safely seek medical advice",
    img: "/MD.png",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/c.svg"],
    link: "https://github.com/king-sws/Medical",
  },
  {
    id: 4,
    title: "CRM - A website that facilitates your relationship with clients",
    des: "Simplify your Life experience with CRM. Seamlessly connect with client and you.",
    img: "/FI.png",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/three.svg", "/gsap.svg"],
    link: "https://github.com/king-sws/First",
  },
];

export const testimonials = [
  {
    quote:
    "Demonstrates exceptional proficiency in Next.js development, consistently delivering robust and scalable web applications that enhance user experience.",
    name: "Richard Thompson",
    title: "Director of AlphaStream Technologies",
    img: '/avatar-1.png'
  },
  {
    quote:
    "A collaborative team player whose expertise in Next.js contributes significantly to the collective knowledge and success of the development team.",
    name: "Evelyn Anderson",
    title: "chef",
    img: '/avatar-2.png'
  },
  {
    quote:
    "Exhibits a deep understanding of modern web technologies, with a particular talent for leveraging the full capabilities of Next.js to create seamless, high-performance websites.",    name: "John Doe",
    title: "Game Dev",
    img: '/avatar-3.png'
  },
  {
    quote:
    "An innovative problem-solver who addresses complex challenges with Next.js, resulting in elegant, efficient solutions that drive project success.",    name: "Emily Smith",
    title: "Interior Designer",
    img: '/avatar-4.png'
  },
  {
    quote:
    "Shows remarkable attention to detail in Next.js projects, ensuring code quality and maintainability while meeting tight deadlines.",    name: "Michael Johnson",
    title: "Video Editor",
    img: '/avatar-5.png'
  },
];

export const companies = [
  {
    id: 1,
    name: "cloudinary",
    img: "/cloud.svg",
    nameImg: "/cloudName.svg",
  },
  {
    id: 2,
    name: "appwrite",
    img: "/app.svg",
    nameImg: "/appName.svg",
  },
  {
    id: 3,
    name: "HOSTINGER",
    img: "/host.svg",
    nameImg: "/hostName.svg",
  },
  {
    id: 4,
    name: "stream",
    img: "/s.svg",
    nameImg: "/streamName.svg",
  },
  {
    id: 5,
    name: "docker.",
    img: "/dock.svg",
    nameImg: "/dockerName.svg",
  },
];

export const workExperience = [
  {
    id: 1,
    title: "Frontend Engineer Intern",
    desc: "Assisted in the development of a web-based platform using React.js, enhancing interactivity.",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
  {
    id: 2,
    title: "Mobile App Dev - JSM Tech",
    desc: "Designed and developed mobile app for both iOS & Android platforms using React Native.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp2.svg",
  },
  {
    id: 3,
    title: "Freelance App Dev Project",
    desc: "Led the dev of a mobile app for a client, from initial concept to deployment on app stores.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp3.svg",
  },
  {
    id: 4,
    title: "Lead Frontend Developer",
    desc: "Developed and maintained user-facing features using modern frontend technologies.",
    className: "md:col-span-2",
    thumbnail: "/exp4.svg",
  },
];

export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
  },
  {
    id: 2,
    img: "/twit.svg",
  },
  {
    id: 3,
    img: "/link.svg",
  },
];