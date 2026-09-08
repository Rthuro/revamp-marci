'use client'
import list1 from "@/app/assets/listing/1.png"
import list2 from "@/app/assets/listing/2.png"
import list3 from "@/app/assets/listing/3.png"
import useEmblaCarousel from 'embla-carousel-react'
import { WheelGesturesPlugin } from 'embla-carousel-wheel-gestures'
import {motion} from "framer-motion";
import { ArrowRight } from "lucide-react";
import img2 from "@/app/assets/gellery/6.png"
import Image from "next/image"
import logo from "@/app/assets/logo-brown.svg"

const featuredListing = [
    {
        cost: 1850000,
        beds: 4,
        baths: 5,
        sqft: 55530,
        location: "4751 W Adkisson Street, Pahrump, NV",
        image: list1
    },
    {
        cost: 1350000,
        beds: 3,
        baths: 3,
        sqft: 1876,
        location: "2221 W Windsong Lane, Pahrump, NV",
        image: list2
    }, 
     {
        cost: 1850000,
        beds: 3,
        baths: 3,
        sqft: 2456,
        location: "4190 N Equus Court, Pahrump, NV",
        image: list3
    },
]

const inputClass = 'bg-white rounded-md py-3 px-3 text-sm text-primarylight'

export function BaitSection() {
     const [emblaRef] = useEmblaCarousel({
        align: 'start',
        containScroll: 'trimSnaps',
        dragFree: true,
    }, [WheelGesturesPlugin()])

    return <section className="w-full mt-1.5-12 h-fit">
        <motion.div 
        initial={{opacity:0, width: "0%" }}
        whileInView={{ opacity: 1, width: "100%" }}
        transition={{
            duration: 1,
            ease: "easeOut",
        }}  
        viewport={{
            once: true,
            amount: 0.2,
        }}
        className="flex flex-col gap-8 bg-white px-6 py-12 md:p-12 overflow-hidden origin-left">
            <div className="flex items-center gap-2">
               <motion.p
                    initial={{ opacity: 0, x: -40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{
                        delay: 0.5,
                        duration: 0.8,
                        ease: "easeOut",
                    }}
                    viewport={{ once: true }}
                    className="md:text-4xl text-3xl font-medium font-cormorant whitespace-nowrap">
                        Featured Listings
                </motion.p> 
            </div>
             <div className="overflow-hidden w-[calc(100vw-2rem)] text-sm pt-0" ref={emblaRef}>
                <div className="flex gap-2">
                    {featuredListing.map((fl, idx) => (
                        <motion.div 
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{
                            delay: idx * 0.2,
                            duration: 0.8,
                            ease: "easeOut",
                        }}
                        className="relative md:flex-[0_0_450px] flex-[0_0_80%] h-[450px] rounded-xl overflow-hidden"
                        style={{
                            backgroundImage: `url(${fl.image.src})`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                        }}
                        key={idx}>
                            <div className="listingOverlay absolute inset-0 flex flex-col items-start justify-end gap-2 p-4 text-secondary ">
                                <p className="text-3xl font-sans font-semibold text-white">${fl.cost.toLocaleString()}</p>
                                <p className="text-sm md:text-md">{fl.beds} Bed / {fl.baths} Baths / {fl.sqft} Sqft</p>
                                <p className="text-sm md:text-md">{fl.location}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
        </div>
             <button 
                type="button" 
                className="flex items-center font-epilogue gap-3  md:p-[18px_20px] p-[12px_18px] bg-primary text-sm md:text-md w-fit rounded-md text-secondary">
                    Browse more
                    <ArrowRight className="size-4 md:size-4" />
                </button>
        </motion.div>
        <div 
        className=" h-fit md:h-screen lg:h-fit w-full  flex justify-center items-center p-[5%]"
        style={{
            backgroundImage: `url(${img2.src})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
        }}>

            <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: 'easeOut' }}
            className="flex flex-col gap-3 bg-primary/60 backdrop-blur-sm w-full py-8 px-6 rounded-xl text-secondary">
                <p className="text-xl text-white font-epilogue">Let's find your dream home</p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-5 text-sm">
                    <div className="flex flex-col gap-2">
                        <label htmlFor="location">Location</label>
                        <select id="location" className={inputClass} >
                            <option>Any</option>
                            <option value="alamo">Alamo</option>
                            <option value="alton">Alton</option>
                            <option value="amargosa">Amargosa Valley</option>
                            <option value="beatty">Beatty</option>
                            <option value="beryl">Beryl</option>
                            <option value="blue">Blue Diamond</option>
                            <option value="boulder">Boulder City</option>
                        </select>
                    </div>
                    <div className="flex flex-col gap-2">
                        <label htmlFor="type">Type</label>
                        <select id="type" className={inputClass} >
                            <option>Type</option>
                            <option value="land">Land</option>
                            <option value="residentiallease">Residential Lease</option>
                            <option value="highrise">High Rise</option>
                            <option value="residential">Residential</option>
                        </select>
                    </div>
                    <div className="flex flex-col gap-3">
                        <label htmlFor="sort">Sort By</label>
                        <select id="sort" className={inputClass} >
                            <option value="newest">Newest</option>
                            <option value="oldest">Oldest</option>
                            <option value="price-asc">Price: Low to High</option>
                            <option value="price-desc">Price: High to Low</option>
                            <option value="beds-asc">Bedrooms (Low to High)</option>
                            <option value="beds-desc">Bedrooms (High to Low)</option>
                            <option value="baths-asc">Bathrooms (Low to High)</option>
                            <option value="baths-desc">Bathrooms (High to Low)</option>
                        </select>
                    </div>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-5 gap-5 items-end text-sm">
                    <div className="flex flex-col gap-2">
                        <label htmlFor="location">Bedrooms</label>
                        <select id="location" className={inputClass} >
                            <option>Any Number</option>
                            <option value="1+">1+</option>
                            <option value="2+">2+</option>
                            <option value="3+">3+</option>
                            <option value="4+">4+</option>
                            <option value="5+">5+</option>
                            <option value="6+">6+</option>
                            <option value="7+">7+</option>
                        </select>
                    </div>
                    <div className="flex flex-col gap-2">
                        <label htmlFor="type">Baths</label>
                        <select id="type" className={inputClass} >
                            <option>Type</option>
                            <option value="1+">1+</option>
                            <option value="2+">2+</option>
                            <option value="3+">3+</option>
                            <option value="4+">4+</option>
                            <option value="5+">5+</option>
                            <option value="6+">6+</option>
                            <option value="7+">7+</option>
                        </select>
                    </div>
                    <div className="flex flex-col gap-2">
                        <label htmlFor="sort">Min Price</label>
                        <input type="number" id="sort" className={inputClass} placeholder="Min Price" />
                    </div>
                    <div className="flex flex-col gap-2">
                        <label htmlFor="sort">Max Price</label>
                        <input type="number" id="sort" className={inputClass} placeholder="Min Price" />
                    </div>
                    <button type="button"
                    className="bg-secondary rounded-lg py-4 px-3 text-primary h-fit col-span-2 md:col-span-1">
                        Search Now
                    </button>
                </div>
                </motion.div>

            </div>
    </section>
}