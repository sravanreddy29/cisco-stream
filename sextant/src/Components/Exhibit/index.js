import "./exhibit.css"

export default function (props) {
    const {title, children, mainStyles} = props

    return (
        <div className={"exhibit " + mainStyles}>
            <h2 className="title">{title}</h2>
            <div className="child-section">
                {children}
            </div>
        </div>
    )
}