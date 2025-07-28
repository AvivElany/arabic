import { useEffect } from 'react'
import './Arrest.css'
import Title from '../../components/Title/Title';
import Summary from '../../components/Summary/Summary';
import Board from '../../components/Board/Board';
import { arrest } from '../../data/data';

/*interface IArrestProps {

}*/

export default function Arrest(/*props: IArrestProps*/) {

    useEffect(() => {
        

    }, []);

    return (
        <div className='Arrest'>
            <Title title="מעצר מבוקש" />
            <Summary summary='שיחון לביצוע מעצר' />
            <Board data={arrest} />
        </div>
    )
}
