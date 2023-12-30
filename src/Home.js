import { useState } from "react";


const Home = () => {
    
    const [name, setName] = useState("Okan");
    const [age,setAge]=useState(22)

    const handleClick= () => {
        setName("Berke");
        setAge(21);
    }
   
    
   
    return ( 
        <div className="Home">
                <h2>Homepage</h2>   
                <button onClick={handleClick}>Click me</button>
                <h2>{name} is {age} years old.</h2>
                
                

                
        </div>
        
     );
}
 
export default Home;