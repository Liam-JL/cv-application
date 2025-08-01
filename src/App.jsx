import AboutMeSection from "./AboutMe"
import ContactSection from "./Contact"
import WorkSection from "./Work"
import SkillSection from "./Skills"
import EducationSection from "./Education"
import { useState } from "react"

function App() {
  const [activeSection, setActiveSection] = useState("")

  function onActivate(section) {
    setActiveSection(section)
  }  

  return (
    <>
      <AboutMeSection active={activeSection === "about-me"} onActivate={onActivate}/>
      <ContactSection active={activeSection === "contact" } onActivate={onActivate} />    
      <WorkSection active={activeSection === "work"} onActivate={onActivate}/>
      <SkillSection active={activeSection === "skill"} onActivate={onActivate} />
      <EducationSection active={activeSection === "education"} onActivate={onActivate}/>
      <button className="btn" onClick={() => setActiveSection("")}>Save All</button>
    </>
  )
}

export default App