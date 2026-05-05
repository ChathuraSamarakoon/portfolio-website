import { Code2, Lightbulb, Rocket, Users } from "lucide-react"

const highlight = [
    {
        icon: Code2,
        title: "Clean Code",
        description: "I write clean, maintainable code following best practices and design patterns."
    },
    {
        icon: Rocket,
        title: "Performance",
        description:
        "Optimizing for speed and delivering lightning-fast user experiences.",
    },
    {
        icon: Users,
        title: "Collaboration",
        description: "Working closely with teams to bring ideas to life.",
    },
    {
        icon: Lightbulb,
        title: "Innovation",
        description:
        "Staying ahead with the latest technologies and best practices.",
    },
    ];

export const About = () => {
    return (
    <section id="about" className="py-32 relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
                {/* left colum */}
                <div className="space-y-8">
                    <div className="animate-fade-in">
                        <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase ">About Me</span>
                    </div>
                        <h2 className="text-4xl md:text-5xl font-bold leading-tight animate-fade-in animation-delay-100 text-secondary-foreground">
                        Building the future, 
                        <span  className="font-serif italic font-normal text-white"> one component at a time.</span>
                        </h2>

                         <div className="space-y-4 text-muted-foreground animate-fade-in animation-delay-200">
                            <p>
                                I'm a final year Information Systems undergraduate at Rajarata University of Sri Lanka with a genuine passion for building things that work — and work well. What started as curiosity about how websites come to life has grown into hands-on experience across the full stack.
                            </p>
                            <p>
                                I work with React, Spring Boot, and MySQL, building everything from university projects to real-world applications. I care about clean code, thoughtful structure, and experiences that feel effortless to the people using them.
                            </p>
                            <p>
                                When I'm not coding, I'm exploring new tools, breaking things to understand them better, or figuring out how to build the next idea stuck in my head.
                            </p>
                        </div>
                        <div className="glass rounded-2xl p-6 glow-border animate-fade-in animation-delay-300">
                            <p className="text-lg font-medium italic text-foreground">
                                "My goal is simple — write code that solves real problems, in ways that are clean enough to be proud of and clear enough for anyone to build on."
                            </p>
                        </div>
                </div>

                {/* right column */}
                <div className="grid sm:grid-cols-2 gap-6">
                    {highlight.map((item, idx) => (
                        <div key={idx} className="glass p-6 rounded-2xl animate-fade-in"
                        style={{animationDelay:`${(idx + 1)* 100}ms`}}>
                            <div className="w-12 h-12 rounded-4xl bg-primary/10 flex items-center justify-center mb-4 hover:bg-primary/20">
                                <item.icon className="w-6 h-6  text-primary"/>
                            </div>
                            <h3 className="text-lg font-semibold mb-2 text-primary">{item.title}</h3>
                            <p className="text-sm text-muted-foreground">{item.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    </section>
    )

    
}