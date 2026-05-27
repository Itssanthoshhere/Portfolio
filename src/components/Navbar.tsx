import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { useScrollDirection } from '@/hooks/useScrollDirection';
import { MagneticButton } from '@/animations';
import profileImage from '@/assets/santhosh-profile1.jpg';

const navLinks = [
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Experience', href: '#experience' },
  { name: 'Contact', href: '#contact' },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const scrollDirection = useScrollDirection();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      // Determine active section
      const sections = navLinks.map(link => link.href.substring(1));
      let current = '';

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            current = section;
            break;
          }
        }
      }

      if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 50) {
        current = 'contact';
      }

      setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    // Initialize scroll state immediately on mount
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const navVariants = {
    hidden: { y: '-100%', opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { 
        type: 'spring',
        stiffness: 100,
        damping: 20
      }
    }
  };

  // Only hide navbar when scrolling down AND not at the very top AND not mobile menu open
  const isHidden = scrollDirection === 'down' && isScrolled && !isMobileMenuOpen;

  return (
    <>
      <motion.nav
        variants={navVariants}
        initial="visible"
        animate={isHidden ? 'hidden' : 'visible'}
        className={`fixed top-0 left-0 right-0 z-[90] transition-all duration-300 ${
          isScrolled 
            ? 'py-4 glass border-b border-white/5' 
            : 'py-6 bg-transparent'
        }`}
      >
        <div className="container-custom flex items-center justify-between px-6">
          {/* Logo */}
          <a 
            href="#" 
            onClick={(e) => scrollToSection(e, '#home')}
            className="z-50 clickable overflow-hidden rounded-full border border-white/10 w-10 h-10 hover:border-accent/50 transition-colors"
          >
            <img src={profileImage} alt="Santhosh VS" className="w-full h-full object-cover filter grayscale hover:grayscale-0 transition-all duration-500" />
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            <ul className="flex items-center gap-8">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={(e) => scrollToSection(e, link.href)}
                    className={`text-sm font-medium transition-colors hover:text-white clickable relative py-2 ${
                      activeSection === link.href.substring(1)
                        ? 'text-white'
                        : 'text-muted-foreground'
                    }`}
                  >
                    {link.name}
                    {activeSection === link.href.substring(1) && (
                      <motion.div
                        layoutId="activeSection"
                        className="absolute bottom-0 left-0 right-0 h-0.5 bg-accent"
                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                      />
                    )}
                  </a>
                </li>
              ))}
            </ul>

            <MagneticButton>
              <a 
                href="/Resume.pdf" 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn-secondary py-2 px-6 text-sm clickable"
              >
                Resume
              </a>
            </MagneticButton>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden z-50 text-white p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle Menu"
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-menu-overlay"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            id="mobile-menu-overlay"
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-[80] bg-background/95 backdrop-blur-md flex flex-col items-center justify-center"
          >
            <ul className="flex flex-col items-center gap-8 text-2xl font-heading font-medium">
              {navLinks.map((link) => (
                <motion.li 
                  key={link.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                >
                  <a
                    href={link.href}
                    onClick={(e) => scrollToSection(e, link.href)}
                    className={`transition-colors hover:text-accent clickable ${
                      activeSection === link.href.substring(1)
                        ? 'text-accent'
                        : 'text-white'
                    }`}
                  >
                    {link.name}
                  </a>
                </motion.li>
              ))}
              <motion.li
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="mt-4"
              >
                <a 
                  href="/Resume.pdf" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="btn-primary py-3 px-8 text-lg clickable"
                >
                  Download Resume
                </a>
              </motion.li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
