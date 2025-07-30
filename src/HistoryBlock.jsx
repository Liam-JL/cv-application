export function HistoryBlock({ active, id, title, company, location, dates, summary, handleEdit }) {

    return active ? (
        <li>
                <input name="title" type="text" value={title} onChange={e => handleEdit(id, "title", e.target.value)} />
                <input name="company" type="text" value={company} onChange={e => handleEdit(id, "company", e.target.value)} />
                <input name="location" type="text" value={location} onChange={e => handleEdit(id, "location", e.target.value)} />
                <input name="dates" type="text" value={dates} onChange={e => handleEdit(id, "dates", e.target.value)} />
        </li>
    ) : (
        <li>
            <h3>{title}</h3>
            <p>{company}</p>
            <p>{location}</p>
            <p>{dates}</p>
        </li>
    )
}

