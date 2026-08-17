import { useState } from 'react'
import Nav from "./components/Navebar"
import './App.css'
import Dashboard from './components/dashboard'
import About from './components/About'
import { clearState, loadGeminiSettings, loadState, saveGeminiSettings, saveState } from './utils/storage'
function defaultstate(){
  return {profile:null, history:[]}
}
function App() {
  const [state, setstate] = useState(()=>loadState()||defaultstate())

  return (
    <div className="">

    
    <Nav/>
    <Dashboard/>
    <About/>
    </div>
   
  )
}

export default App
