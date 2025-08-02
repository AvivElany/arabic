import './Sentence.css'
import { useEffect, useState } from 'react'
import { FaVolumeUp } from 'react-icons/fa'

interface ISentenceProps {
  hebrew: string
  taatik: string
  arabic: string
  english?: string
  notice?: string
}

export default function Sentence(props: ISentenceProps) {
  const [isSpeaking, setIsSpeaking] = useState(false)
  const [voice, setVoice] = useState<SpeechSynthesisVoice | null>(null)

  useEffect(() => {
    const loadVoices = () => {
      const voices = speechSynthesis.getVoices()
      const arabicVoice = voices.find(v =>
        v.lang.startsWith('ar') &&
        (v.name.toLowerCase().includes('google') ||
         v.name.toLowerCase().includes('arabic') ||
         v.lang.includes('AE') || v.lang.includes('SA') || v.lang.includes('IL'))
      )
      setVoice(arabicVoice || null)
    }

    if (speechSynthesis.getVoices().length === 0) {
      speechSynthesis.onvoiceschanged = loadVoices
    } else {
      loadVoices()
    }
  }, [])

  const handlePlay = () => {
    if (!voice) {
      alert("הדפדפן לא תומך בקול ערבי. נסה דפדפן אחר או הפעל שפות דיבור.")
      return
    }

    const utterance = new SpeechSynthesisUtterance(props.arabic)
    utterance.lang = voice.lang
    utterance.voice = voice
    utterance.onstart = () => setIsSpeaking(true)
    utterance.onend = () => setIsSpeaking(false)

    speechSynthesis.cancel()
    speechSynthesis.speak(utterance)
  }

  return (
    <div className={`Sentence ${isSpeaking ? 'speaking' : ''}`}>
      <div className="sentence-body">
        <p className="hebrew">{props.hebrew}</p>
        <p className="taatik">{props.taatik}</p>
        <p className="arabic">{props.arabic}</p>
        {props.english && <p className="english">{props.english}</p>}
        {props.notice && <p className="notice">{props.notice}</p>}
      </div>
      <button className="speak-button" onClick={handlePlay} disabled={isSpeaking}>
        <FaVolumeUp className="icon" />
      </button>
    </div>
  )
}
