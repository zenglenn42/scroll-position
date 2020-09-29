import React from 'react'
import Demo1 from './components/Demo1/app1'
import Footer from './components/Footer'
import './App.css'

function App() {
  return (
    <div className="appFrame">
      <div className="grow1x" />
      <main className="main">
        <Demo1 />
      </main>
      <div className="grow2x" />
      <Footer />
    </div>
  )
}

export default App
