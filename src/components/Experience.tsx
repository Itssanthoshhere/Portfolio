import { Briefcase, Calendar, MapPin, ExternalLink } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const experiences = [
  {
    title: "UI/UX Designer",
    company: "Zonomo Technologies Private Limited",
    department: "Startup - Home Services Platform",
    location: "Greater Noida, India",
    duration: "May 2025 - July 2025 · 2 mos",
    type: "Internship",
    description: "Joined Zonomo, a startup revolutionizing home services access through a unified digital platform. Worked during the development and launch phase of this fast-paced tech startup, contributing to UI/UX design and user experience optimization.",
    responsibilities: [
      "Created clean and intuitive user experiences and user flows for the home services platform",
      "Collaborated with cross-functional teams to build Zonomo's MVP from scratch",
      "Participated in weekly review calls and contributed ideas toward UI/UX, tech, and strategy",
      "Designed user interfaces connecting households to verified professionals",
      "Leveraged AI tools and worked closely with the founding team on startup building",
      "Contributed to the development of a platform serving basic repairs to in-home healthcare services"
    ],
    technologies: ["Figma", "UI/UX Design", "User Research", "Prototyping", "Design Systems", "Startup Methodology"],
    mentor: "Shantanu Sharma - Founder, Zonomo Technologies",
    outcomes: [
      "Successfully contributed to MVP development during critical startup phase",
      "Gained hands-on experience in startup building and cross-functional collaboration",
      "Developed expertise in creating user-centered design solutions for service platforms"
    ]
  },
  {
    title: "In-Plant Trainee – Web Development",
    company: "Heavy Vehicles Factory (HVF), Avadi",
    department: "Ministry of Defence, Govt. of India",
    location: "Chennai, Tamil Nadu, India",
    duration: "Jun 2025 - Jun 2025 · 1 mo",
    type: "On-site",
    description: "Completed an intensive In-Plant Training at HVF, Avadi, one of India's premier defence manufacturing units. Contributed to the design and development of HVF e-Leave, a secure, intranet-based web application to manage employee leave requests and administrative approvals.",
    responsibilities: [
      "Developed HVF e-Leave, a full-stack Leave Management System for defence sector use",
      "Built secure, session-based role login system (Admin & Employee) using PHP & MySQL",
      "Designed and structured the leave tracking database via phpMyAdmin",
      "Developed user-friendly frontend interfaces using HTML, CSS, JavaScript",
      "Configured and deployed the application in a local server environment using XAMPP",
      "Applied business logic and restrictions for various leave types (CL, EL, HPL, ML, etc.)",
      "Collaborated in a diverse team of interns under professional industrial guidelines",
      "Authored a complete project report using LaTeX, emphasizing technical clarity and structure"
    ],
    technologies: ["HTML", "CSS", "JavaScript", "PHP", "MySQL", "XAMPP", "LaTeX"],
    mentor: "Shri V. Sekar – JWM(SG)/T, ITC, HVF Avadi",
    outcomes: [
      "Delivered a fully functional leave management system for internal demonstration",
      "Gained hands-on experience in full-stack web development and secure deployment",
      "Strengthened backend logic, validation workflows, and collaborative development skills"
    ]
  },
  {
    title: "Team Co-Head | Multimedia & Design Team",
    company: "CodeChef BU",
    department: "Bennett University",
    location: "Greater Noida, India",
    duration: "Sep 2024 – April 2025",
    type: "Leadership Role",
    description: "Led the Multimedia & Design Team, driving visual content creation for tech events and coordinating design strategies for one of the university's premier coding clubs.",
    responsibilities: [
      "Led the Multimedia & Design Team, driving visual content creation for tech events",
      "Designed social media posters, event banners, and coordinated design strategies",
      "Ensured consistent branding and collaborated with teams for outreach campaigns",
      "Managed a team of designers and coordinated with various departments",
      "Developed design guidelines and maintained brand consistency across all materials"
    ],
    technologies: ["Figma", "Canva", "Brand Design"],
    outcomes: [
      "Successfully increased event participation through effective visual communication",
      "Established standardized design processes for the organization",
      "Built strong collaborative relationships across different teams"
    ]
  },
  {
    title: "Frontend Intern – Personal Projects",
    company: "Self-Directed Learning",
    department: "Independent Study",
    location: "Remote",
    duration: "Aug 2024 – Present",
    type: "Ongoing",
    description: "Engaged in continuous learning and practical application of frontend development skills through personal projects and modern web development practices.",
    responsibilities: [
      "Created multiple frontend applications using HTML, CSS, JavaScript",
      "Practiced Git-based workflows, UI responsiveness, and clean coding standards",
      "Implemented modern React applications with TypeScript",
      "Focused on user experience and responsive design principles",
      "Deployed applications using modern platforms like Vercel and Netlify"
    ],
    technologies: ["React", "TypeScript", "HTML5", "CSS3", "JavaScript", "Git", "Vercel", "Netlify"],
    outcomes: [
      "Built a portfolio of production-ready web applications",
      "Developed proficiency in modern frontend development stack",
      "Gained experience in deployment and DevOps practices"
    ]
  }
];

