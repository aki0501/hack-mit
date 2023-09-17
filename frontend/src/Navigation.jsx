export default function Navbar() {
    return (
    <nav className="nav">
        <a href="/" className="site-title">Site Name</a>
        <ul>
            <li>
                <a href="/ElectedOfficials">Elected Officials</a>
            </li>
            <li>
                <a href="/Profile">Profile</a>
            </li>
        </ul>
    </nav>
    )
}