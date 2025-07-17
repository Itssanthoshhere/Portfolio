import { Heart, Github, Linkedin, Mail, ArrowUp } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-primary text-primary-foreground relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-accent/20 to-gold/20"></div>
      </div>

      <div className="container-custom relative z-10">
        <div className="py-12 px-4">
          <div className="grid md:grid-cols-3 gap-8 items-center">
            {/* Brand */}
            <div>
              <h3 className="text-2xl font-bold mb-4">Santhosh VS</h3>
              <p className="text-primary-foreground/80 mb-4">
                Frontend Developer & AI Enthusiast passionate about creating 
                beautiful, functional web applications.
              </p>
              <div className="flex gap-4">
                <a 
                  href="https://github.com/Itssanthoshhere" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-2 rounded-full bg-primary-foreground/10 hover:bg-accent hover:text-accent-foreground transition-all duration-300 hover:scale-110"
                >
                  <Github size={20} />
                </a>
                <a 
                  href="https://linkedin.com/in/santhoshvs" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-2 rounded-full bg-primary-foreground/10 hover:bg-accent hover:text-accent-foreground transition-all duration-300 hover:scale-110"
                >
                  <Linkedin size={20} />
                </a>
                <a 
                  href="mailto:santhosh02vs@gmail.com"
                  className="p-2 rounded-full bg-primary-foreground/10 hover:bg-accent hover:text-accent-foreground transition-all duration-300 hover:scale-110"
                >
                  <Mail size={20} />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <nav className="space-y-2">
                {['About', 'Experience', 'Projects', 'Skills', 'Contact'].map((item) => (
                  <a
                    key={item}
                    href={`#${item.toLowerCase()}`}
                    className="block text-primary-foreground/80 hover:text-accent transition-colors duration-300"
                  >
                    {item}
                  </a>
                ))}
              </nav>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="font-semibold mb-4">Get In Touch</h4>
              <div className="space-y-2 text-primary-foreground/80">
                <p>📧 santhosh02vs@gmail.com</p>
                <p>📱 +91 9940310662</p>
                <p>📍 Chennai, Tamil Nadu, India</p>
              </div>
              <Button
                onClick={scrollToTop}
                className="mt-4 bg-accent hover:bg-accent-hover text-accent-foreground flex items-center gap-2"
              >
                <ArrowUp size={16} />
                Back to Top
              </Button>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-primary-foreground/20 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-primary-foreground/60 text-center md:text-left">
              © 2025 Santhosh VS. All rights reserved.
            </p>
            <p className="text-primary-foreground/60 text-center md:text-right mt-4 md:mt-0 flex items-center gap-1">
              Made with <Heart size={16} className="text-accent" fill="currentColor" /> using React & TypeScript
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}