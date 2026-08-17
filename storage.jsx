const STATE_KEY = 'pip-website-state:v1'
const GEMINI_KEY = 'pip-website-gemini:v1'
export function loadState(){
    try{
        const raw=window.localStorage.getItem(STATE_KEY)
        return raw? JSON.parse(raw):null
    }
    catch{
        return null
    }
}
export function saveState(state){
    try{
        window.localStorage.setItem(STATE_KEY,JSON.stringify(state))
    
    }
    catch{
        console.warn("could not save data")
    }
}
export function clearState(){
    try{
        window.localStorage.removeItem(STATE_KEY)
    
    }
    catch{
        console.warn("could not clear data")
    }
}
export function loadGeminiSettings() {
  try {
    const raw = window.localStorage.getItem(GEMINI_KEY)
    return raw ? JSON.parse(raw) : { apiKey: '', model: 'gemini-2.5-flash' }
  } catch {
    return { apiKey: '', model: 'gemini-2.5-flash' }
  }
}
export function saveGeminiSettings(settings) {
  window.localStorage.setItem(GEMINI_KEY, JSON.stringify(settings))
}