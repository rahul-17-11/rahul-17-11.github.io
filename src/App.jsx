import AboutMeMain from "./components/aboutMeSection/AboutMeMain"
import ContactMeMain from "./components/contactMeSection/ContactMeMain"
import ExperienceMain from "./components/experienceSection/ExperienceMain"
import FooterMain from "./components/footer/FooterMain"
import HelperSection from "./components/HelperSection"
import HeroGradient from "./components/heroSection/HeroGradient"
import HeroMain from "./components/heroSection/HeroMain"
import SubHero from "./components/heroSection/SubHero"
import NavbarMain from "./components/navbar/NavbarMain"
import ProjectsMain from "./components/projectSection/ProjectsMain"
import SkillsMain from "./components/skillsSection/SkillsMain"
import SubSkill from "./components/skillsSection/SubSkill"

function App() {

  return (
    <main className="font-josefin">
      <NavbarMain />
      <HeroMain />
      <HeroGradient />
      <SubHero />
      <AboutMeMain />
      <SkillsMain />
      <SubSkill />
      <ExperienceMain />
      <ProjectsMain />
      <ContactMeMain />
      <FooterMain />
    </main>
  )
}

export default App
