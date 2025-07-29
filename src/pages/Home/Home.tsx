import Contact from '../../components/Contact/Contact'
import Dialect from '../../components/Dialect/Dialect'
import Hero from '../../components/Hero/Hero'
import Importance from '../../components/Importance/Importance'
import Meets from '../../components/Meets/Meets'
import Top from '../../components/Top/Top'
import './Home.css'

/*interface IHomeProps {

}*/

export default function Home(/*props: IHomeProps*/) {

    return (
        <div className='Home'>
            <Hero />
            <Importance />
            <Meets />
            {/* <Dialect /> */}
            <Contact />
            <Top />
        </div>
    )
}
