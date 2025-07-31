import AboutMeSection from "./AboutMe"
import ContactSection from "./Contact"
import WorkSection from "./Work"
import SkillSection from "./Skills"
import EducationSection from "./Education"

function App() {
  return (
    <>
      <AboutMeSection active={false}/>
      <ContactSection active={false} />    
      <WorkSection active={true}/>
      <SkillSection active={true} />
      <EducationSection active={false} />
    </>
  )
}

export default App