'use client'
import s1 from "@/app/assets/services/1.png"
import s2 from "@/app/assets/services/2.png"
import s3 from "@/app/assets/services/3.png"
import { useState, useEffect, useCallback } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { MaskedText } from "./MaskedText"

const serviceData = [
    {
        image: s1,
        title: "Real Estate Done Right",
        description: "Whether buying, selling, or investing, we turn complex property journeys into seamless, stress-free experiences.",
    },
    {
        image: s2,
        title: "Commercial & Residential",
        description: "From luxury homes to commercial spaces, we leverage deep local market knowledge to secure the right property at the best price.",
    },
    {
        image: s3,
        title: "Strategic Market Expertise",
        description: "Navigate loans, credit, and affordability with confidence. We connect you with trusted financial experts to simplify every step.",
    }
]

const INTERVAL_MS = 5000

export function Services() {
    const [currIndex, setCurrIndex] = useState(0)

    const next = useCallback(() => {
        setCurrIndex((prev) => (prev + 1) % serviceData.length)
    }, [])

    useEffect(() => {
        const timer = setInterval(next, INTERVAL_MS)
        return () => clearInterval(timer)
    }, [currIndex, next])

    return (
        <section className="flex flex-col items-center gap-10 w-full pb-16 px-2 md:px-12">
            <MaskedText delay={0}>
                <h2 className="text-4xl font-cormorant font-medium text-primary">
                    Our Services
                </h2>
            </MaskedText>

            <motion.div 
             initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: 'easeOut' }}
            className="flex gap-1 md:gap-3 w-full h-[400px] md:h-[500px]">
                {serviceData.map((service, index) => {
                    const isActive = index === currIndex
                    return (
                        <motion.div
                            key={index}
                            layout
                            animate={{ flex: isActive ? 2.5 : 0.6 }}
                            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                            onClick={() => setCurrIndex(index)}
                            className="@container relative rounded-xl overflow-hidden cursor-pointer"
                            style={{
                                backgroundImage: `url(${service.image.src})`,
                                backgroundSize: 'cover',
                                backgroundPosition: 'center',
                            }}
                        >
                            {/* Gradient overlay */}
                            <div className="absolute inset-0"
                                style={{
                                    background: 'linear-gradient(180deg, rgba(0,0,0,0) 40%, rgba(0,0,0,0.65) 100%)',
                                }}
                            />

                            {/* Content */}
                            <div className="absolute bottom-0 left-0 right-0 p-5 md:p-8 text-secondary flex flex-col gap-2">
                                <motion.h3
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }} 
                                    transition={{ delay: 0.2, duration: 0.4, ease: "easeOut" }}
                                    className={`text-2xl @[300px]:text-2xl @[500px]:text-3xl font-cormorant font-medium text-shadow-lg ${isActive ? 'block' : 'hidden md:block'}`}
                                >
                                    {service.title}
                                </motion.h3>

                                <AnimatePresence>
                                    {isActive && (
                                        <motion.p
                                            initial={{ opacity: 0, y: 10 }}
                                            animate={{ opacity: 1, y: 0 }} 
                                            transition={{ delay: 0.2, duration: 0.4, ease: "easeOut" }}
                                            className={`text-sm md:text-lg text-secondary/80 w-full md:w-lg block ${!isActive ? 'hidden' : ''}`}
                                        >
                                                {service.description}
                                            </motion.p>
                                    )}
                                </AnimatePresence>
                            </div>
                        </motion.div>
                    )
                })}
            </motion.div>
        </section>
    )
}