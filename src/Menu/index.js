import { useRef, useEffect, memo } from 'react';
import { Link } from 'react-router-dom';
import { FaBars } from 'react-icons/fa';
import { GiMoon } from 'react-icons/gi';
import './index.css';
import './moonImages.css';

const Menu = () => {
    const isInView = useRef(false);
    const openNavbar = useRef(false);

    useEffect(() => {
        const prxView = document.querySelector('.menuBg');
        observer.observe(prxView);
        window.addEventListener('scroll', handleScroll, { passive : true });
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('scroll', handleScroll);
            observer.unobserve(prxView);
        };
    });

    const observer = new IntersectionObserver(entries => {
        isInView.current = entries[0].isIntersecting;
    })

    const handleScroll = () => {
        if(!isInView.current) return;
        console.log('Scrolled');
        let stars = document.getElementById('stars');
        let moon = document.getElementById('moon');
        let mountains_behind = document.getElementById('mountains_behind');
        let text = document.getElementById('text');
        let value = window.pageYOffset;
        stars.style.left = value * 0.2 + 'px';
        moon.style.left = value * 0.2 + 'px';
        mountains_behind.style.top = value * 0.4 + 'px';
        text.style.transform = 'translateX(' + (-1*50 - value * 0.1) + '%)';
    }

    const handleResize = () => {
        let dropList = document.querySelector('.dropList');
        dropList.classList.add('resize-animation-stopper');
        setTimeout(() => {
            dropList.classList.remove('resize-animation-stopper');
        }, 400);
    }

    const handleNavbar = () => {
        openNavbar.current = !openNavbar.current;
        let dropList = document.querySelector('.dropList');
        if(openNavbar.current)
            dropList.classList.add('openedNavbar');
        else
            dropList.className = 'dropList';
    }

    return (
        <div id='Menu' className='menuBg'>
        <header>
            <a href='#Menu' className='logo'><GiMoon className='moonLogo'/></a>
            <FaBars className='barIcon' onClick={handleNavbar}/>
            <ul className='dropList'>
                <li><a href='#Menu'>Home</a></li>
                <li><a href='#Explore'>Explore</a></li>
                <li><a href='#Gallery'>Gallery</a></li>
                <li><a href='#Contact'>Contact</a></li>
                <li><Link to='/Scroll'>More</Link></li>
            </ul>
        </header>
        <section className='images'>
            <img className='moonImg' src='moonView/stars.png' id='stars' alt='stars' />
            <img className='moonImg' src='moonView/moon.png' id='moon' alt='moon' />
            <img className='moonImg' src='moonView/mountains_behind.png' id='mountains_behind' alt='mountains_behind' />
            <img className='moonImg' src='moonView/mountains_front.png' id='mountains_front' alt='mountains_front' />
            <h2 id = 'text'>Moon Light</h2>
        </section>
        </div>
    )
}

export default memo(Menu);