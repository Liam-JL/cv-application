import AboutMeSection from "./AboutMe"
import ContactSection from "./Contact"
import WorkSection from "./Work"

function App() {
  return (
    <>
      <AboutMeSection active={true}/>
      <ContactSection active={false} />    
      <WorkSection active={false}/>
    </>
  )
}

export default App
