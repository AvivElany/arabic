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
            <h5 className='hebrew'>{props.hebrew}</h5>
            <h4 className='taatik'>{props.taatik}</h4>
            <h5 className='arabic'>{props.arabic}</h5>
            {props.english && <h5 className='english'>{props.english}</h5>}
            {props.notice && <p className='notice'>{props.notice}</p>}
        </div>
    )
}
