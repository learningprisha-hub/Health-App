import { useState, useEffect } from 'react'
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
const [geminisettings,setgeminisettings]=useState(()=>loadGeminiSettings())
const [checkwindow,setcheckwindow]=useState(null)
const [showprofile,setshowprofile]=useState(false)
useEffect(()=>{saveState(state)},[state])

function handlesetprofile(profile){
  setstate(previous=>({...previous,profile}))

  
}
function handleSaveCheckin(entry){
  const record={id:crypto.randomUUID(),date:new Date().toISOString(),...entry}
  setstate(previous=>({...previous,history:[record,...previous.history]}))


}
function handleSaveGemini(settings){
  setgeminisettings(settings)
  saveGeminiSettings(settings)
}
function handleResetData(){
  clearState()
  setstate(defaultstate())
  setshowprofile(false)
  setcheckwindow(null)
}
  return (
    <div className="">

    
    <Nav/>
    <Dashboard/>
    <About/>
    </div>
   
  )
}

export default App
