import { useState } from "react"

export default function EducationSection({active}) {
    const [education, setEducation] = useState([])

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
            <h2 id="education-heading">Education</h2>
            {active ? <button className="btn" onClick={addEducation}>Add Education</button> : null}
            <ul>
                {education.map(entry =>
                    <EducationBlock {...entry} key={entry.id} active={active} handleEdit={handleEdit} deleteBlock={deleteEntry}/>
                )}
            </ul>
        </section>
    )
}

function EducationBlock({active, id, qualification, location, dates, handleEdit, deleteBlock}) {
    return active ? (
        <li>
            <input name="qualification" type="text" value={qualification} onChange={e => handleEdit(id, e.target.name, e.target.value)} />
            <input name="location" type="text" value={location} onChange={e => handleEdit(id, e.target.name, e.target.value)} />
            <input name="dates" type="text" value={dates} onChange={e => handleEdit(id, e.target.name, e.target.value)} />
            <button className="btn" onClick={() => deleteBlock(id)}>Delete Block</button>
        </li>
    ) : (
        <li>
            <h3>{qualification}</h3>
            <p>{location}</p>
            <p>{dates}</p>
        </li>
    )
}