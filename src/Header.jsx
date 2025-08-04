export default function Header({saveAll, preview}) {
    return (
    <header>
        <h1>Odin CV</h1>
        <button className="btn" onClick={() => saveAll()}>Save All</button>
        <button className="btn" onClick={() => preview()}>Preview</button>
    </header>
    )
}