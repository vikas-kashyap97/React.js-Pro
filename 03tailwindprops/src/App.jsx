import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import Crads from './components/Crads';

function App() {
  
  let myObj = {
    username: "Vikas",
    age: 22
  }
  let myArr = [1,2,3,4]

  return (
    <>
      <h1 className='bg-green-400 mb-4 rounded-xl'>Tailwind test</h1>
     <Crads username="Chai aur code" btnText="Visit Me!" />
     <Crads username="vikas" btnText="Click Me!"/>
    </>
  );
}

export default App;
