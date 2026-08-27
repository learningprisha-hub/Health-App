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
function scrollToSection(id){
  document.getElementById(id)?.scrollIntoView({behavior:"smooth"})


}
const latestEntry=state.history[0]
const latestvitals=latestEntry?{symptoms:latestEntry.symptoms,mood:latestEntry.mood,temperature:latestEntry.temperature,heartRate:latestEntry.heartRate}
:null
return (
    <div className="">

    
    <Nav
    profile={state.profile}
    onOpenProfile={()=>setshowprofile(true)}
    onGetStarted={()=>setcheckwindow("check")}
    onNavigate={scrollToSection}
    />
    <Dashboard
     profile={state.profile}
     history={state.history}
     onOpenHistory={()=>setcheckwindow("history")}
     onGetStarted={()=>setcheckwindow("check")}
    />
    <About/>
    </div>
   
  )
}

export default App
