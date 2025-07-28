import './Board.css'
import Sentence from '../Sentence/Sentence';

interface IBoardProps {
    data: {hebrew: string, taatik: string, arabic: string, english: string, }[];
}

export default function Board(props: IBoardProps) {

    return (
        <div className='Board'>
            {props.data.map((item, index) => (
                <div key={index} className='board-item'>
                    <Sentence
                        hebrew={item.hebrew}
                        taatik={item.taatik}
                        arabic={item.arabic}
                        english={item.english}
                    />
                </div>
            ))}
        </div>
    )
}
