export default function Header({saveAll, preview}) {
    return (
    <header className="header">
        <h1 className="header__heading">Odin CV</h1>
        <span></span>
        <button className="btn" onClick={() => saveAll()}>Save All</button>
        <button className="btn" onClick={() => preview()}>Preview</button>
    </header>
    )
}