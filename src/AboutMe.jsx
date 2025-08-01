import { useEffect, useState } from "react"
import { MdEditNote as EditIcon} from "react-icons/md";

export default function AboutMeSection({active, onActivate}) {
    const [aboutMe, setAboutMe] = useState(() => {
        const localValue = localStorage.getItem("ABOUT_ME_ITEMS")
        if (localValue == null) return {name:"name", title:"title", bio:"bio"}

        return JSON.parse(localValue)
    })

    useEffect(() => {
        localStorage.setItem("ABOUT_ME_ITEMS", JSON.stringify(aboutMe))
    }, [aboutMe])                                                                                   

    function handleEdit(field, value) {
        setAboutMe(current => 
            ({...current, [field]: value})
        )
    }

    return (
        <section className="section section--about me" aria-label="about-me">
            {["name", "title", "bio"].map(field => (
                <EditableField
                    key={field}
                    label={field}
                    active={active}
                    value={aboutMe[field]}
                    tag={field === "bio" ? "p" : field === "title" ? "h2" : "h1"}
                    className={`${field}-field`}
                    handleEdit={handleEdit}
                />
            ))}
            {!active && <button className="btn" aria-label="edit-section" onClick={() => onActivate("about-me")}> <EditIcon /> About Me</button>}
        </section>
    )

}

export function EditableField({label, active, value, tag = "p", className = undefined, handleEdit}) {
    const Tag = tag

    return active ? (
        <input 
        className={`${className} ${className}--input`}  
        value={value} onChange={(e) => handleEdit(label, e.target.value)} 
        aria-label={label}
        />
    ) : (
        <Tag className={className}>{value}</Tag>
    )
}