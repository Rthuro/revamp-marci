import footerImg from "@/app/assets/footer.png"
import Image from "next/image"
import logoBlack from "@/app/assets/logo-b.png"

export function Footer(){
    return <footer className="flex flex-col items-center gap-6 mt-12 w-full relative">
            <Image src={footerImg} alt="footer" className="object-cover w-full h-[60%]" />
            <div className="absolute inset-0"
            style={{
                background: "linear-gradient(180deg, #F7F2EC 3.55%, rgba(247, 242, 236, 0.00) 66.2%)",
            }}>

            </div>
            <div className="absolute bottom-12 left-0 right-0 flex flex-col items-center justifiy-center">
                <div className="w-full md:w-[80%] py-8 px-16 gap-12 rounded-none md:rounded-3xl flex flex-col items-center justify-center bg-secondary/60 backdrop-blur-sm">
                    <Image src={logoBlack} alt="logo" className="w-[30%]" />
                    <div className="flex gap-8  justify-items-center text-primarylight ">
                        <div className="flex flex-col gap-3">
                            <p>
                                Providing exceptional residential <br /> and commercial real estate services across <br/> the Pahrump Valley since 1996.
                            </p>
                        </div>
                        <div className="flex gap-8">
<div className="flex flex-col gap-3 w-[250px]">
                            <p className="text-primary font-medium">Contact</p>
                            <p>(206) 919-6886</p>
                            <p>3190 HW-160, Suite F, Pahrump, Nevada 89048, United States</p>
                        </div>
                        <div className="flex flex-col gap-3 ">
                            <p className="text-primary font-medium">Quick Links</p>
                            <p>Home</p>
                            <p>Listing</p>
                            <p>Contact Us</p>
                            <p>About</p>
                        </div>
                        </div>
                        
                    </div>
                    <p>Copyright © 2026 Marci METZGER - All Rights Reserved</p>
                </div>
            </div>
    </footer>
}