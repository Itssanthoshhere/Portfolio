import { GraduationCap, MapPin, Calendar } from "lucide-react";
import { Card } from "@/components/ui/card";

export function About() {
  return (
    <section id="about" className="section-padding bg-surface/30">
      <div className="container-custom">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            About <span className="text-gradient-accent">Me</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            I'm a passionate Computer Science student specializing in Artificial Intelligence,
            with hands-on experience in full-stack development and a keen interest in creating
            innovative solutions.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Personal Info */}
          <div className="animate-slide-up">
            <h3 className="text-2xl font-semibold mb-6 text-gradient-primary">Get to know me!</h3>
            <div className="space-y-6">
              <p className="text-lg text-muted-foreground leading-relaxed">
                I'm currently pursuing my B.Tech in Computer Science & Engineering with a specialization
                in Artificial Intelligence at Bennett University. My journey in technology started with
                curiosity and has evolved into a passion for creating meaningful digital experiences.
              </p>

              <p className="text-lg text-muted-foreground leading-relaxed">
                Through my experiences as Team Co-Head of the Multimedia & Design Team at CodeChef BU
                and my internship at Heavy Vehicles Factory (HVF), I've developed strong leadership
                skills and practical knowledge in web development, particularly in React, TypeScript,
                and modern frontend technologies.
              </p>

              <p className="text-lg text-muted-foreground leading-relaxed">
                I'm passionate about combining creativity with technology to build applications that
                not only function well but also provide exceptional user experiences. I'm always
                eager to learn new technologies and take on challenging projects.
              </p>

              <div className="flex flex-wrap gap-2 sm:gap-4 mt-8 justify-center lg:justify-start">
                <span className="px-3 py-2 sm:px-4 bg-accent/10 text-accent rounded-full font-medium text-sm sm:text-base">
                  Frontend Development
                </span>
                <span className="px-3 py-2 sm:px-4 bg-gold/10 text-gold rounded-full font-medium text-sm sm:text-base">
                  AI/ML Enthusiast
                </span>
                <span className="px-3 py-2 sm:px-4 bg-primary/10 text-primary rounded-full font-medium text-sm sm:text-base">
                  UI/UX Design
                </span>
              </div>
            </div>
          </div>

          {/* Education */}
          <div className="animate-slide-up">
            <h3 className="text-2xl font-semibold mb-6 text-gradient-primary">Education</h3>
            <div className="space-y-6">
              <Card className="card-elevated p-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-accent/10 rounded-lg">
                    <GraduationCap className="w-6 h-6 text-accent" />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-xl font-semibold mb-2">B.Tech – Computer Science & Engineering (AI)</h4>
                    <p className="text-accent font-medium mb-2">Bennett University</p>
                    <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Calendar size={16} />
                        <span className="text-sm sm:text-base">Aug 2023 - Present</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin size={16} />
                        <span className="text-sm sm:text-base">Greater Noida</span>
                      </div>
                    </div>
                    <p className="text-muted-foreground mt-3">
                      Pursuing advanced studies in Computer Science with specialization in Artificial Intelligence,
                      focusing on machine learning, deep learning, and modern software development practices.
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="card-elevated p-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-gold/10 rounded-lg">
                    <GraduationCap className="w-6 h-6 text-gold" />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-xl font-semibold mb-2">12th Boards - Computer Science</h4>
                    <p className="text-gold font-medium mb-2">Kendriya Vidyalaya Island Grounds</p>
                    <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Calendar size={16} />
                        <span className="text-sm sm:text-base">Apr 2011 - May 2023</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin size={16} />
                        <span className="text-sm sm:text-base">Chennai</span>
                      </div>
                    </div>
                    <p className="text-muted-foreground mt-3">
                      Completed secondary education with focus on Computer Science, building strong
                      foundation in programming and computational thinking.
                    </p>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>

        {/* Languages */}
        <div className="mt-16 animate-fade-in">
          <h3 className="text-2xl font-semibold mb-8 text-center text-gradient-primary">Languages</h3>
          <div className="flex flex-wrap justify-center gap-2 sm:gap-4">
            {["English", "Hindi", "Tamil", "Telugu"].map((language) => (
              <div
                key={language}
                className="px-4 py-2 sm:px-6 sm:py-3 bg-surface border border-border/50 rounded-xl font-medium hover:bg-accent hover:text-accent-foreground transition-all duration-300 hover:scale-105 text-sm sm:text-base"
              >
                {language}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}