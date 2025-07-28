import Summary from '../../components/Summary/Summary'
import Title from '../../components/Title/Title'
import './Checkpost.css'
import Board from '../../components/Board/Board'
import { checkpost, mashtuba } from '../../data/data'

/*interface ICheckpostProps {

}*/

export default function Checkpost(/*props: ICheckpostProps*/) {

    return (
        <div className='Checkpost'>
            <div className='Checkpost-regular'>
                <Title title="צ'קפוסט" />
                <Summary summary='שיחון לביצוע תשאול ראשוני בחסם רגלי/רכבים עם חשד בסיסי בלבד' />
                <Board data={checkpost} />
            </div>
            <div className="mashtuba">
                <Summary summary='במקרה ומצאנו רכב חשוד כגנוב, משטובה, מה נעשה?' />
                <Board data={mashtuba} />
            </div>
        </div>
    )
}
