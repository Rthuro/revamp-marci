'use client'
import Link from "next/link"
import { Calendar, Phone, MapPin } from "lucide-react";
import { motion } from "framer-motion";

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

export function Map(){
    return <motion.section 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="flex items-center justify-center px-6 md:px-12 w-full my-12">
        <div className="flex flex-col md:flex-row gap-12  mx-1 md:mx-24 w-full">
            <div className="flex flex-col gap-5">
                <h2 className="text-2xl font-cormorant font-semibold text-primarylight">
                    More Information
                </h2>
                {contacts.map( (c , idx) => (
                    <div key={idx} className="flex items-start gap-3">
                        <div className="p-2 bg-[#FFFBF6] rounded-full">
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
            </div>

        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3220.272515167397!2d-115.95782812535197!3d36.184253702180015!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c6398c31855555%3A0xca2c250302350734!2s3190%20NV-160%20Ste%20F%2C%20Pahrump%2C%20NV%2089048%2C%20USA!5e0!3m2!1sen!2sph!4v1788864592176!5m2!1sen!2sph"  loading="lazy" referrerPolicy="strict-origin-when-cross-origin"
        className="w-full md:w-[80%] h-[60vh] border border-primarylight/20 rounded-xl "></iframe>
        </div>
    </motion.section>
}

