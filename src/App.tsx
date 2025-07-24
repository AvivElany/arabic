import './App.css'
import { BrowserRouter } from 'react-router-dom'
import Default from './Default/Default'

/*interface IAppProps {

}*/

export default function App(/*props: IAppProps*/) {

    return (
        <BrowserRouter>
            <div className='App'>
                <Default />
            </div>
        </BrowserRouter>
    )
}
