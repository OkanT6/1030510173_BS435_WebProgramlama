const Home = () => {
    
    const handleClick= (e) => {
        console.log("You've just clicked the button" , e);
    }
    const handleClickAgain=( name,e)=>{
            console.log("hello "+ name ,e.target);
    };
    return ( 
        <div className="Home">
                <h2>Homepage</h2>
                <button onClick={handleClick}>Click me</button>
                <button onClick={(e)=> {handleClickAgain("Okan",e) }}>Click me again</button>
        </div>
        
     );
}
 
export default Home;