import "./styles/styles.css"
import treeImg from './images/tree.svg';


export default function Navbar() {
    return (
    <nav className="nav">
        <img onClick={() => window.location.href="/"} className="site-title" src={treeImg} />
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