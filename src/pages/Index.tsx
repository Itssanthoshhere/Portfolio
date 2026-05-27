import { MainLayout } from "@/layouts/MainLayout";
import { 
  HeroSection, 
  AboutSection, 
  SkillsSection, 
  ProjectsSection, 
  ExperienceSection, 
  AchievementsSection, 
  ContactSection 
} from "@/sections";

const Index = () => {
  return (
    <MainLayout>
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <ExperienceSection />
      {/* <AchievementsSection /> */}
      <ContactSection />
    </MainLayout>
  );
};

export default Index;
