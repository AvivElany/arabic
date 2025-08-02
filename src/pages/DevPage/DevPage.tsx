import DeveloperCard from '../../components/DeveloperCard/DeveloperCard'
import './DevPage.css'

/*interface IDevPageProps {

}*/

export default function DevPage(/*props: IDevPageProps*/) {

    return (
        <div className='DevPage'>
            <h1>אודות</h1>
            <DeveloperCard />
        </div>
    )
}
