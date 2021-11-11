const App = () => {
    return (
        <div>
        <Person name="LaTonya" age={31} hobbies={['learning', 'music', 'yoga']}/>
        <Person name="Jordan" age={10} hobbies={['youtube', 'snacking', 'baseball']} />
        <Person name="Bernardon" age={65} hobbies={['golf', 'church', 'walks']}/>
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById('root'));