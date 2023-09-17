import "../styles/Bill.css"

export default function Bill({title, body, billUrl}) {
    return (
        <div className="bill-container">
            <div className="bill-contents">
                <div className="bill-title">
                    {title}
                </div>
                <div className="bill-body">
                    {body}
                </div>
                <div>
                <button className="button-container" onClick={() => window.location.href= billUrl}>
                        Read more
                    </button>
                </div>
            </div>
        </div>
    )
}