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
                <div className="button-list">
                    <button className="button-container" onClick={() => window.location.href= billUrl}>
                            Read more
                    </button>
                    <button className="mail-button" onClick={() => window.location.href="/treemail"}>
                            Send a TreeMail
                    </button>
                </div>
            </div>
        </div>
    )
}