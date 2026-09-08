'use client'
import gal1 from "@/app/assets/gellery/1.png"
import gal2 from "@/app/assets/gellery/2.png"
import gal3 from "@/app/assets/gellery/3.png"
import gal4 from "@/app/assets/gellery/4.png"
import gal5 from "@/app/assets/gellery/5.png"
import gal6 from "@/app/assets/gellery/6.png"
import Image from "next/image"
import { ArrowUpRight } from "lucide-react"
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
            className="w-full h-screen m-auto overflow-hidden">
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
            className="heroOverlay absolute inset-0 px-6 pb-12 md:p-6 flex flex-col gap-8 items-center justify-end">
            <div className="flex flex-col gap-3 text-secondary ">
                <div className="flex flex-col font-cormorant gap-1 items-center font-semibold text-5xl md:text-5xl uppercase text-shadow-md">
                    <MaskedText delay={0.4}>
                        <h1 className="text-center">
                            Two Decades of
                        </h1>
                    </MaskedText>
                    <MaskedText delay={0.4}>
                        <h1  className="text-center">
                            Pahrump Real
                        </h1>
                    </MaskedText>
                    <MaskedText delay={0.4}>
                        <h1 className="text-center">
                            Estate Expertise
                        </h1>
                    </MaskedText>
                </div>
                <div className="flex flex-col font-epilogue text-sm md:text-md items-center">
                    <MaskedText delay={0.7}>
                        <p className="text-center" >
                            Buy, sell, or invest in Pahrump and Southern Nevada
                        </p>
                    </MaskedText>
                    <MaskedText delay={0.8}>
                        <p className="text-center">
                            with Marci Metzger & Group, serving since 1995.
                        </p>
                    </MaskedText>
                </div>
            </div>
            <div className="flex gap-6 font-epilogue text-sm md:text-md">
                <button type="button"
                    className="flex items-center  gap-3 p-[10px_16px] bg-secondary rounded-full ">
                    Get in Touch
                </button>
                <button type="button"
                    className="flex items-center gap-4 p-[10px_12px_10px_16px] bg-primary/60 text-white backdrop-blur-xs rounded-full">
                    Explore Listing
                    <div className="p-2 rounded-full bg-secondary text-primary">
                        <ArrowUpRight size={16} />
                    </div>
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