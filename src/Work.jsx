import { useEffect, useState } from "react"
import { HistoryBlock } from "./HistoryBlock"
import { MdEditNote as EditIcon} from "react-icons/md";

export default function WorkSection({active, onActivate}) {
    const [history, setHistory] = useState(() => {
        const localValue = localStorage.getItem("WORK_HISTORY_ITEMS")
        if (localValue == null) return []

        return JSON.parse(localValue)
    })

    useEffect(() => {
        localStorage.setItem("WORK_HISTORY_ITEMS", JSON.stringify(history))
    }, [history])

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
            <h2 id="work-experience-heading" className="section__header">Work Experience</h2>
            <ul className="history-block-list">
            {history.map(entry => {
                return (
                    <HistoryBlock {...entry} key={entry.id} active={active} handleEdit = {handleEdit} handleSummaryEdit = {handleSummaryEdit} handleDelete={handleDelete}/>
                )
            })}
            </ul>
            {active ? 
            <button className="btn" onClick={createWorkBlock}>Add Work</button> : 
            <button className="btn" aria-label="edit-section" onClick={() => onActivate("work")}> <EditIcon /> Work History</button> }
        </section>
    )
}



