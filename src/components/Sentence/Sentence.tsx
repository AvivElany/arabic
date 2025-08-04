import './Sentence.css'

interface ISentenceProps {
  hebrew: string
  taatik: string
  arabic: string
  english?: string
  notice?: string
}

export default function Sentence(props: ISentenceProps) {
  return (
    <div className='sentence-card'>
      <p className="sentence hebrew">{props.hebrew}</p>
      <p className="sentence taatik">{props.taatik}</p>
      <p className="sentence arabic">{props.arabic}</p>
      {props.english && <p className="sentence english">{props.english}</p>}
      {props.notice && <p className="sentence notice">{props.notice}</p>}
    </div>
  )
}
