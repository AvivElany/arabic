import DeveloperCard from '../../components/DeveloperCard/DeveloperCard'
import Title from '../../components/Title/Title'
import './DevPage.css'

/*interface IDevPageProps {

}*/

export default function DevPage(/*props: IDevPageProps*/) {

    return (
        <div className='DevPage'>
            <Title title="אודות" />
            <DeveloperCard />
        </div>
    )
}
