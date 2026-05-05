
const education = [
    {
        period :"2022 - Present",
        school :"Rajarata University of Sri Lanka",
        discription :"I am a final-year undergraduate student currently pursuing a B.Sc. (Hons) in Information Systems at the Faculty of Management Studies, Rajarata University of Sri Lanka. With a strong academic foundation in IS and a passion for full-stack software development",
        
    },
    {
        period :"2026 - Present",
        school :"Coursera",
        discription :"Aspiring Full Stack Developer currently pursuing the IBM Full Stack Software Developer Professional Certificate, dedicated to building scalable web applications through hands-on technical training.",
        
    },
    {
        period :"2019 - 2022",
        school :"B/Welimada Central College",
        discription :"I completed my G.C.E. Advanced Level in the Commerce stream, achieving 1 'A' pass and 2 'B' passes. Following this, I was selected for university studies.",
        
    },
    
    {
        period :"2007 - 2018",
        school :"B/Welimada Vijaya Vidyalaya",
        discription :"I achieved 4 A's, 4 B's, and 1 C for my O/L examination.",
        
    },
];


export const Education = () => {
    return (<section 
    id="education"
    className="py-32 relative overflow-hidden">
        <div
        className="absolute top-1/2 left-1/4 w-96
       h-96 bg-primary/5 rounded-full blur-3xl -translate-y-1/2"
      />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
            <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in">Education Journey</span>
            <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100 text-secondary-foreground">Education that
                <span className="font-serif italic font-normal text-white"> 
                    {" "}
                    Shapes My Future.</span>
            </h2>
            <p className="text-muted-foreground animate-fade-in animation-delay-200">
            A timeline of my Education growth, from curious beginner to
            Ddeveloper leading teams and building products at scale.
            </p>

        </div>
        {/* Education Timeline */} 
        <div className="relative">
            <div className="timeline-glow absolute left-0 md:left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-primary/70 via-primary/30 to-transparent md:-translate-x-1/2 shadow-[0_0_25px_rgba(32,178,166,0.8)] "/>
                {/* Education Items */}
                <div className="space-y-12">
                    {education.map((edu, idx)=>(
                        <div key={idx} 
                        className="relative grid md:grid-cols-2 gap-8 animate-fade-in"
                        style={{ animationDelay: `${(idx + 1) * 150}ms` }}>
                            {/*timeline dot*/}
                            <div  className="absolute left-0 md:left-1/2 top-0 w-3 h-3 bg-primary rounded-full -translate-x-1/2 ring-4 ring-background z-10">

                            </div>

                            {/* Education Details */}
                            <div className={`pl-8 md:pl-0 ${idx % 2 === 0 ? "md:pr-16 md:text-right": "md:col-start-2 md:pl-16"}`}>
                                <div className={`glass p-6 rounded-2xl border border-primary/30 hover:border-primary/50 transition-all duration-500`}>
                                    <span className="text-sm text-primary font-medium">{edu.period}</span>
                                    <h3 className="text-xl font-semibold mt-2">{edu.school}</h3>
                                    <p className="text-sm text-muted-foreground mt-4">{edu.discription}</p>
                                </div>
                            </div>
                        </div>
                    ))}

                </div>
            </div>

        
      </div>

    </section>)

    
}