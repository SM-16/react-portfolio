import { use, useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

const Card = ({ title}) =>{
  const [hasLiked,  setHasLiked] = useState(false);
  useEffect(()=>{
    console.log(hasLiked)
  })
  return(
    <div style={{
      border: '2px solid #4b5362',
      borderRadius: '20px',
      padding:'2rem'
    }}>
      <h2>{title}</h2>
        {hasLiked ?
          <>
            <button onClick={()=> setHasLiked(!hasLiked)} style={{backgroundColor:"black", color:"white"}}>
              <p style={{backgroundColor:"black", color:"white"}}>Liked</p>
            </button>
          </> 
          : 
          <>
            <button onClick={()=> setHasLiked(!hasLiked)}>
              <p >Like</p>
            </button>          
            </>
          }
    </div>
  )
}
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className=''>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <div className='card-container'>
        <Card title={"Hello"}/>
        <Card title={"World"}/>
        <Card title={"I'm here"}/>
      </div>
    </>
  )
}

export default App
