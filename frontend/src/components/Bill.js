import "../styles/Bill.css"

export default function Bill({title, body}) {
    return (
        <div className="bill-container">
            <div className="bill-title">
                {title}
            </div>
            <div className="bill-body">
                {body}
            </div>
            <div className="button-container">
                <button>
                    <a href="google.com">
                        Read more
                    </a>
                </button>
            </div>
        </div>
    )
}