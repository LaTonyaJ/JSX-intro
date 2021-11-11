const Person = (props) => {
    return (
        <div>
            <p>Learn some information about this person</p>
            <h3>{props.name.length > 8 ? props.name.slice(0, 6) : props.name}</h3>
            <h3>{props.age > 18 ? "Please Go vote!" : "You must be 18!"}</h3>
            <ul>{props.hobbies.map(h => <li>{h}</li>)}</ul>
        </div>
    )
} 