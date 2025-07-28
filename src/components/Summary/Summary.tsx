import './Summary.css'

interface ISummaryProps {
    summary: string;
}

export default function Summary(props: ISummaryProps) {

    return (
        <div className='Summary'>
            {props.summary}
        </div>
    )
}
