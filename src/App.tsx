import React from 'react'
import './App.css'
import logo from './logo.svg'

interface AppProps {}

function App({}: AppProps) {
  return (
    <div className="text-center">
      <header className="App-header text-white min-h-screen flex flex-col items-center justify-center">
        <img src={logo} className="App-logo pointer-events-none" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  )
}

export default App
