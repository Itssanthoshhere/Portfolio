import { ExternalLink, Github, Calendar, Code } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import hvfProject from "@/assets/hvf-project.jpg";
import sweetBiteProject from "@/assets/sweet-bite-project.png";
import fizzi3DProject from "@/assets/Fizzi.png"
import rdyepreview from "@/assets/rdye-preview.mp4"
import rdyeProject from "@/assets/splash.png"
import Fizzi from "@/assets/Fizzi.mp4"

const projects = [
  {
    title: "Sweet Bite – Bakery Website",
    description: "Fully responsive bakery website featuring product showcase, testimonial section, and contact form. Built with HTML5, CSS3, and JavaScript with focus on user-friendly layout and cross-device compatibility.",
    longDescription: "An elegant and modern bakery website showcasing delicious products with beautiful imagery, customer testimonials, and seamless user experience across all devices.",
    image: sweetBiteProject,
    technologies: ["HTML5", "CSS3", "JavaScript", "Responsive Design"],
    features: [
      "Beautiful product showcase with image galleries",
      "Customer testimonials and reviews section",
      "Contact form with validation",
      "Fully responsive design",
      "Smooth animations and transitions",
      "SEO optimized structure"
    ],
    githubUrl: "https://github.com/Itssanthoshhere/Sweet-Bite",
    liveUrl: "https://sweet-bite-ruby.vercel.app/",
    duration: "Oct 2024",
    category: "Frontend Website"
  },
  {
    title: "HVF e-Leave Portal – React Edition",
    description: "Web-based leave management system developed during In-Plant Training at HVF, Avadi. Built with React, TypeScript, Tailwind CSS, and Vite with modular component structure and reusable hooks.",
    longDescription: "A comprehensive leave management system designed for government sector use at Heavy Vehicles Factory (HVF), Avadi. Features secure authentication, role-based access control, leave tracking, and administrative approval workflows.",
    image: hvfProject,
    technologies: ["React", "TypeScript", "Tailwind CSS", "Vite", "Node.js"],
    features: [
      "Secure user authentication and role-based access",
      "Comprehensive leave tracking and management",
      "Administrative approval workflows",
      "Real-time notifications and status updates",
      "Responsive design for all devices",
      "Modular component architecture"
    ],
    githubUrl: "https://github.com/Itssanthoshhere/HVF-e-Leave-Portal",
    liveUrl: "https://hvf-e-leave-portal.vercel.app/",
    duration: "June 2025",
    category: "Full-Stack Application"
  },
  {
    title: "Fizzi 🥤 – A 3D Soda Can Web Experience",
    description: "Interactive 3D soda can animation website built with React Three Fiber, Next.js App Router, and Prismic CMS. A fun, fizzy, and fully responsive splash experience for products or portfolios.",
    longDescription: "Fizzi 🥤 is a visually immersive 3D soda can experience built with React Three Fiber and powered by Prismic CMS. Designed as a creative product splash or personal branding demo, it features animated UI, custom SVGs, and CMS-editable content. Leveraging Next.js App Router, the site delivers seamless routing, responsiveness, and performance — all wrapped in fizzy visual delight.",
    image: fizzi3DProject,
    // video: Fizzi,
    technologies: ["React Three Fiber", "Next.js", "Prismic CMS", "Tailwind CSS", "JavaScript", "SVG"],
    features: [
      "3D soda can animations with React Three Fiber",
      "CMS-powered content via Prismic",
      "Next.js App Router for fast routing and rendering",
      "Animated UI and custom SVG graphics",
      "Fully responsive and mobile-friendly layout",
      "Perfect as a product splash or creative portfolio intro"
    ],
    githubUrl: "https://github.com/Itssanthoshhere/Fizzi",
    liveUrl: "https://fizzi-soda-for-gusty-people.vercel.app/",
    duration: "July 2025",
    category: "3D Web Experience"
  },
  {
    title: "Rdye 🚖 – Full Stack Cab Booking App",
    description: "A ride-booking mobile app built with React Native, Expo, Stripe, Google Maps, and PostgreSQL. Offers a smooth Uber-like experience with real-time tracking, secure payments, and user-friendly design.",
    longDescription: "Rdye is a full-featured ride-booking application that replicates the Uber experience using a modern tech stack. Built with React Native and Expo, it includes real-time map tracking, Stripe-based payments, secure authentication with Clerk, and PostgreSQL database hosted via NeonDB. It’s crafted with clean UI using NativeWind (Tailwind CSS for React Native) and offers an end-to-end cab booking experience on both Android and iOS devices. This project highlights scalable mobile app architecture, smooth animations, and production-level features.",
    // video: rdyepreview, // MP4 video preview path
    image: rdyeProject, // fallback image if video isn't available
    technologies: [
      "React Native", "Expo", "PostgreSQL", "Stripe",
      "Google Maps API", "Prisma", "Clerk Auth",
      "Tailwind CSS (NativeWind)", "Zustand", "Geoapify"
    ],
    features: [
      "Smooth onboarding and authentication flow",
      "Email/password and Google OAuth with Clerk",
      "Real-time location tracking on Google Maps",
      "Search rides using Google Places Autocomplete",
      "Select, confirm, and pay for rides via Stripe",
      "Post-payment ride creation and booking",
      "Recent rides and full ride history",
      "Responsive UI for Android and iOS",
      "Profile management and secure user access",
      "Modular codebase with reusable components"
    ],
    githubUrl: "https://github.com/Itssanthoshhere/Ryde",
    liveUrl: "https://expo.dev/@itssanthoshhere/ryde",
    duration: "August 2025",
    category: "Full-Stack Mobile App"
  }


];

