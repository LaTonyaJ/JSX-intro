const App = () => {
    const today= new Date();
    return (
        <div>
        <Tweet name="LaTonya" username="tink870" date='11/10/21' body="Learning to use React"/>
        <Tweet name="Jordan" username="JWhite518" date="5/18/21" body="It's my Birthday! I'm 10!!!"/>
        <Tweet name="Rick" username="morty" date="Saturday, November 6, 2021" body="What a beautiful day to code.."/>
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById('root'));