import { Code, Database, Wrench, Brain, Globe } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const skillCategories = [
  {
    title: "Frontend & Mobile Development",
    icon: Code,
    description: "Building responsive, interactive, and mobile-first applications",
    skills: [
      "React", "React Native", "Expo", "TypeScript", "JavaScript",
      "HTML5", "CSS3", "Tailwind CSS", "NativeWind", "Responsive Design",
      "React Three Fiber", "Next.js", "AOS Animations", "GSAP", "Swiper.js"
    ],
    color: "frontend"
  },
  {
    title: "Backend Development",
    icon: Database,
    description: "Developing scalable server-side applications and APIs",
    skills: [
      "Node.js", "Express", "Appwrite", "PostgreSQL", "MySQL", "MongoDB", "PHP",
      "Prisma ORM", "REST APIs", "Clerk Auth", "Geoapify", "Google Maps API"
    ],
    color: "backend"
  },
  {
    title: "Tools & Platforms",
    icon: Wrench,
    description: "Development, collaboration, and deployment tools",
    skills: [
      "Git", "GitHub", "Figma", "Stripe Payments", "Netlify", "Vercel",
      "Expo Go", "Vite", "Prismic CMS", "Sentry", "XAMPP", "LaTeX"
    ],
    color: "tools"
  },
  {
    title: "AI/ML & Programming",
    icon: Brain,
    description: "Artificial Intelligence concepts and core programming skills",
    skills: [
      "Machine Learning", "NLP (Basic)", "Computer Vision",
      "Python", "Java", "C++"
    ],
    color: "aiml"
  }
];

const languages = [
  { name: "English", level: "Fluent" },
  { name: "Hindi", level: "Fluent" },
  { name: "Tamil", level: "Native" },
  { name: "Telugu", level: "Conversational" }
];

export function Skills() {
  const getColorClasses = (color: string) => {
    switch (color) {
      case "frontend":
        return "bg-blue-50 text-blue-600 border-blue-200 dark:bg-blue-950/20 dark:text-blue-400 dark:border-blue-800/30";
      case "backend":
        return "bg-emerald-50 text-emerald-600 border-emerald-200 dark:bg-emerald-950/20 dark:text-emerald-400 dark:border-emerald-800/30";
      case "tools":
        return "bg-orange-50 text-orange-600 border-orange-200 dark:bg-orange-950/20 dark:text-orange-400 dark:border-orange-800/30";
      case "aiml":
        return "bg-purple-50 text-purple-600 border-purple-200 dark:bg-purple-950/20 dark:text-purple-400 dark:border-purple-800/30";
      default:
        return "bg-accent/10 text-accent border-accent/20";
    }
  };

  const getIconColorClasses = (color: string) => {
    switch (color) {
      case "frontend":
        return "text-blue-600 dark:text-blue-400";
      case "backend":
        return "text-emerald-600 dark:text-emerald-400";
      case "tools":
        return "text-orange-600 dark:text-orange-400";
      case "aiml":
        return "text-purple-600 dark:text-purple-400";
      default:
        return "text-accent";
    }
  };

  return (
    <section id="skills" className="section-padding">
      <div className="container-custom">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Skills & <span className="text-gradient-accent">Technologies</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            A comprehensive overview of my technical skills and the tools I use to build
            modern, high-performance applications.
          </p>
        </div>

        {/* Technical Skills */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {skillCategories.map((category, index) => (
            <Card key={index} className="card-elevated p-8 animate-slide-up">
              <div className="flex items-start gap-4 mb-6">
                <div className={`p-3 rounded-xl ${getColorClasses(category.color)}`}>
                  <category.icon className={`w-6 h-6 ${getIconColorClasses(category.color)}`} />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2 text-gradient-primary">
                    {category.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {category.description}
                  </p>
                </div>
              </div>

              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill) => (
                  <Badge
                    key={skill}
                    variant="outline"
                    className="bg-surface border-border/50 hover:bg-accent hover:text-accent-foreground transition-all duration-300 hover:scale-105 py-2 px-4"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </Card>
          ))}
        </div>

        {/* Languages */}
        <div className="animate-fade-in">
          <Card className="card-elevated p-8">
            <div className="flex items-start gap-4 mb-6">
              <div className="p-3 bg-accent/10 rounded-xl">
                <Globe className="w-6 h-6 text-accent" />
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-2 text-gradient-primary">
                  Languages
                </h3>
                <p className="text-muted-foreground">
                  Multilingual communication abilities
                </p>
              </div>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {languages.map((language) => (
                <div
                  key={language.name}
                  className="p-4 bg-surface rounded-xl border border-border/50 hover:bg-accent/5 transition-colors duration-300"
                >
                  <div className="text-lg font-semibold text-foreground mb-1">
                    {language.name}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {language.level}
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </div>

        {/* Skill Highlights */}
        <div className="mt-16 text-center animate-fade-in">
          <h3 className="text-2xl font-semibold mb-8 text-gradient-primary">
            What I Bring to the Table
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-6">
              <div className="text-4xl font-bold text-primary mb-2">2+</div>
              <div className="text-lg font-medium mb-2">Years of Learning</div>
              <div className="text-muted-foreground">Hands-on development experience across multiple domains</div>
            </div>
            <div className="p-6">
              <div className="text-4xl font-bold text-primary mb-2">20+</div>
              <div className="text-lg font-medium mb-2">Technologies</div>
              <div className="text-muted-foreground">Spanning frontend, backend, mobile, and AI/ML</div>
            </div>
            <div className="p-6">
              <div className="text-4xl font-bold text-primary mb-2">8+</div>
              <div className="text-lg font-medium mb-2">Projects</div>
              <div className="text-muted-foreground">Real-world applications deployed for users</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
