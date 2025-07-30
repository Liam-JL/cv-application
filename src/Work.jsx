import { useState } from "react"
import { HistoryBlock } from "./HistoryBlock"

export default function WorkSection({active}) {
    const [history, setHistory] = useState([])

    function createWorkBlock() {
        const newEntry = {
            id: crypto.randomUUID(),
            title: "Job Title",
            company: "Company Name",
            location: "Location",
            dates: "Dates from - To",
            summary: ["summary point 1", "Summary point 2", "Summary point 3"]
        }

        setHistory(prev => {
            return [...prev, newEntry]
        })
    }

    function handleEdit(id, field, value) {
        setHistory(prev => 
            prev.map(entry => 
                entry.id === id ? {...entry, [field] : value} : entry
            )
        )
    }

    return (
        <section className="section section--work" aria-labelledby="work-experience">
            <h2 id="work-experience">Work Experience</h2>
            <ul className="history-block-list">
            {history.map(entry => {
                return (
                    <HistoryBlock {...entry} key={entry.id} active={active} handleEdit = {handleEdit} />
                )
            })}
            </ul>
            {active ? <button onClick={createWorkBlock}>Add Work</button> : null}
        </section>
    )
}



