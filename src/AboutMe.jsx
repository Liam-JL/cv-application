import { useState } from "react"

export default function AboutMeSection({active}) {
    return (
        <section className="section section--about me" aria-label="about-me">
            <EditableField label={"Name"} active={active} tag="h1" className={"name-field"}/>
            <EditableField label={"Title"} active={active} tag="h2" className={"title-field"} />
            <EditableField label={"Bio"} active={active} tag="p" className={"bio-field"} />
        </section>
    )

}


export function EditableField({label, active, tag = "p", className = undefined}) {
    const [fieldValue, setFieldValue] = useState(label || "Test")
    const Tag = tag

    return active ? (
        <input 
        className={`${className} ${className}--input`}  
        value={fieldValue} onChange={(e) => setFieldValue(e.target.value)} 
        aria-label={label}
        />
    ) : (
        <Tag className={className}>{fieldValue}</Tag>
    )
}