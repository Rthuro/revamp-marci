'use client'
import { Calendar, Phone, MapPin } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

const socials = [
    {
        icon: "https://api.iconify.design/logos:facebook.svg",
        href: "https://www.facebook.com/MarciHomes/",
        name: "Facebook",
    },
    {
        icon: "https://api.iconify.design/skill-icons:instagram.svg",
        href: "https://www.instagram.com/marcimetzger_theridge/",
        name: "Instagram",
    },
    {
        icon: "https://api.iconify.design/logos:linkedin-icon.svg",
        href: "https://www.linkedin.com/in/marci-metzger-30642496/",
        name: "LinkedIn",
    },
    {
        icon: "https://api.iconify.design/thesvg-color:yelp.svg",
        href: "https://www.yelp.com/biz/xr3yQN_m2SgO0R_7S6p62w",
        name: "Yelp",
    },
]

const iconClass = "mt-0.5 text-primarylight"

const contacts = [
    {
        icon: <Calendar size={16} className={iconClass} />,
        title: "Office Hours",
        content: "Monday - Sunday: 8:00 am - 7:00 pm",
    },
    {
        icon: <Phone size={16} className={iconClass} />,
        title: "Phone",
        content: "(206) 919-6886",
        href: "tel:2069196886",
    },
    {
        icon: <MapPin size={16} className={iconClass} />,
        title: "Location",
        content: "3190 HW-160, Suite F, Pahrump, Nevada 89048",
        href: "https://maps.google.com/?q=3190+HW-160,+Suite+F,+Pahrump,+Nevada+89048"
    }
]

const accentColor = "#C07A55"
const inputClass = "w-full border-b border-primarylight/30 bg-transparent py-3 text-sm text-primary outline-none placeholder:text-primarylight/40 focus:border-primary transition-colors"

export function Contact() {
    return (
        <section
            className="w-fit max-w-[95%] mx-auto py-6 md:py-12 px-6 md:px-12 rounded-2xl md:rounded-4xl shadow-xl"
            style={{ backgroundColor: "#FFFBF6" }}
        >
            <motion.div 
             initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            className="max-w-6xl mx-auto flex flex-col md:flex-row gap-6 md:gap-16">
                {/* Left Column — Info */}
                <div className="flex flex-col justify-between gap-8 md:w-1/2">
                    <div className="flex flex-col gap-2">
                        <h2 className="text-4xl font-cormorant font-medium italic text-primary">
                            Get in touch
                        </h2>
                        <p className="text-primarylight text-sm md:text-base">
                            We&apos;re here to help you find the right property.
                        </p>
                    </div>

                    <div className="flex-col gap-4 hidden md:flex">
                        {/* Contact Details */}
                        {/* <div className="flex flex-col gap-5">
                            {contacts.map( (c , idx) => (
                                <div key={idx} className="flex items-start gap-3">
                                    <div className="p-2 bg-secondary rounded-full">
                                        {c.icon}
                                    </div>
                                    <div className="flex flex-col">
                                        <p className="text-sm font-medium text-primary">{c.title}</p>
                                        {c.href ? (
                                            <Link href={c.href} target="_blank" className="text-sm hover:underline font-sans" style={{ color: accentColor }}>
                                                {c.content}
                                            </Link>
                                        ) : (
                                            <p className="text-sm font-sans" style={{ color: accentColor }}>
                                                {c.content}
                                            </p>
                                        )}
                                    </div>
                                </div>
                            ))}
                        </div> */}
                        {/* Socials */}
                        <div className="flex flex-col gap-2">
                            <p className=" font-cormorant text-primary text-xl font-medium">
                                Connect with our socials
                            </p>
                            <div className="flex items-center gap-3 flex-wrap">
                                {socials.map((social) => (
                                    <Link
                                        key={social.name}
                                        href={social.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-2 text-sm text-primarylight bg-white rounded-lg py-3 px-4 hover:text-primary transition-colors shadow-xs"
                                    >
                                        <Image
                                            src={social.icon}
                                            alt={social.name}
                                            width={20}
                                            height={20}
                                            unoptimized
                                        />
                                        <span>{social.name}</span>
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>




                {/* Right Column — Form */}
                <div
                    className="md:w-1/2 rounded-2xl p-6 md:p-10 flex flex-col gap-5"
                    style={{ backgroundColor: "#F7F2EC" }}
                >
                    <div className="flex flex-col gap-1">
                        <label htmlFor="contact-name" className="text-sm font-medium text-primary">
                            Name
                        </label>
                        <input
                            id="contact-name"
                            type="text"
                            className={inputClass}
                            placeholder="Your name"
                        />
                    </div>

                    <div className="flex flex-col gap-1">
                        <label htmlFor="contact-email" className="text-sm font-medium text-primary">
                            Email
                        </label>
                        <input
                            id="contact-email"
                            type="email"
                            className={inputClass}
                            placeholder="Your email"
                        />
                    </div>

                    <div className="flex flex-col gap-1">
                        <label htmlFor="contact-message" className="text-sm font-medium text-primary">
                            Message
                        </label>
                        <textarea
                            id="contact-message"
                            rows={5}
                            className={`${inputClass} resize-none`}
                            placeholder="How can we help?"
                        />
                    </div>

                    <button
                        type="button"
                        className="w-full py-4 rounded-lg bg-primary text-secondary text-sm font-medium font-epilogue hover:bg-primary/90 transition-colors mt-2"
                    >
                        Send Email
                    </button>

                    <p className="text-xs text-primarylight/60 leading-relaxed">
                        This site is protected by reCAPTCHA and the Google{" "}
                        <Link href="https://policies.google.com/privacy" target="_blank" className="underline">
                            Privacy Policy
                        </Link>{" "}
                        and{" "}
                        <Link href="https://policies.google.com/terms" target="_blank" className="underline">
                            Terms of Service
                        </Link>{" "}
                        apply.
                    </p>
                </div>

                <div className="flex-col gap-4 flex md:hidden">
                        {/* Contact Details */}
                        {/* <div className="flex flex-col gap-5">
                            {contacts.map( (c , idx) => (
                                <div key={idx} className="flex items-start gap-3">
                                    <div className="p-2 bg-secondary rounded-full">
                                        {c.icon}
                                    </div>
                                    <div className="flex flex-col">
                                        <p className="text-sm font-medium text-primary">{c.title}</p>
                                        {c.href ? (
                                            <Link href={c.href} target="_blank" className="text-sm hover:underline font-sans" style={{ color: accentColor }}>
                                                {c.content}
                                            </Link>
                                        ) : (
                                            <p className="text-sm font-sans" style={{ color: accentColor }}>
                                                {c.content}
                                            </p>
                                        )}
                                    </div>
                                </div>
                            ))}
                        </div> */}
                        {/* Socials */}
                        <div className="flex flex-col gap-2">
                            <p className=" font-cormorant text-primary text-xl font-medium">
                                Connect with our socials
                            </p>
                            <div className="grid grid-cols-2 gap-2 flex-wrap">
                                {socials.map((social) => (
                                    <Link
                                        key={social.name}
                                        href={social.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-2 text-sm text-primarylight bg-white rounded-lg py-3 px-4 hover:text-primary transition-colors shadow-xs"
                                    >
                                        <Image
                                            src={social.icon}
                                            alt={social.name}
                                            width={20}
                                            height={20}
                                            unoptimized
                                        />
                                        <span>{social.name}</span>
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </div>

                
            </motion.div>
        </section>
    )
}