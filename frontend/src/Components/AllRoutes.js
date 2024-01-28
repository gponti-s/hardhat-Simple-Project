import { Routes, Route} from 'react-router-dom';
import { HomePage } from '../pages/HomePage';
import { AboutPage } from '../pages/AboutPage';

export const AllRoutes = () => {

    return(
        <div className='mainview'>
            <Routes>
                <Route path='/' element={<HomePage/>} />
                <Route path='/about' element={<AboutPage/>} />
            </Routes>
        </div>
    );
    
}