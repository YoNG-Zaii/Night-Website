import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home';
import Next from './Next';
import './App.css'

const App = () => {
    return(
    <Router basename={process.env.PUBLIC_URL}>
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/Scroll' element={<Next />} />
        </Routes>
    </Router>
    );
}

export default App;