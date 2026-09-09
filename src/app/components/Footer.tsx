import footerImg from "@/app/assets/footer.png"
import Image from "next/image"
import logoBlack from "@/app/assets/logo-b.png"
import Link from "next/link"
import logo from "@/app/assets/logo-brown.svg"

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

export function Footer() {
    return <footer className="flex flex-col items-center gap-6 mt-24 w-full relative min-h-screen"
        style={{
            backgroundImage: `url(${footerImg.src})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
        }}>
        <div className="absolute inset-0"
            style={{
                background: "linear-gradient(180deg, #F7F2EC 3.55%, rgba(247, 242, 236, 0.00) 66.2%)",
            }}>

        </div>
        <div className="absolute bottom-0 md:bottom-6 left-0 right-0 flex flex-col items-center justifiy-center">
            <div className="w-full md:w-fit p-4 md:py-8 md:px-24 rounded-none md:rounded-2xl flex flex-col items-center justify-center bg-secondary/60 md:backdrop-blur-xs">
                <Image src={logoBlack} alt="logo" className="md:w-[30%] w-[60%]" />
                <div className="flex gap-12 justify-items-center text-primarylight flex-wrap justify-center mt-8">
                    <div className="flex flex-col items-center md:items-start gap-3">
                        <p className="text-center md:text-left">
                            Providing exceptional residential <br /> and commercial real estate services across <br /> the Pahrump Valley since 1996.
                        </p>

                        <div className="flex items-center gap-3">
                            {socials.map((social) => (
                                <Link
                                    key={social.name}
                                    href={social.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-2 text-sm text-primarylight hover:text-primary transition-colors"
                                >
                                    <Image
                                        src={social.icon}
                                        alt={social.name}
                                        width={20}
                                        height={20}
                                        unoptimized
                                    />
                                </Link>
                            ))}
                        </div>

                    </div>
                    <div className="flex gap-8  text-xs md:text-sm">
                        <div className="flex flex-col gap-3 w-[250px]">
                            <p className="text-primary font-medium  text-sm md:text-md">Contact</p>
                            <p>(206) 919-6886</p>
                            <p>3190 HW-160, Suite F, Pahrump, Nevada 89048, United States</p>
                        </div>
                        <div className="flex flex-col gap-3   text-xs md:text-sm">
                            <p className="text-primary font-medium  text-sm md:text-md whitespace-nowrap">Quick Links</p>
                            <p>Home</p>
                            <p>Listing</p>
                            <p>Contact Us</p>
                            <p>About</p>
                        </div>
                    </div>

                </div>

                <div className="flex flex-col items-center gap-2">
                    <Image src={logo} alt="logo" className="size-20 drop-shadow-2xl" />
                    <p className=" text-sm md:text-md text-center font-sans">Copyright © 2026 Marci METZGER - All Rights Reserved</p>
                </div>
                
            </div>
        </div>
    </footer>
}