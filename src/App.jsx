import AboutMeSection from "./AboutMe"
import ContactSection from "./Contact"
import WorkSection from "./Work"
import SkillSection from "./Skills"
import EducationSection from "./Education"
import Header from "./Header"
import { useState } from "react"

function App() {
  const [activeSection, setActiveSection] = useState("")

  function onActivate(section) {
    setActiveSection(section)
  }  

  function saveAll() {
    setActiveSection("")
  }

  function preview() {
    window.print()
  }

  return (
    <div className="app-container">
      <Header saveAll={saveAll} preview={preview}/>
      <AboutMeSection active={activeSection === "about-me"} onActivate={onActivate}/>
      <ContactSection active={activeSection === "contact" } onActivate={onActivate} />    
      <WorkSection active={activeSection === "work"} onActivate={onActivate}/>
      <SkillSection active={activeSection === "skill"} onActivate={onActivate} />
      <EducationSection active={activeSection === "education"} onActivate={onActivate}/>
    </div>
  )
}

export default App