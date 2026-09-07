'use client'
import { TrustBuilder } from "./TrustBuilder";
import { MaskedText } from "./MaskedText";
import LogoLoop from "@/components/LogoLoop";
import { motion } from "motion/react";
import a1 from '../assets/affiliations/1.png'
import a2 from '../assets/affiliations/2.png'
import a3 from '../assets/affiliations/3.png'
import a4 from '../assets/affiliations/4.png'

const imageLogos = [a1, a2, a3, a4]


export function SecondSection() {
    return <section className="flex flex-col items-center gap-12 w-full">

        <div className="flex flex-col gap-3 w-full">
            <div className="flex flex-col items-center text-3xl font-cormorant font-medium text-primarylight w-full py-14">
                <MaskedText delay={0}>
                    <p>For 2 decades, we have built lasting relationships,</p>
                </MaskedText>
                <MaskedText delay={0.1}>
                    <p>mastered our local market, and delivered exceptional service.</p>
                </MaskedText>
                <MaskedText delay={0.2}>
                    <p>Our proven track record speaks for itself.</p>
                </MaskedText>
            </div>

            <div className="flex items-center justify-around w-full">
                <TrustBuilder text="Years of Experience" number={30} />
                <TrustBuilder text="Clients Helped Annually" number={90} />
                <TrustBuilder text="Annual Sales" number={28.5} />
            </div>
        </div>

       

        <motion.div
            initial={{ opacity: 0, width: "0%"}}
            whileInView={{ opacity: 1, width: "20%"}}
            transition={{
                delay: 0.8,
                duration: 0.6,
                ease: "easeOut",
            }}
            className="bg-primarylight/20  h-0.5 my-6"
        >
        </motion.div>
        
        <MaskedText delay={0.2}>
            <h2 className="text-4xl font-cormorant font-medium text-primarylight uppercase">Our Affiliations</h2>
        </MaskedText>

        <LogoLoop
        logos={imageLogos}
        speed={30}
        direction="left"
        logoHeight={80}
        gap={120}
        hoverSpeed={0}
        scaleOnHover
        fadeOut
        fadeOutColor="#F7F2EC"
        ariaLabel="Our Affiliations"
      />
    </section>
}