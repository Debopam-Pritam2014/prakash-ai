import { BotMessageSquare } from "lucide-react";
import { BatteryCharging } from "lucide-react";
import { Fingerprint } from "lucide-react";
import { ShieldHalf } from "lucide-react";
import { PlugZap } from "lucide-react";
import { GlobeLock } from "lucide-react";

import user1 from "../assets/profile-pictures/user1.jpg";
import user2 from "../assets/profile-pictures/user2.jpg";
import user3 from "../assets/profile-pictures/user3.jpg";
import user4 from "../assets/profile-pictures/user4.jpg";
import user5 from "../assets/profile-pictures/user5.jpg";
import user6 from "../assets/profile-pictures/user6.jpg";

export const navItems = [
    {label: "Home",href:"#"},
    { label: "Features", href: "#feature-section" },
    { label: "Work Process", href: "#work-process" },
    { label: "Why Choose Us", href: "#testinomials" },
    { label: "Contact Us", href: "#contact-us-footer" },
];

export const testimonials = [
    {
        user: "John Doe",
        company: "API Infotech",
        image: user1,
        text: "Prakash AI Private Limited delivered exactly what we needed. Their AI solutions have greatly improved our operations. Highly recommend their services!",
    },
    {
        user: "Jane Smith",
        company: "NET 7 Technology",
        image: user2,
        text: "Working with Prakash.AI was a game-changer for our HR operations. The custom HR Management System they developed has streamlined our processes and improved efficiency across the board. Their dedication to understanding our needs and delivering a tailored solution was impressive. We are very happy with the results!",
    },
    {
        user: "David Johnson",
        company: "Champaran Marrige Bhavan",
        image: user3,
        text: "We are thrilled with the outstanding work done by the development team at prakash.ai private Limited. They delivered our website within the timeline and exceeded our expectations with their professionalism and dedication. Highly recommend their services!",
    },
    {
        user: "Ronee Brown",
        company: "Dr. Anjali",
        image: user4,
        text: "Prakash AI Private Limited greatly improved our patient management with their AI solutions. Their team’s expertise made a real difference in our practice.!",
    },
    {
        user: "Michael Wilson",
        company: "Visionary Creations",
        image: user5,
        text: "I am amazed by the level of professionalism and dedication shown by the team. They were able to exceed our expectations and deliver outstanding results.",
    },
    {
        user: "Emily Davis",
        company: "Synergy Systems",
        image: user6,
        text: "The team went above and beyond to ensure our project was a success. Their expertise and dedication are unmatched. I look forward to working with them again in the future.",
    },
];

export const features = [
    {
        icon: <BotMessageSquare />,
        text: "Artificial Intelligence Solution",
        description:
            "At Prakash.AI we drive AI innovation through cutting-edge research, scalable product development and ready-to-use solutions.",
    },
    {
        icon: <Fingerprint />,
        text: "Comprehensive IT Solution",
        description:
            "We provide Software development, IT Consulting and system Integration.",
    },
    {
        icon: <ShieldHalf />,
        text: "Software Solution",
        description:
            "We create Software Solutions for enterprise, startup and other businesses.",
    },
    {
        icon: <BatteryCharging />,
        text: "Cloud Computing Solution",
        description:
            "We design, develop and deploy cloud solutions for business growth.",
    },
    {
        icon: <PlugZap />,
        text: "Data Analytics Solution",
        description:
            "We offer data analytics services including mining, prediction and intelligence.",
    },
    {
        icon: <GlobeLock />,
        text: "Digital Marketing",
        description:
            "We offer Digital Marketing to boost in business growth in todays digital world.",
    },
];

export const checklistItems = [
    {
        title: "Get Ideas",
        description:
            "Capture client requirements and goals.",
    },
    {
        title: "Sketch Up",
        description:
            "Analyze client requirements and features.",
    },
    {
        title: "Revise",
        description:
            "Refine project scope and finalize plan.",
    },
    {
        title: "Approve",
        description:
            "Secure client approval and payments.",
    },
    {
        title: "Launch",
        description:
            "Develop, test, deploy and maintainance.",
    },
];

export const pricingOptions = [
    {
        title: "Free",
        price: "$0",
        features: [
            "Private board sharing",
            "5 Gb Storage",
            "Web Analytics",
            "Private Mode",
        ],
    },
    {
        title: "Pro",
        price: "$10",
        features: [
            "Private board sharing",
            "10 Gb Storage",
            "Web Analytics (Advance)",
            "Private Mode",
        ],
    },
    {
        title: "Enterprise",
        price: "$200",
        features: [
            "Private board sharing",
            "Unlimited Storage",
            "High Performance Network",
            "Private Mode",
        ],
    },
];

export const resourcesLinks = [
    { name: 'Address', text: "Prakash Bhavan, Jagdeo nagar Ara, Bihar India" },
    { name: "Phone", text: "+917004928235" },
    { name: "Mail", text: "info@prakashai.co.in" },
];

export const platformLinks = [
    { href: "#", text: "Features" },
    { href: "#", text: "Supported Devices" },
    { href: "#", text: "System Requirements" },
    { href: "#", text: "Downloads" },
    { href: "#", text: "Release Notes" },
];

export const communityLinks = [
    { href: "#", text: "Events" },
    { href: "#", text: "Meetups" },
    { href: "#", text: "Conferences" },
    { href: "#", text: "Hackathons" },
];