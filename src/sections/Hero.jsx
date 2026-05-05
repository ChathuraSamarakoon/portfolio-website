import { Button } from "@/components/Button";
import { ArrowRight, ChevronDown } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa6";


const skills = [
    "React",
    "Java",
    "Spring Boot",
    "Node.js",
    "JavaScript",
    "Express.js",
    "Python",
    "MySQL",
    "MongoDB",
    "Redis",
    "Docker",
    "AWS",
    "Vercel",
    "Tailwind CSS",
    "Git",
    "GitHub Actions",
    ]

export const Hero = () => {
    return (
        <section className="relative min-h-screen flex items-center overflow-hidden">
            {/** Background Circles */}
            <div className="absolute inset-0">
                <img src="/hero-bg.jpg" alt="Background Image" className="w-full h-full object-cover opacity-40" />
                <div className="absolute inset-0 bg-gradient-to-b from-background/20 via-background/80 to-background"></div>
            </div>

            {/* green dots */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                {[...Array(20)].map((_, index) => (
                    <div
                        key={index}
                        className="absolute w-1.5 h-1.5 rounded-full opacity-60"
                        style={{
                            backgroundColor: "#20B2A6",
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                            animation: `slow-drift ${20 + Math.random() * 30}s ease-in-out infinite`,
                            animationDelay: `${Math.random() * 5}s`,
                        }}
                    />
                ))}
            </div>

            {/** Content */}
            <div className="container mx-auto px-6 pt-32 pb-20 relative z-10">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/*text*/}
                    <div className="space-y-8">
                        <div className="animate-fade-in">
                            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-lg text-primary">
                                <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                                Full Stack Developer
                            </span>
                        </div>

                        {/** Headline */}
                        <div className="space-y-4">
                            <h1 className="text-5xl md:text-6xl lg:text-6.5xl font-bold leading-tight animate-fade-in animation-delay-200">
                                Building <span className="text-primary glow-text">systems</span>
                                <br />
                                that speak for 
                                <br />
                                <span className="font-serif italic font-normal text-white">
                                    themselves.
                                </span>
                            </h1>
                            <p className="text-lg text-muted-foreground max-w-lg animate-fade-in animation-delay-300">
                                Hi, I'm Chathura Sachethana — 4th year Information Systems undergraduate at Rajarata University of Sri Lanka. I build end-to-end web applications with clean code and thoughtful design. Passionate about solving real problems through technology.
                            </p>
                        </div>

                        {/** CTA Buttons */}
                        <div className="flex flex-wrap gap-4 animate-fade-in animation-delay-400 ">
                            <a href="#contact">
                                <Button size="sm">Contact Me <ArrowRight className="w-5 h-5" /></Button>
                            </a>
                        </div>

                        {/** Social Links */}
                        <div className="flex items-center gap-4 animate-fade-in animation-delay-400">
                            <span className="text-sm text-muted-foreground">Follow me: </span>
                            {[
                                { icon: FaGithub, href: "https://github.com/ChathuraSamarakoon" },
                                { icon: FaLinkedin, href: "https://www.linkedin.com/in/chathura-samarakoon-87610b2a1" },
                               
                            ].map((social, idx) => {
                                const Icon = social.icon;
                                return (
                                    <a
                                        key={idx}
                                        href={social.href}
                                        className="p-2 rounded-full glass hover:bg-primary/10 hover:text-primary transition-all duration-300"
                                    >
                                        <Icon className="w-5 h-5" />
                                    </a>
                                );
                            })}
                        </div>
                    </div>

                    {/* profile */}
                    <div className="relatice animate-fade-in animation-delay-300">
                        {/* image */}
                        <div className="ralative max-w-md mx-auto">
                                <div
                                    className="absolute inset-0 
                                rounded-3xl bg-gradient-to-br 
                                from-primary/30 via-transparent 
                                to-primary/10 blur-2xl animate-pulse"
                                />                            
                            <div className="ralative glass rounded-3xl p-2 glow-border">
                                <img src="/ProfilePhoto.png" alt="Profile" className="w-full aspect-4/5 object-cover rounded-2xl" />

                                {/* badge */}
                                <div className="absolute -bottom-4 -right-4 glass rounded-xl py-4 px-3 animate-float">
                                    <div className="flex items-center gap-3">
                                        <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"/>
                                        <span className="text-lg font-medium">Available for work</span>
                                    </div>
                                </div>

                                {/* Stats */}
                            </div>
                        </div>
                    </div>
                </div>
                {/** Skills */}
                <div className="mt-20 animate-fade-in animation-delay-600">
                    
                    <p className="text-lg text-muted-foreground mb-6 text-center">Technologies I work with</p>
                    <div className="relative overflow-hidden">
                        <div className="flex animate-marquee">
                            {[...skills,...skills].map((skill, idx) => (
                                <div key={idx} className="flex-shrink-0 px-8 py-4">
                                    <span className="text-xl font-semibold text-muted-foreground/50 hover:text-muted-foreground transition-colors">{skill}</span>
                                </div>
                            ))}
                        </div>
                    </div>                
                
                </div>

            </div>
                  <div
                    className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-fade-in animation-delay-800">
                    <a href="#about" className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors group">
                    <span className="text-xs uppercase tracking-wider">Scroll</span>
                    <ChevronDown className="w-6 h-6 animate-bounce" />
                    </a>
                </div>
        </section>
    );
};