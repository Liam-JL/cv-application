import { useState } from "react";
import { TiDelete as DeleteIcon} from "react-icons/ti";

export default function SkillSection({active}) {
    const [skills, setSkills] = useState([])
    const [newItem, setNewItem] = useState("")


    function handleSubmit(e) {
        e.preventDefault()
        const newSkill = {id:crypto.randomUUID(), value:newItem}
        setSkills(currentSkills => 
        [...currentSkills, newSkill]
        )
        setNewItem("")
    }

    function deleteSkill(id) {
        setSkills(currentSkills => 
            currentSkills.filter(skill => skill.id !== id)
        )
    }
 
    return (
        <section className="section section--skills" aria-labelledby="skills-heading">
            <h2 id="skills-heading">Skills</h2>
            {active ? 
            <form className="new-skill-form"onSubmit={handleSubmit}>
                <input 
                type="text"
                value={newItem}
                onChange={(e) => setNewItem(e.target.value)}
                />
                <button className="btn">Add</button>
            </form> 
            : null}
            <ul>
                {skills.map(skill => 
                    <SkillItem  active={active} key={skill.id} id={skill.id} value={skill.value} deleteSkill={deleteSkill} />
                )}
            </ul>
        </section>
    )
}

export function SkillItem({active, id, value, deleteSkill}) {
    return (
        <li>
            {value}
            {active ? 
            <button 
            className="btn btn--delete-skill" 
            aria-label="delete"
            onClick={() => deleteSkill(id)}>
            <DeleteIcon />
            </button> : 
            null}
        </li>
    )
}