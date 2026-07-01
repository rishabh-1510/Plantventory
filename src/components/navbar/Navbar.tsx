"use client"
import Link from "next/link";
import { Button } from "../ui/Button";
import { FaHome } from "react-icons/fa";
import { useState } from "react";
import { IoClose } from "react-icons/io5";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { useAuthModal } from "@/src/store/useAuthModalStore";
import { useCreatePropertyModal } from "@/src/store/useCreatePropertyModalStore";


interface NavbarProps {
    variant: "transparent" | "Solid"
}

const navLinks = ["Home", "Properties", "MarketPlace"];

export const Navbar = ({ variant = "transparent" }: NavbarProps) => {
    const isTranparent = variant === "transparent";
    const [isOpen, setIsOpen] = useState(false);
    const {openLogin} = useAuthModal();
    const {open:openCreateModal} = useCreatePropertyModal();
    return (
        <section className={`top-0 left-0 z-50 w-full 
        ${isTranparent ? `absolute` : `sticky border-b border-black/5 bg-card`}`}>
            <div className="mx-auto max-w-7xl px-6 lg:px-12">
                <nav className={`flex h-20 items-center justify-between
                ${isTranparent ? `mt-6 rounded-3xl border border-white/10 bg-white/5 px-6 backdrop-blur-2xl` : `px-0 `}`}>
                    {/* logo */}
                    <Link href={'/'} className="flex items-center text-2xl font-semibold ">
                        <span className={`${isTranparent ? `text-gray-300` : `text-text`}`}>
                            Next
                        </span>
                        <span className="bg-primary text-white px-2 py-1 rounded-tr-2xl rounded-bl-2xl">
                            Estates
                        </span>
                    </Link>
                    {/* Desktop Links */}
                    <div className="hidden items-center gap-8 lg:flex">
                        {navLinks.map((item) => (
                            <Link key={item} href={item == "Home" ? "/" : `${item.toLowerCase()}`} className={`text-sm font-medium transition hover:text-primary
                            ${isTranparent ? `text-white/80` : `text-text/70`}`}>
                                {item}
                            </Link>
                        ))}
                    </div>
                    {/* Desktop Buttons */}
                    <div className="hidden lg:flex items-center gap-4 ">
                        <Button variant="outline" onClick={openLogin}>
                            Login
                        </Button>
                        <Button icon={<FaHome />} iconPosition="right" variant="outline" onClick={openCreateModal}>
                            Add Property
                        </Button>

                    </div>
                    {/* Mobile Button */}
                    <button className={`
                        flex h-11 w-11 items-center justify-center
                        rounded-2xl transition lg:hidden
                        ${isTranparent ? "border border-white/10 bg-white/5 text-white " : "border border-black/10 bg-background text-text"}`}
                        onClick={() => {
                            setIsOpen(!isOpen)
                        }}>
                        {isOpen ? <IoClose /> : <HiOutlineMenuAlt3 />}
                    </button>


                </nav>
                {/* Mobile Menu*/}
                {isOpen && (
                    <div className={`mt-4 rounded-3xl p-6 backdrop-blue-2xl lg:hidden 
                        ${isTranparent ? `border border-white/10 bg-secondary/95 ` : `border border-black/5 bg-white`}`}>
                        <div className="flex flex-col gap-5 ">
                            {navLinks.map((item) => (
                                <Link key={item} href={item == "Home" ? "/" : `${item.toLowerCase()}`} className={` transition hover:text-primary
                                        ${isTranparent ? `text-white/80` : `text-white/70`}`}>
                                    {item}
                                </Link>
                            ))}
                            <div className="flex flex-col gap-3 mt-4 ">
                                <Button variant="outline" onClick={openLogin}>
                                    Login
                                </Button>
                                <Button icon={<FaHome />} iconPosition="right" variant="outline" onClick={openCreateModal}>
                                    Add Property
                                </Button>
                            </div>
                        </div>

                    </div>
                )}
            </div>
        </section>
    )
}
