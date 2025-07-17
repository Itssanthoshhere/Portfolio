import { ArrowDown, Github, Linkedin, Mail, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import profileImage from "@/assets/santhosh-profile.jpg";

export function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-hero opacity-5"></div>
      <div className="absolute top-20 left-10 w-72 h-72 bg-accent/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-gold/10 rounded-full blur-3xl animate-pulse delay-1000"></div>

      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
          {/* Content */}
          <div className="text-center lg:text-left animate-fade-in">
            <div className="mb-6">
              <span className="text-accent font-semibold text-lg tracking-wide">Hello, I'm</span>
              <h1 className="text-5xl md:text-7xl font-bold mt-2 mb-4">
                <span className="text-gradient-primary">Santhosh VS</span>
              </h1>
              <h2 className="text-2xl md:text-3xl font-semibold text-foreground/80 mb-6">
                Frontend Developer &
                <span className="text-gradient-accent"> AI Enthusiast</span>
              </h2>
            </div>

            <p className="text-lg text-muted-foreground mb-8 max-w-2xl leading-relaxed">
              B.Tech Computer Science student passionate about creating beautiful, functional web applications.
              Actively learning and working with React, TypeScript, and modern frontend technologies, with a strong interest in AI and Machine Learning.
            </p>

            {/* Contact Info */}
            <div className="flex flex-col sm:flex-row flex-wrap gap-2 sm:gap-4 mb-8 justify-center lg:justify-start">
              <a
                href="mailto:santhosh02vs@gmail.com"
                className="flex items-center gap-2 text-muted-foreground hover:text-accent transition-colors duration-300 text-sm sm:text-base"
              >
                <Mail size={16} />
                <span className="break-all">santhosh02vs@gmail.com</span>
              </a>
              <a
                href="tel:+919940310662"
                className="flex items-center gap-2 text-muted-foreground hover:text-accent transition-colors duration-300 text-sm sm:text-base"
              >
                <Phone size={16} />
                +91 9940310662
              </a>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-8 justify-center lg:justify-start">
              <a href="#contact">
                <Button className="btn-hero w-full sm:w-auto">
                  Get In Touch
                </Button>
              </a>
              <a href="#projects">
                <Button className="btn-secondary-hero w-full sm:w-auto">
                  View Projects
                </Button>
              </a>
            </div>

            {/* Social Links */}
            <div className="flex gap-4 justify-center lg:justify-start">
              <a
                href="https://linkedin.com/in/santhoshvs"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-surface border border-border/50 hover:bg-accent hover:text-accent-foreground transition-all duration-300 hover:scale-110 hover:shadow-glow"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="https://github.com/Itssanthoshhere"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-surface border border-border/50 hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-110 hover:shadow-lg"
              >
                <Github size={20} />
              </a>
            </div>
          </div>

          {/* Profile Image */}
          <div className="flex justify-center lg:justify-end animate-scale-in">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-accent rounded-full blur-2xl opacity-30 animate-pulse"></div>
              <div className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-accent/20 shadow-2xl">
                <img
                  src={profileImage}
                  alt="Santhosh VS"
                  className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-700"
                />
              </div>
              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-accent rounded-full animate-bounce"></div>
              <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-gold rounded-full animate-bounce delay-500"></div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <a
            href="#about"
            className="flex flex-col items-center text-muted-foreground hover:text-accent transition-colors duration-300"
          >
            <span className="text-sm mb-2">Scroll Down</span>
            <ArrowDown size={20} />
          </a>
        </div>
      </div>
    </section>
  );
}