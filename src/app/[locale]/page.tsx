import { Hero } from "@/components/hero";
import { About } from "@/components/about";
import { ProjectsSection } from "@/components/projects-section";
import { SkillsSection } from "@/components/skills-section";
import { JourneySection } from "@/components/journey-section";
import { EducationDetail } from "@/components/education-detail";
import { ExperienceDetail } from "@/components/experience-detail";

export default function HomePage() {
  return (
    <>
      <Hero />
      <About />
      <ProjectsSection />
      <SkillsSection />
      <JourneySection />
      <EducationDetail />
      <ExperienceDetail />
    </>
  );
}
