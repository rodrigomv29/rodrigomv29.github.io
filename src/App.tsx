import React, {useState} from 'react';
import HelloWorld from './HelloWorld';
import LoginPage from './components/Login';

const App: React.FC = () => {
    const [user, setUser] = useState(undefined)
    if(!user){
        return <LoginPage onLogin={function (email: string, password: string): void {
            throw new Error('Function not implemented.');
        } }></LoginPage>
    }
    else{
        return (
            <div>
              <HelloWorld name="Rodrigo Morales (PAGE UNDER CONSTRUCTION..)" />
            </div>
          );

    }

  
};

export default App;