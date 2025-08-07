import { useEffect, useState } from "react"
import { MdEditNote as EditIcon} from "react-icons/md";

export default function EducationSection({active, onActivate}) {
    const [education, setEducation] = useState(() => {
        const localValue = localStorage.getItem("EDUCATION_ITEMS")
        if (localValue == null) return []
        return JSON.parse(localValue)
    })

    useEffect(() => {
        localStorage.setItem("EDUCATION_ITEMS", JSON.stringify(education))
    }, [education])
    
    function addEducation() {
        const newEntry = {
            id: crypto.randomUUID(),
            qualification: "Qualification",
            location: "Location",
            dates: "Dates to - from"
        }
        setEducation(current => [...current, newEntry])
    }

    function handleEdit(id, field, value) {
        setEducation(current => 
            current.map(entry => 
                entry.id === id? {...entry, [field] : value} : entry
            )
        )
    }

    function deleteEntry(id) {
        setEducation(current => 
            current.filter(entry => entry.id !== id)
        )
    }

    return (
        <section className="section section--education" aria-labelledby="education-heading">
            <h2 id="education-heading" className="section__header">Education</h2>
            
            <ul className="education-block-list">
                {education.map(entry =>
                    <EducationBlock {...entry} key={entry.id} active={active} handleEdit={handleEdit} deleteBlock={deleteEntry}/>
                )}
            </ul>
            {active && <button className="btn" onClick={addEducation}>Add Education</button>}
            {!active && <button className="btn" aria-label="edit-section" onClick={() => onActivate("education")}> <EditIcon />Education</button>}
        </section>
    )
}

function EducationBlock({active, id, qualification, location, dates, handleEdit, deleteBlock}) {
    return active ? (
        <li>
            <input className="education-block__field education-block__field--qualification" name="qualification" type="text" value={qualification} onChange={e => handleEdit(id, e.target.name, e.target.value)} />
            <input className="education-block__field education-block__field--location" name="location" type="text" value={location} onChange={e => handleEdit(id, e.target.name, e.target.value)} />
            <input className="education-block__field education-block__field--dates" name="dates" type="text" value={dates} onChange={e => handleEdit(id, e.target.name, e.target.value)} />
            <button className="btn" onClick={() => deleteBlock(id)}>Delete Block</button>
        </li>
    ) : (
        <li>
            <h3 className="education-block__field education-block__field--qualification">{qualification}</h3>
            <p className="education-block__field education-block__field--location">{location}</p>
            <p className="education-block__field education-block__field--dates">{dates}</p>
        </li>
    )
}