import { Mail, Phone, MapPin, Send, Github, Linkedin } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "santhosh02vs@gmail.com",
    link: "mailto:santhosh02vs@gmail.com",
    color: "accent"
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+91 9940310662",
    link: "tel:+919940310662",
    color: "accent"
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Chennai, Tamil Nadu, India",
    link: "#",
    color: "accent"
  }
];

const socialLinks = [
  {
    icon: Linkedin,
    label: "LinkedIn",
    url: "https://linkedin.com/in/santhoshvs",
    color: "accent"
  },
  {
    icon: Github,
    label: "GitHub",
    url: "https://github.com/Itssanthoshhere",
    color: "primary"
  }
];

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));

    // Create mailto link with form data
    const mailtoLink = `mailto:santhosh02vs@gmail.com?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    )}`;
    
    window.location.href = mailtoLink;

    toast({
      title: "Message Sent!",
      description: "Thank you for reaching out. I'll get back to you soon!",
    });

    setFormData({ name: "", email: "", subject: "", message: "" });
    setIsSubmitting(false);
  };

  const getIconColorClasses = (color: string) => {
    switch (color) {
      case "accent":
        return "text-accent";
      case "gold":
        return "text-gold-foreground";
      case "primary":
        return "text-primary";
      default:
        return "text-accent";
    }
  };

  const getHoverClasses = (color: string) => {
    switch (color) {
      case "accent":
        return "hover:bg-accent hover:text-accent-foreground";
      case "gold":
        return "hover:bg-gold hover:text-gold-foreground";
      case "primary":
        return "hover:bg-primary hover:text-primary-foreground";
      default:
        return "hover:bg-accent hover:text-accent-foreground";
    }
  };

  return (
    <section id="contact" className="section-padding bg-surface/30">
      <div className="container-custom">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Get In <span className="text-gradient-accent">Touch</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            I'm always open to discussing new opportunities, interesting projects, 
            or just having a chat about technology and innovation.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="animate-slide-up">
            <h3 className="text-2xl font-semibold mb-8 text-gradient-primary">
              Let's Connect
            </h3>
            
            <div className="space-y-6 mb-8">
              {contactInfo.map((item, index) => (
                <Card key={index} className="card-elevated p-6 hover:shadow-lg transition-all duration-300">
                  <a 
                    href={item.link}
                    className="flex items-center gap-4 group"
                  >
                    <div className={`p-3 bg-surface rounded-xl ${getIconColorClasses(item.color)}`}>
                      <item.icon className="w-6 h-6" />
                    </div>
                    <div>
                      <div className="font-medium text-foreground group-hover:text-accent transition-colors duration-300">
                        {item.label}
                      </div>
                      <div className="text-muted-foreground">
                        {item.value}
                      </div>
                    </div>
                  </a>
                </Card>
              ))}
            </div>

            {/* Social Links */}
            <div>
              <h4 className="font-semibold mb-4 text-foreground">Follow Me</h4>
              <div className="flex gap-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`p-4 bg-surface border border-border/50 rounded-xl ${getHoverClasses(social.color)} transition-all duration-300 hover:scale-110 hover:shadow-lg group`}
                    title={social.label}
                  >
                    <social.icon className={`w-6 h-6 ${getIconColorClasses(social.color)} group-hover:text-current`} />
                  </a>
                ))}
              </div>
            </div>

            {/* Call to Action */}
            <div className="mt-8 p-6 bg-gradient-accent rounded-2xl text-accent-foreground">
              <h4 className="font-bold text-lg mb-2">Ready to Work Together?</h4>
              <p className="mb-4 opacity-90">
                Whether you have a project in mind or just want to chat about technology, 
                I'd love to hear from you!
              </p>
              <div className="flex gap-2 text-sm opacity-90">
                <span>📧 Quick response</span>
                <span>•</span>
                <span>🚀 Ready to start</span>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="animate-slide-up">
            <Card className="card-elevated p-8">
              <h3 className="text-2xl font-semibold mb-6 text-gradient-primary">
                Send a Message
              </h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2 text-foreground">
                      Name *
                    </label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      className="bg-surface border-border/50 focus:border-accent focus:ring-accent"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2 text-foreground">
                      Email *
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      className="bg-surface border-border/50 focus:border-accent focus:ring-accent"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium mb-2 text-foreground">
                    Subject *
                  </label>
                  <Input
                    id="subject"
                    name="subject"
                    type="text"
                    required
                    value={formData.subject}
                    onChange={handleInputChange}
                    className="bg-surface border-border/50 focus:border-accent focus:ring-accent"
                    placeholder="What's this about?"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2 text-foreground">
                    Message *
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={5}
                    className="bg-surface border-border/50 focus:border-accent focus:ring-accent resize-none"
                    placeholder="Tell me about your project or just say hello..."
                  />
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn-hero w-full flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-4 h-4 border-2 border-accent-foreground/30 border-t-accent-foreground rounded-full animate-spin"></div>
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send size={16} />
                      Send Message
                    </>
                  )}
                </Button>
              </form>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}