import { useState } from "react";
import { SYMPTOMS, MOODS, AVATARS } from "./sypmtomchecker";
import {getHealthInsight} from "../logic/healthlogic"
import Buddyavatar from "./Buddyavatar"
import AdviseCard from "./advisecard";

export default function Floatingcheckwindow({onClose,
  initialTab = 'check',
  profile,
  onSetProfile,
  history,
  onSaveCheckIn,
  geminiSettings,}){
    const [tab, setTab] = useState(profile ? initialTab : 'check')
  const [step, setStep] = useState(profile ? 'form' : 'profile')

  const [name,setname]=useState("")
  const [age, setAge] = useState(10)
  const [avatar, setAvatar] = useState(AVATARS[0])

  const [symptoms, setSymptoms] = useState([])
  const [mood, setMood] = useState(null)
  const [temperature, setTemperature] = useState(37.0)
  const [heartRate, setHeartRate] = useState(80)
  const [result, setResult] = useState(null)

  const [geminiText, setGeminiText] = useState('')
  const [geminiLoading, setGeminiLoading] = useState(false)
  const [geminiError, setGeminiError] = useState('')

  function toggleSymptom(id) {
    setSymptoms((prev) => (prev.includes(id) ? prev.filter((s) => s !== id) : [...prev, id]))
  }
  function handleProfileSubmit(e) {
    e.preventDefault()
    if (!name.trim()) return
    onSetProfile({ name: name.trim(), age: Number(age), avatar })
    setStep('form')
  }
  function handleVitalsSubmit(e) {
    e.preventDefault()
    const insight = getHealthInsight({ symptoms, temperature, heartRate, mood })
    setResult(insight)
    onSaveCheckIn({ symptoms, mood, temperature, heartRate, insight })
    setStep('result')
  }
function resetCheck() {
    setSymptoms([])
    setMood(null)
    setTemperature(37.0)
    setHeartRate(80)
    setResult(null)
    setGeminiText('')
    setGeminiError('')
    setStep('form')
  }
  
  }