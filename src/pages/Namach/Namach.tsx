import Board from '../../components/Board/Board'
import Summary from '../../components/Summary/Summary'
import Title from '../../components/Title/Title'
import { suspect } from '../../data/data'
import './Namach.css'

/*interface INamachProps {

}*/

export default function Namach(/*props: INamachProps*/) {

    return (
        <div className='Namach'>
            <Title title="נוהל מעצר חשוד" />
            <Summary summary='לאחר ביצוע נוהל מעצר חשוד ובמידה והחשוד עצר ובמידה והוא משתף פעולה נשאף לזכותו מרחוק ובעדיפות תמיד לשיחה בקול מאשר תנועות ידיים' />
            <Board data={suspect} />
        </div>
    )
}
