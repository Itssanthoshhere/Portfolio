import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SectionHeading, GlassCard } from '@/components';
import { FadeIn, TextReveal } from '@/animations';
import { Send, CheckCircle2, Mail, MapPin, Phone, Github, Linkedin, ExternalLink } from 'lucide-react';
import { personalInfo } from '@/data/personal';
import { useToast } from '@/hooks/use-toast';

export function ContactSection() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setIsSubmitting(true);

    try {
      const formData = new FormData(e.currentTarget);

      // Your Web3Forms Access Key
      formData.append(
        "access_key",
        import.meta.env.VITE_WEB3FORMS_ACCESS_KEY
      );

      // Optional
      formData.append("from_name", "Portfolio Contact");
      formData.append("subject", "New Portfolio Message");

      const response = await fetch(
        "https://api.web3forms.com/submit",
        {
          method: "POST",
          body: formData,
        }
      );

      const data = await response.json();

      if (data.success) {
        setIsSuccess(true);

        toast({
          title: "Message sent successfully!",
          description:
            "Thanks for reaching out. I'll get back to you soon.",
        });

        setTimeout(() => {
          setIsSuccess(false);
          e.currentTarget.reset();
        }, 5000);
      } else {
        throw new Error(data.message);
      }
    } catch (error) {
      console.error(error);

      toast({
        title: "Something went wrong.",
        description:
          "Please try again or contact me directly via email.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="section-padding relative z-10 bg-background overflow-hidden">
      {/* Decorative Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left Side: Info */}
          <div>
            <FadeIn>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass border-white/10 text-sm font-mono text-accent mb-6">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
                </span>
                Available for hire
              </div>
            </FadeIn>

            <TextReveal
              as="h2"
              text="Let's build something extraordinary together."
              className="text-4xl md:text-5xl lg:text-6xl font-bold font-heading text-white mb-6 leading-tight"
            />

            <FadeIn delay={0.2}>
              <p className="text-xl text-muted-foreground mb-12 max-w-lg leading-relaxed">
                Whether you have a project in mind, a team looking for a developer, or just want to chat about tech—I'm always open to new conversations.
              </p>
            </FadeIn>

            <div className="space-y-6">
              <FadeIn delay={0.3}>
                <a href={`mailto:${personalInfo.email}`} className="flex items-center gap-6 group">
                  <div className="w-14 h-14 rounded-full glass border-white/10 flex items-center justify-center text-primary group-hover:scale-110 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                    <Mail size={24} />
                  </div>
                  <div>
                    <p className="text-sm font-mono text-muted-foreground mb-1 uppercase tracking-widest">Email</p>
                    <p className="text-lg text-white font-medium group-hover:text-accent transition-colors">{personalInfo.email}</p>
                  </div>
                </a>
              </FadeIn>

              <FadeIn delay={0.4}>
                <div className="flex items-center gap-6">
                  <div className="w-14 h-14 rounded-full glass border-white/10 flex items-center justify-center text-accent">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <p className="text-sm font-mono text-muted-foreground mb-1 uppercase tracking-widest">Location</p>
                    <p className="text-lg text-white font-medium">{personalInfo.location}</p>
                  </div>
                </div>
              </FadeIn>
            </div>
          </div>

          {/* Right Side: Form */}
          <FadeIn delay={0.4} direction="left">
            <GlassCard className="p-8 md:p-10 relative overflow-hidden" hoverEffect={false}>
              {/* Form Success Overlay */}
              <AnimatePresence>
                {isSuccess && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="absolute inset-0 z-20 bg-surface/95 backdrop-blur-sm flex flex-col items-center justify-center text-center p-8"
                  >
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ type: "spring", damping: 12 }}
                      className="w-20 h-20 bg-success/20 text-success rounded-full flex items-center justify-center mb-6"
                    >
                      <CheckCircle2 size={40} />
                    </motion.div>
                    <h3 className="text-2xl font-bold font-heading text-white mb-2">Message Sent!</h3>
                    <p className="text-muted-foreground">Thank you for reaching out. I will get back to you within 24 hours.</p>
                  </motion.div>
                )}
              </AnimatePresence>

              <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium text-white/80">Full Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      disabled={isSubmitting}
                      className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/30 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-transparent transition-all"
                      placeholder="John Doe"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium text-white/80">Email Address</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      disabled={isSubmitting}
                      className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/30 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-transparent transition-all"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="subject" className="text-sm font-medium text-white/80">Subject</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    required
                    disabled={isSubmitting}
                    className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/30 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-transparent transition-all"
                    placeholder="Project Inquiry"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium text-white/80">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    disabled={isSubmitting}
                    className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/30 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-transparent transition-all resize-none"
                    placeholder="Tell me about your project..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full btn-primary py-4 flex items-center justify-center gap-2 group disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      <span>Sending...</span>
                    </>
                  ) : (
                    <>
                      <span>Send Message</span>
                      <Send size={18} className="group-hover:translate-x-1 transition-transform" />
                    </>
                  )}
                </button>
              </form>
            </GlassCard>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
