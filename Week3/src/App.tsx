// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'



// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vite.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.tsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

// export default App

import TextUpdater from "./components/Task1";
import SimpleForm from "./components/Task2";
import UserCard from "./components/Task3";
import CustomButton from "./components/Task4";
import LoginForm from "./components/Task5";

export default function App() {
  return (
    <div className="flex flex-col items-center space-y-4 p-8">
      <TextUpdater />
      <SimpleForm />
      <UserCard name="John Doe" email="john@example.com" />
      <CustomButton />
      <LoginForm />
    </div>
  );
}



