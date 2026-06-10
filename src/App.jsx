import { useState } from 'react'
import CVDisplay from './components/CVDisplay'
import EducationForm from './components/EducationForm'
import ExperienceForm from './components/ExperienceForm'
import GeneralInfoForm from './components/GeneralInfoForm'
import Nav from './components/Nav'



function App() {

  const [general, setGeneral] = useState({name: "", email: "", phone: ""})
  const [education, setEducation] = useState([])
  const [experience, setExperience] = useState([])
  const [currentlyOpenedSection, setCurrentlyOpenedSection] = useState({
    general: false,
    education: false,
    experience: false
  })

  const toggleSection = (sectionKey, sectionValues) => {
    if(sectionValues !== undefined){
      if (sectionKey === 'general') setGeneral(sectionValues)
      else if (sectionKey === "education") setEducation(Array.isArray(sectionValues) ? sectionValues : [])
      else if (sectionKey === "experience") setExperience(Array.isArray(sectionValues) ? sectionValues : [])
    }
    setCurrentlyOpenedSection(prev => ({...prev, [sectionKey]: ! prev[sectionKey]}))
  }

  console.log("App", education)

  return (
    <>
    <Nav />
    <div id='app-main-container'>
      <div id='app-forms-container'>
        <GeneralInfoForm formData={general} visibilityToggleFunction={(data) => toggleSection("general", data)} visibilityBoolean={currentlyOpenedSection.general}/>
        <EducationForm formData={education} visibilityToggleFunction={(data) => toggleSection("education", data)} visibilityBoolean={currentlyOpenedSection.education}/>
        <ExperienceForm formData={experience} visibilityToggleFunction={(data) => toggleSection("experience", data)} visibilityBoolean={currentlyOpenedSection.experience}/>
      </div>
      <div id='app-display-container'>
        <CVDisplay general={general} education={education} experience={experience}/>
      </div>
    </div>
    </>
  )
}

export default App


