import React from 'react';
import UserContext from './context/UserContext';
import NavBar from './components/NavBar';


function App() {

  const user = "Pavan Kumar";
  
  return (
    
    <UserContext.Provider value={user}>
      <div>
        <h1>This is My app</h1>
        <NavBar/>
      </div>
    </UserContext.Provider>
  )
}

export default App
