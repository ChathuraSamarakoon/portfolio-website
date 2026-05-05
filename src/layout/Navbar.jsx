import { Button } from "@/components/Button";
import { Menu ,X} from "lucide-react";
import { useEffect, useState } from "react";

const navLinks = [
    {href: "#about", label: "About"},
    {href: "#education", label: "Education"},
    {href: "#skills", label: "Skills"},
    {href: "#projects", label: "Projects"},
    
    

    
]

export const Navbar = () => {
    const [isMobileMenuOpen, setIsmobileMenuOpen]=useState(false)
    const [isScrolled, setIscrolled]=useState(false)

    useEffect(()=>{
        const handleScroll=() =>{
            setIscrolled(window.scrollY > 50)
        }
        window.addEventListener("scroll",handleScroll);
        return () => window.removeEventListener("scroll",handleScroll)
    }, [])

    return (
    <header className={`fixed top-0 left-0 right-0 transition-all duration-500 ${isScrolled ? "glass-strong py-3" : "bg-transparent py-5"}  z-50`}>
        <nav className="container mx-auto px-6 flex items-center justify-between">
            <a href="#" className="text-2xl font-bold tracking-tight hover:text-primary">
                CS<span className="text-primary">.</span>
            </a>

           { /** Desktop Navigation */}
        <div className="hidden md:flex items-center gap-1">
            <div className="glass rounded-full px-2 py-1 flex items-center gap-1">
                {navLinks.map((link ,index)=>(
                <a href={link.href} key={index} className="px-4 py-2 text-sm text-muted-foreground hover:text-foreground rounded-full hover:bg-surface">
                    {link.label}
                </a>))}
            </div>
        </div>
        {/** CTA burtton */}
        <div className="hidden md:block">
            <a href="#contact">
            <Button size="sm">Contact Me</Button>
            </a>
            </div>

        {/** Mobile Navigation */}
        <button className="md:hidden p-2 text-foreground " onClick={()=>setIsmobileMenuOpen((prev)=> !prev)}>
            {isMobileMenuOpen ?<X size={25}/>:<Menu  size={25}/>}
        </button>
        
        </nav>
        {/** Mobile Menu */}
        {isMobileMenuOpen &&(<div className="md:hidden glass-strong  animate-fade-in">
            <div className="container mx-auto px-6 py-6 flex flex-col">
                {navLinks.map((link ,index)=>(
                <a href={link.href} key={index} onClick={()=> setIsmobileMenuOpen(false)} className="text-lg text-muted-foreground hover:text-foreground py-2">
                    {link.label}
                </a>))}

                

               <a href="#contact" onClick={() => setIsmobileMenuOpen(false)}>
                 <Button className="w-full">Contact Me</Button>
                </a>
            </div>
        </div>)}
    </header>
    )

    
}