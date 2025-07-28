import Summary from '../../components/Summary/Summary'
import Title from '../../components/Title/Title'
import './Checkpost.css'
import Board from '../../components/Board/Board'
import { checkpost } from '../../data/data'

/*interface ICheckpostProps {

}*/

export default function Checkpost(/*props: ICheckpostProps*/) {

    return (
        <div className='Checkpost'>
            <Title title="צ'קפוסט" />
            <Summary summary='שיחון לביצוע בדיקות בצומת ביקורת' />
            <Board data={checkpost} />
        </div>
    )
}
