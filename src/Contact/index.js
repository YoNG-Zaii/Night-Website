import './index.css';
import { memo } from 'react';
import { FaFacebook, FaInstagram, FaYoutube} from 'react-icons/fa';

const Contact = () => {
    return (
        <div className='Contact' id='Contact'>
            <h2>Join The Night Together</h2>
            <form>
                <div className='inputWrapper'>
                    <div className='fName'>
                        <label htmlFor="fname">First name</label><br />
                        <input type="text" id="fname" name="fname" placeholder='Enter first name'/>
                    </div>
                    <div className='lName'>
                        <label htmlFor="lname">Last name</label><br />
                        <input type="text" id="lname" name="lname" placeholder='Enter last name' />
                    </div>
                    <div className='email'>
                        <label htmlFor="email">E-mail</label><br />
                        <input type="email" id="email" name="email" placeholder='Enter e-mail address' />
                    </div>
                </div>
                    <input className='submit' type="submit" />
            </form>
            <h3>Find us at</h3>
            <div className='iconWrapper'>
                <a className='smLink' href='https://www.facebook.com/'><FaFacebook className='sIcon'/></a>
                <a className='smLink' href='https://www.instagram.com/'><FaInstagram className='sIcon'/></a>
                <a className='smLink' href='https://www.youtube.com/'><FaYoutube className='sIcon'/></a>
            </div>
        </div>
    )
}

export default memo(Contact);