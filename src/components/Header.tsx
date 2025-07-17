import { useState, useEffect } from "react";
import { Menu, X, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "./ThemeToggle";

const navItems = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
  { href: "#contact", label: "Contact" },
];

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const downloadCV = () => {
    // Create a mock CV download - in real implementation, this would download an actual PDF
    const link = document.createElement('a');
    // link.href = '#';
    link.href = './src/assets/Resume.pdf'; // Put your PDF in public folder
    link.download = './src/assests/Resume.pdf';
    link.click();

    // For demo purposes, show an alert
    // alert('CV download would start here. Please provide the actual PDF file.');
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
        ? "bg-background/80 backdrop-blur-lg border-b border-border/50 shadow-lg"
        : "bg-transparent"
        }`}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between h-14 sm:h-16 px-4">
          {/* Logo */}
          <a
            href="#home"
            className="text-lg sm:text-xl lg:text-2xl font-bold text-gradient-primary hover:scale-105 transition-transform duration-300"
          >
            Santhosh VS
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-6 xl:space-x-8">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-foreground/80 hover:text-accent font-medium transition-colors duration-300 relative group"
              >
                {item.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-accent transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden lg:flex items-center space-x-4">
            <Button
              onClick={downloadCV}
              className="btn-hero flex items-center gap-2"
            >
              <Download size={16} />
              Download CV
            </Button>
            <ThemeToggle />
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center space-x-2">
            <ThemeToggle />
            <Button
              variant="outline"
              size="icon"
              onClick={() => setIsOpen(!isOpen)}
              className="rounded-full border-border/50 bg-surface/80 backdrop-blur-sm"
            >
              {isOpen ? <X size={20} /> : <Menu size={20} />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden bg-background/95 backdrop-blur-lg border-t border-border/50 animate-fade-in">
            <nav className="flex flex-col space-y-4 p-4">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="text-foreground/80 hover:text-accent font-medium transition-colors duration-300 py-2"
                >
                  {item.label}
                </a>
              ))}
              <Button
                onClick={() => {
                  downloadCV();
                  setIsOpen(false);
                }}
                className="btn-hero flex items-center gap-2 mt-4"
              >
                <Download size={16} />
                Download CV
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}