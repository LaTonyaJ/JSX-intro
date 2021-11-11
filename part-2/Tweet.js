const Tweet = (props) => {
    return (
        <div>
            <h3>Tweet by {props.username}({props.name})</h3>
            <p>{props.date}</p>
            <p>{props.body}</p>
        </div>
    )
}