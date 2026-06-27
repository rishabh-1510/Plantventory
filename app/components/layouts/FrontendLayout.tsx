import { ReactNode } from "react";
import { Footer } from "../footer/Footer";

export default function FrontendLayout({children}:{children:ReactNode}){
  return (
    <>
    {children}
    <Footer/>
    </>
  )
}

