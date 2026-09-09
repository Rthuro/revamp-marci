'use client'

import gal1 from "@/app/assets/gellery/1.png"
import gal2 from "@/app/assets/gellery/2.png"
import gal3 from "@/app/assets/gellery/3.png"
import gal4 from "@/app/assets/gellery/4.png"
import gal5 from "@/app/assets/gellery/5.png"
import gal6 from "@/app/assets/gellery/6.png"
import Image from "next/image"
import useEmblaCarousel from "embla-carousel-react"
import { WheelGesturesPlugin } from 'embla-carousel-wheel-gestures'
import { motion } from "framer-motion"
import { useState, useCallback, useEffect } from "react"
import { ArrowLeft, ArrowRight } from "lucide-react"
import { MaskedText } from "./MaskedText"

const images = [gal1, gal2, gal3, gal4, gal5, gal6]

const slideClass = "relative flex-[0_0_100%] md:flex-[0_0_80%] h-[50vh] md:h-[80vh] min-w-0"

export function Gallery() {
    // Removed dragFree: true so it naturally snaps to slides
    const [emblaRef, emblaApi] = useEmblaCarousel({
        loop: true,
        align: 'center',
    }, [WheelGesturesPlugin()])

    const [currIndex, setCurrIndex] = useState(0)

    const scrollPrev = useCallback(() => {
        if (emblaApi) emblaApi.scrollPrev()
    }, [emblaApi])

    const scrollNext = useCallback(() => {
        if (emblaApi) emblaApi.scrollNext()
    }, [emblaApi])

    const onSelect = useCallback(() => {
        if (!emblaApi) return
        setCurrIndex(emblaApi.selectedScrollSnap())
    }, [emblaApi, setCurrIndex])

    useEffect(() => {
        if (!emblaApi) return
        onSelect()
        emblaApi.on('select', onSelect)
        emblaApi.on('reInit', onSelect)
    }, [emblaApi, onSelect])

    return (
        <section className="w-full h-fit flex flex-col items-center justify-center gap-2 my-12 overflow-visible relative">
            <MaskedText delay={0}>
                <h2 className="text-4xl font-cormorant font-medium text-primary">
                    Photo Gallery
                </h2>
            </MaskedText>
            <motion.div
                initial={{ width: "100%", padding: "0px" }}
                whileInView={{ width: "90%", padding: "2rem 0" }}
                transition={{ duration: 0.8, ease: "easeInOut" }}
                viewport={{ amount: 0.2 }}
                className="w-full flex justify-center relative group"
            >
                <div className="overflow-hidden w-full cursor-grab active:cursor-grabbing" ref={emblaRef}>
                    <div className="flex gap-4">
                        {images.map((img, idx) => (
                            <div key={idx} className={slideClass}>
                                <Image 
                                    src={img} 
                                    alt={`Gallery image ${idx + 1}`} 
                                    className="object-cover w-full h-full" 
                                    placeholder="blur"
                                />
                            </div>
                        ))}
                    </div>
                </div>

               
                
                {/* Optional: Indicator pill to show which image we are on (since we track currIndex state) */}
                {/* <div className="absolute top-12 left-6 md:top-16 md:left-[10%] px-4 py-2 bg-primary/70  text-white rounded-full text-xs md:text-sm font-medium font-sans z-10">
                    {currIndex + 1} / {images.length}
                </div> */}
            </motion.div>

             {/* Left/Right Navigation Buttons */}
                <div className="mb-8 ml-auto flex gap-3 z-10 mr-[5%]">
                    <button 
                        onClick={scrollPrev}
                        className="p-3 md:p-4 bg-primary rounded-full text-secondary hover:bg-primarylight hover:scale-105 transition-all  flex items-center justify-center"
                    >
                        <ArrowLeft size={18}/>
                    </button>
                    <button 
                        onClick={scrollNext}
                        className="p-3 md:p-4 bg-primary rounded-full text-secondary hover:bg-primarylight hover:scale-105 transition-all  flex items-center justify-center"
                    >
                        <ArrowRight size={18} />
                    </button>
                </div>
        </section>
    )
}