export function Projects() {
  return (
    <section id="projects" className="section-padding bg-surface/30">
      <div className="container-custom">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Featured <span className="text-gradient-accent">Projects</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            A showcase of my recent work demonstrating expertise in modern web development,
            from full-stack applications to responsive frontend designs.
          </p>
        </div>

        <div className="grid lg:grid-cols-1 gap-12">
          {projects.map((project, index) => (
            <Card key={index} className="card-project overflow-hidden animate-slide-up">
              <div className="grid lg:grid-cols-2 gap-0">
                {/* Project Image */}
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-64 lg:h-full object-fill transform group-hover:scale-110 transition-transform duration-700"
                  />

                  {/* {project.video ? (
                    <video
                      width="100%"
                      height="100%"
                      controls
                      autoPlay
                      muted
                      loop
                      className="w-full h-64 lg:h-full object-fill transform group-hover:scale-110 transition-transform duration-700"
                    >
                      <source src={project.video} type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                  ) : (
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-64 lg:h-full object-fill transform group-hover:scale-110 transition-transform duration-700"
                    />
                  )} */}

                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="absolute top-4 right-4">
                    <Badge className="bg-accent text-accent-foreground">
                      {project.category}
                    </Badge>
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-8 lg:p-12">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
                    <Calendar size={16} />
                    <span>{project.duration}</span>
                  </div>

                  <h3 className="text-2xl lg:text-3xl font-bold mb-4 text-gradient-primary">
                    {project.title}
                  </h3>

                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {project.longDescription}
                  </p>

                  {/* Features */}
                  <div className="mb-6">
                    <h4 className="font-semibold mb-3 flex items-center gap-2">
                      <Code size={16} className="text-accent" />
                      Key Features
                    </h4>
                    <ul className="space-y-2">
                      {project.features.slice(0, 4).map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-3 text-sm text-muted-foreground">
                          <div className="w-1.5 h-1.5 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Technologies */}
                  <div className="mb-8">
                    <h4 className="font-semibold mb-3">Technologies Used</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <Badge
                          key={tech}
                          variant="outline"
                          className="bg-surface border-border/50 hover:bg-accent hover:text-accent-foreground transition-colors duration-300"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button
                      asChild
                      className="btn-hero flex items-center gap-2"
                    >
                      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink size={16} />
                        Live Demo
                      </a>
                    </Button>
                    <Button
                      asChild
                      variant="outline"
                      className="btn-secondary-hero flex items-center gap-2"
                    >
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                        <Github size={16} />
                        View Code
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16 animate-fade-in">
          <p className="text-lg text-muted-foreground mb-6">
            Want to see more of my work or collaborate on a project?
          </p>
          <Button asChild className="btn-hero">
            <a href="https://github.com/Itssanthoshhere" target="_blank" rel="noopener noreferrer">
              <Github size={16} className="mr-2" />
              View All Projects on GitHub
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}