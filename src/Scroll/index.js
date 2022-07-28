import './index.css';
import { Parallax } from 'react-parallax';
import { Link } from 'react-router-dom';
import { GiMoon } from 'react-icons/gi';

const Scroll = () => {
    return (
        <div className='Scroll'>
            <Link to='/'><GiMoon className='moonLogo2'/></Link>
            <Parallax style={{ zIndex: '1' }} bgImage='moonView/mountains_behind.png' bgImageAlt='mountains_behind' 
            bgImageStyle={{height:'700px'}} bgstrength={ 700 }>
                <div className='firstImage'>
                    <img id='mf' src='moonView/mountains_front.png' alt='mountains_front' />
                    <h2 id='text1'>Night Photos</h2>
                </div>
            </Parallax>
        </div>
    )
}

export default Scroll