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
    <div className='Sentence'>
      <div className="sentence-body">
        <p className="hebrew">{props.hebrew}</p>
        <p className="taatik">{props.taatik}</p>
        <p className="arabic">{props.arabic}</p>
        {props.english && <p className="english">{props.english}</p>}
        {props.notice && <p className="notice">{props.notice}</p>}
      </div>
    </div>
  )
}
