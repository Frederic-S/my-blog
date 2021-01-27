const Home = () => {
    const handleClick = () => {
        console.log('Hello, my friends')
    }
    return (
        <div className='home'>
            <h2>Home Page</h2>
            <button onClick={handleClick}>Click Me</button>
        </div>
    )
}

export default Home
