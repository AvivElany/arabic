import './Sentence.css'

interface ISentenceProps {
    hebrew: string;
    taatik: string;
    arabic: string;
    english?: string;
    notice?: string;
}

export default function Sentence(props: ISentenceProps) {

    return (
        <div className='Sentence'>
            <h5>{props.hebrew}</h5>
            <h4>{props.taatik}</h4>
            <h5>{props.arabic}</h5>
            {props.english && <h5>{props.english}</h5>}
            {props.notice && <p className='notice'>{props.notice}</p>}
        </div>
    )
}
