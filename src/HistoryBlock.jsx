export function HistoryBlock({ active, id, title, company, location, dates, summary, handleEdit, handleSummaryEdit, handleDelete }) {

    return active ? (
        <li className="history-block">
                <input className="history-block__input history-block__title" name="title" type="text" value={title} onChange={e => handleEdit(id, "title", e.target.value)} />
                <input className="history-block__input history-block__company" name="company" type="text" value={company} onChange={e => handleEdit(id, "company", e.target.value)} />
                <input className="history-block__input history-block__dates" name="dates" type="text" value={dates} onChange={e => handleEdit(id, "dates", e.target.value)} />
                <input className="history-block__input history-block__location" name="location" type="text" value={location} onChange={e => handleEdit(id, "location", e.target.value)} />
                <ul className="history-block__summary-list">
                    {summary.map((point, index) => 
                        <li>
                            <input 
                            className="history-block__input history-block__summary-point"
                            key={index}
                            type="text"
                            value={point}
                            onChange={(e) => handleSummaryEdit(id, index, e.target.value)}
                            />
                        </li>
                        )}
                </ul>
                <button className="btn" onClick={() => handleDelete(id)}>Delete Block</button>
        </li>
    ) : (
        <li className="history-block">
            <h3 className="history-block__title">{title}</h3>
            <p className="history-block__company">{company}</p>
            <p className="history-block__dates">{dates}</p>
            <p className="history-block__location">{location}</p>
            <ul className="history-block__summary-list">
                {summary.map(point => <li className="history-block__summary-point">{point}</li>)}
            </ul>
        </li>
    )
}

