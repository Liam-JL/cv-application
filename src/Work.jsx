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
            summary: ["Summary of your accomplishments in this position", 
                "Summary of your accomplishments in this position", 
                "Summary of your accomplishments in this position"]
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

    function handleSummaryEdit(id, index, newText) {
        setHistory(prev => 
            prev.map((entry) => {
                if (entry.id !== id) return entry

                const updatedSummary = [...entry.summary];
                updatedSummary[index] = newText;

                return {...entry, summary: updatedSummary}
            })
        )
    }

    function handleDelete(id) {
        setHistory(prev =>
            prev.filter(entry => entry.id !== id)
        )
    }

    return (
        <section className="section section--work" aria-labelledby="work-experience-heading">
            <h2 id="work-experience-heading">Work Experience</h2>
            <ul className="history-block-list">
            {history.map(entry => {
                return (
                    <HistoryBlock {...entry} key={entry.id} active={active} handleEdit = {handleEdit} handleSummaryEdit = {handleSummaryEdit} handleDelete={handleDelete}/>
                )
            })}
            </ul>
            {active ? <button onClick={createWorkBlock}>Add Work</button> : null}
        </section>
    )
}



