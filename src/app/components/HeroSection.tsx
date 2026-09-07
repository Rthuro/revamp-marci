'use client'
import gal1 from "@/app/assets/gellery/1.png"
import gal2 from "@/app/assets/gellery/2.png"
import gal3 from "@/app/assets/gellery/3.png"
import gal4 from "@/app/assets/gellery/4.png"
import gal5 from "@/app/assets/gellery/5.png"
import gal6 from "@/app/assets/gellery/6.png"
import Image from "next/image"
import { ArrowRight } from "lucide-react"
import { useState } from "react"
import { motion } from "framer-motion"
import { MaskedText } from "./MaskedText"


const images = [gal1, gal2, gal3, gal4, gal5, gal6]


export function HeroSection() {

    const [currImg, setCurrImg] = useState(0)

    return <section
        className="relative w-full flex items-center justify-center h-screen overflow-hidden">
        <motion.div
            animate={{ width: "100%", height: "100%", borderRadius: 0, margin: "0px" }}
            initial={{ width: "0%", height: "0%", borderRadius: 42, margin: "60px" }}
            transition={{ duration: 1.8, ease: "easeOut" }}
            className="w-full h-full m-auto overflow-hidden">
            {/* {images.map((image, index) => (
                    <div key={index}>
                        <Image src={image} alt="gallery" />
                    </div>
                ))} */}
            <Image src={images[0]} alt="gallery"
                loading="eager"
                className="object-cover h-screen w-screen" />
        </motion.div>
        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{
                delay: 1.6,
                duration: 0.6,
                ease: "easeOut",
            }}
            className="heroOverlay absolute inset-0 p-16 flex flex-col gap-14 items-start justify-end">
            <div className="flex flex-col gap-3 text-secondary">
                <div className="flex flex-col font-cormorant font-medium text-6xl uppercase">
                    <MaskedText delay={0.6}>
                        <h1>
                            2 Decades of
                        </h1>
                    </MaskedText>
                    <MaskedText delay={0.6}>
                        <h1 >
                            Pahrump Real
                        </h1>
                    </MaskedText>
                    <MaskedText delay={0.6}>
                        <h1>
                            Estate Expertise
                        </h1>
                    </MaskedText>
                </div>
                <div className="flex flex-col font-epilogue">
                    <MaskedText delay={0.7}>
                        <p >
                            Buy, sell, or invest in Pahrump and Southern Nevada mdma
                        </p>
                    </MaskedText>
                    <MaskedText delay={0.8}>
                        <p>
                            with Marci Metzger & Group, serving since 1995.
                        </p>
                    </MaskedText>
                </div>
            </div>
            <div className="flex gap-6">
                <button type="button"
                    className="flex items-center text-lg font-epilogue gap-3 py-4 pl-7 pr-6 bg-secondary">
                    Explore Listing
                    <ArrowRight size={20} />
                </button>
                <button type="button"
                    className="flex items-center  text-lg font-epilogue gap-3 py-4 pl-7 pr-6 bg-primary/50 border text-secondary border-secondary backdrop-blur-sm">
                    Contact Us
                    <ArrowRight size={20} />
                </button>
            </div>
            {/* <div className="flex items-center gap-6">
                {images.map((_, index) => (
                    <span key={index} className={`h-2 rounded-full ${index === currImg ? "bg-secondary w-20 " : "bg-white/50 w-16"}`}></span>
                ))}
            </div> */}
        </motion.div>
    </section>
}