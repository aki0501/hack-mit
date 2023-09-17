import "../styles/Politician.css"

export default function Politician({ name, position, address, email, phone, photoLink }) {
    return (
        <div className="rep-container">
        <div className="rep-contents">
            <div className="rep-photo">
                <img width="100" src={photoLink} alt={`${name}'s photo`} />
            </div>
            <div className="rep-details">
                <div className="rep-name">
                    {name}
                </div>
                <div className="rep-position">
                    {position}
                </div>
                <div className="rep-address">
                    {address}
                </div>
                <div className="rep-email">
                    {email}
                </div>
                <div className="rep-phone">
                    {phone}
                </div>
            </div>
        </div>
    </div>
    )
}
