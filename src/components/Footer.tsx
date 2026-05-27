import { Github, Linkedin, Mail, Heart, ArrowUp } from 'lucide-react';
import { personalInfo } from '@/data/personal';
import profileImage from '@/assets/santhosh-profile1.jpg';

export function Footer() {
  const scrollToTop = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-background pt-20 pb-10 border-t border-white/10 overflow-hidden">
      {/* Decorative Grid */}
      <div className="absolute inset-0 grid-bg opacity-10 pointer-events-none" />
      
      <div className="container-custom relative z-10 px-6">
        <div className="grid md:grid-cols-3 gap-12 mb-16">
          
          {/* Brand */}
          <div className="md:col-span-1">
            <a href="#" onClick={scrollToTop} className="inline-block mb-6 overflow-hidden rounded-full border border-white/10 w-12 h-12 hover:border-accent/50 transition-colors" aria-label="Back to top">
              <img src={profileImage} alt="Santhosh VS" className="w-full h-full object-cover filter grayscale hover:grayscale-0 transition-all duration-500" />
            </a>
            <p className="text-muted-foreground leading-relaxed max-w-sm mb-6">
              Building premium, cinematic digital experiences that merge cutting-edge technology with immersive design.
            </p>
            <div className="flex items-center gap-4">
              <a 
                href={personalInfo.socials.github} 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-muted-foreground hover:text-white hover:bg-white/10 hover:border-white/20 transition-all duration-300"
                aria-label="GitHub"
              >
                <Github size={18} />
              </a>
              <a 
                href={personalInfo.socials.linkedin} 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 hover:border-primary/30 transition-all duration-300"
                aria-label="LinkedIn"
              >
                <Linkedin size={18} />
              </a>
              <a 
                href={`mailto:${personalInfo.email}`}
                className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-muted-foreground hover:text-accent hover:bg-accent/10 hover:border-accent/30 transition-all duration-300"
                aria-label="Email"
              >
                <Mail size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold mb-6 font-heading tracking-wide">Quick Links</h4>
            <ul className="space-y-4">
              {['About', 'Skills', 'Projects', 'Experience'].map((link) => (
                <li key={link}>
                  <a 
                    href={`#${link.toLowerCase()}`}
                    className="text-muted-foreground hover:text-accent transition-colors text-sm uppercase tracking-wider font-mono"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h4 className="text-white font-bold mb-6 font-heading tracking-wide">Ready to connect?</h4>
            <a 
              href={`mailto:${personalInfo.email}`}
              className="inline-flex items-center gap-2 text-xl md:text-2xl font-medium text-white hover:text-primary transition-colors mb-4 border-b border-primary/30 hover:border-primary pb-1"
            >
              {personalInfo.email}
            </a>
            <p className="text-muted-foreground text-sm">
              Currently available for freelance opportunities and full-time roles.
            </p>
          </div>
        </div>

        {/* Bottom */}
        <div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-white/10">
          <p className="text-muted-foreground text-sm flex items-center gap-2 mb-4 md:mb-0">
            Crafted with <Heart size={14} className="text-red-500 animate-pulse" fill="currentColor" /> by Santhosh VS
          </p>
          
          <p className="text-muted-foreground text-sm font-mono">
            &copy; {new Date().getFullYear()} All Rights Reserved.
          </p>

          <a 
            href="#" 
            onClick={scrollToTop}
            className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-muted-foreground hover:text-white hover:bg-white/10 transition-all duration-300 mt-4 md:mt-0"
            aria-label="Back to top"
          >
            <ArrowUp size={18} />
          </a>
        </div>
      </div>
    </footer>
  );
}