export function Experience() {
  return (
    <section id="experience" className="section-padding">
      <div className="container-custom">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Professional <span className="text-gradient-accent">Experience</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            A journey through hands-on experience in web development, team leadership,
            and continuous learning in the tech industry.
          </p>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <Card key={index} className="card-elevated p-8 animate-slide-up">
              <div className="flex flex-col lg:flex-row lg:items-start gap-6">
                {/* Icon and Duration */}
                <div className="flex-shrink-0">
                  <div className="p-4 bg-accent/10 rounded-xl mb-4">
                    <Briefcase className="w-8 h-8 text-accent" />
                  </div>
                  <div className="text-sm text-muted-foreground space-y-1">
                    <div className="flex items-center gap-1">
                      <Calendar size={14} />
                      <span>{exp.duration}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <MapPin size={14} />
                      <span>{exp.type}</span>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1">
                  <div className="mb-4">
                    <h3 className="text-2xl font-bold mb-2 text-gradient-primary">
                      {exp.title}
                    </h3>
                    <div className="text-lg font-semibold text-accent mb-1">
                      {exp.company}
                    </div>
                    {exp.department && (
                      <div className="text-muted-foreground mb-2">
                        {exp.department}
                      </div>
                    )}
                    <div className="text-sm text-muted-foreground">
                      {exp.location}
                    </div>
                  </div>

                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {exp.description}
                  </p>

                  {/* Key Responsibilities */}
                  <div className="mb-6">
                    <h4 className="font-semibold mb-3 text-foreground">Key Responsibilities:</h4>
                    <ul className="space-y-2">
                      {exp.responsibilities.map((responsibility, idx) => (
                        <li key={idx} className="flex items-start gap-3 text-muted-foreground">
                          <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                          <span>{responsibility}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Technologies */}
                  <div className="mb-6">
                    <h4 className="font-semibold mb-3 text-foreground">Technologies Used:</h4>
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech) => (
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

                  {/* Mentor (if applicable) */}
                  {exp.mentor && (
                    <div className="mb-6">
                      <h4 className="font-semibold mb-2 text-foreground">Mentor:</h4>
                      <p className="text-muted-foreground">{exp.mentor}</p>
                    </div>
                  )}

                  {/* Outcomes */}
                  <div>
                    <h4 className="font-semibold mb-3 text-foreground">Key Outcomes:</h4>
                    <ul className="space-y-2">
                      {exp.outcomes.map((outcome, idx) => (
                        <li key={idx} className="flex items-start gap-3 text-muted-foreground">
                          <div className="w-2 h-2 bg-gold rounded-full mt-2 flex-shrink-0"></div>
                          <span>{outcome}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}