import { ArrowUpRight } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { AnimatedBorderButton } from "../components/AnimatedBorderButton";

const projects = [
   {
    title: "E-Commerce Website",
    description:
        "This full-stack e-commerce application features a dynamic React/Vite frontend for a seamless user experience, integrated with a Node.js/MySQL backend for inventory and order management, and is deployed on AWS Elastic Beanstalk to ensure highly scalable, automated cloud deployment.",
    image: "/projects/project1.png",
    tags: ["React", "NodeJS" , "MySQL", "AWS", "Vitest"],
    link: "http://ecommerce-backend-env.eba-ubpj3ay6.eu-north-1.elasticbeanstalk.com/",
    github: "https://github.com/ChathuraSamarakoon/E-commerce-project",
  },
  {
    title: "FUDU - Food ordering app",
    description:
      "Developed a full-stack food ordering platform using React.js and Spring Boot. Implemented secure JWT authentication, RESTful APIs, and dynamic dashboards. Deployed the complete scalable infrastructure on AWS and implemented database on Aiven cloud platform.",
    image: "/projects/project2.png",
    tags: ["React", "Spring Boot", "MySQL", "Tailwind", "AWS", "Aiven"],
    link: "http://fudo-frontend-app-2026.s3-website-ap-southeast-1.amazonaws.com",
    github: "https://github.com/ChathuraSamarakoon/fudo-backend",
  },
  {
    title: "DevSync- Real Time chat app",
    description:
      "DevSync is a comprehensive MERN-stack project management and team communication platform. It features workspace organization, task tracking, and real-time messaging through Channels and Direct Messages powered by Socket.io. The application is successfully deployed on AWS, with the React/Vite frontend hosted on S3 and the Node.js backend on EC2.",
    image: "/projects/project3.png",
    tags: ["MongoDB Atlas", "Express", "React", "Node.js","Tailwind", "Socket.io", "AWS","bcrypt", "helmet" ],
    link: "http://devsync-frontend-chathura.s3-website.eu-north-1.amazonaws.com",
    github: "https://github.com/ChathuraSamarakoon/DevSync-backend",
  },
]

export const Projects = () => {
    return (
    <section id="projects" className="py-32 relative overflow-hidden">
        {/* Bg glows */}
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-highlight/5 rounded-full blur-3xl" />
        <div className="container mx-auto px-6 relative z-10">
            {/* Section Header */}
            <div className="text-center mx-auto max-w-3xl mb-16">
                <span className="text-foreground text-sm font-medium tracking-wider uppercase animate-fade-in">Featured Projects</span>
                <h3 className="text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100 text-secondary-foreground">
                    projects that
                    <span className="font-serif italic font-normal text-white"> 
                        {" "}
                        make an impact.</span>
                </h3>
                <p className="text-muted-foreground animate-fade-in animation-delay-400">
                    A collection of projects built through late nights, real problems, and a lot of learning. Each one taught me something new — about code, about users, and about building things that actually work.
                </p>
            </div>
            {/* Projects Grid */}
            <div className="grid md:grid-cols-2 gap-8">
                {projects.map((project, idx) => (
                    <div 
                    key={idx} 
                    className="group glass rounded-2xl overflow-hidden animate-fade-in md:row-span-1"
                    style={{animation: `${(idx + 1)*100}ms`}}>
                        {/* Project Card */}
                        <div className="relative overflow-hidden aspect-video">
                            <img src={project.image} alt={project.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                            <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent opacity-60" />

                            {/* Overlay links */}
                            <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300"> 
                                <a href={project.link} className="p-3 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-all ">
                                    <ArrowUpRight className="w-5 h-5" />
                                </a>
                                <a href={project.github} className="p-3 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-all ">
                                    <FaGithub className="w-5 h-5" />
                                </a>
            
                            </div>
                        </div>

                        {/* Project Details */} 
                        <div className="p-6 space-y-4">
                            <div className="flex items-start justify-between">
                                <h3 className="text-xl  font-semibold group-hover:text-primary transition-colors">{project.title}</h3>
                                <ArrowUpRight className="w-5 h-5 
                              text-muted-foreground group-hover:text-primary
                                group-hover:translate-x-1 
                                group-hover:-translate-y-1 transition-all" />
                            </div>
                            <p className="text-muted-foreground text-sm">{project.description}</p>
                            <div className="flex flex-wrap gap-2">{project.tags.map((tag,tagIdx) =>(
                                <span key={tagIdx}
                                className="px-4 py-1.5 rounded-full bg-surface text-xs font-medium border border-border/50 text-muted-foreground hover:border-primary/50 hover:text-primary transition-all duration-300">{tag}</span>
                            ))}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            {/* CTA */}
            <div className="text-center mt-12 animate-fade-in animation-delay-500">
               <a href="https://github.com/ChathuraSamarakoon"> <AnimatedBorderButton >
                    View All Projects
                    <ArrowUpRight className="w-5 h-5" />
                </AnimatedBorderButton>
                </a>

            </div>
        </div>
        
    </section>
);

    
}