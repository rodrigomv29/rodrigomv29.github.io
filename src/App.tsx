import React, {useState} from 'react';
import HelloWorld from './HelloWorld';
import LoginPage from './components/Login';

const App: React.FC = () => {
    const [user, setUser] = useState(undefined)
    const [joke, setJoke] = useState('')

    const fetchJoke = async () => {
        try {
            const response = await fetch('https://icanhazdadjoke.com/', {
                headers: {
                    Accept: "application/json",
                },
            });
            const data = await response.json()
            setJoke(data.joke)
        }
        catch(error){
            console.error("Error")
            setJoke("Error fetching a joke");
        }
    };
    
    if(!user){
        return (
            <div>
              <HelloWorld name="Rodrigo Morales" />
              
            </div>
          );
    }
    else{
        return (
            <div>
                <button onClick={fetchJoke}>
                    Tell me a joke
                </button>
                {joke && <p>{joke}</p>}
            </div>
        )
        
    }

  
};

export default App;