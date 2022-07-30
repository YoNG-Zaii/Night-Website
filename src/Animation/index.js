import './index.css';
import { useState, useEffect, useRef, memo } from 'react';
import Scene from './Scene';

const Animation = () => {
    const [status, setStatus] = useState('Start');
    const [carLightOn, setCarLightOn] = useState(false);
    const resetFalling = useRef(true);
    const timeOuts = useRef(null);

    useEffect(() => {
        letterAnimation();
        fallingAnimation();
    })

    const letterAnimation = () => {
        const letters = document.querySelectorAll('.letter');
        const sLetters = document.querySelectorAll('.sLetter');
        if(status === 'Stop'){
            letters[1].classList.add('rotate');
            letters[4].classList.add('dropBack');
            sLetters[1].classList.add('shadowRotate');
            sLetters[4].classList.add('shadowDropBack');
        }
        else if(status === 'Start'){
            letters[1].classList.remove('rotate');
            letters[4].classList.remove('dropBack');
            sLetters[1].classList.remove('shadowRotate');
            sLetters[4].classList.remove('shadowDropBack');
        }
    }

    const fallingAnimation = () => {
        const bigStone = document.querySelector('.bigStone');
        const leaf = document.querySelector('.leaf');
        const svgCar = document.querySelector('.svgCar');
        const upDown = document.querySelector('.upDown');
        const frontWheel = document.querySelector('#frontWheel');
        const backWheel = document.querySelector('#backWheel');
        const moon = document.querySelector('.moonAnimation');
        if(status === 'Stop'){
            svgCar.classList.add('carMoving');
            upDown.style.animation = 'carUpDown 1s ease-in-out infinite';
            frontWheel.classList.add('wheelMoving');
            backWheel.classList.add('wheelMoving');
            moon.classList.add('moonFollowing');
            if(resetFalling.current){
                let timer1 = setTimeout(() => {
                    bigStone.classList.add('fallingBigStone');
                    leaf.classList.add('fallingLeaf');
                }, 200);
                let timer2 = setTimeout(() => {
                    bigStone.setAttribute('class', 'bigStone fellBigStone');
                }, 1200);
                let timer3 = setTimeout(() => {
                    leaf.setAttribute('class', 'leaf fellLeaf');
                }, 5200);
            timeOuts.current = [timer1, timer2, timer3];
            resetFalling.current = false;
            }
        }
        else if(status === 'Start'){
            if(timeOuts.current !== null)
                timeOuts.current.forEach((timer) => clearTimeout(timer));
            timeOuts.current = null;
            resetFalling.current = true;
            bigStone.setAttribute('class', 'bigStone');
            leaf.setAttribute('class', 'leaf');
            svgCar.className = 'svgCar';
            upDown.style.animation = 'unset';
            frontWheel.setAttribute('class', 'frontWheel');
            backWheel.setAttribute('class', 'backWheel');
            moon.setAttribute('class', 'moonAnimation');
        }
    }

    const handleClick = () => {
        if(status === 'Start')
            setStatus('Stop');
        else
            setStatus('Start');
    }

    const handleCarLight = () => {
        if(carLightOn === false)
            setCarLightOn(true);
        else
            setCarLightOn(false);
    }

    return (
        <div className='Animation' id='Animation'>
            <h2 className='title'>Discover the Animations at Night!</h2>
            <div className='textWrapper'>
                <div className='fWrapper'>
                    <h2 className='letter'>N</h2>
                    <h2 className='letter'>I</h2>
                    <h2 className='letter'>G</h2>
                    <h2 className='letter'>H</h2>
                    <h2 className='letter'>T</h2>
                </div>
                <div className='shadowWrapper'>
                    <h2 className='sLetter'>N</h2>
                    <h2 className='sLetter'>I</h2>
                    <h2 className='sLetter'>G</h2>
                    <h2 className='sLetter'>H</h2>
                    <h2 className='sLetter'>T</h2>
                </div>
            </div>
            <Scene carLightOn={carLightOn}/>
            <div className='btnWrapper'>
                <button className='animeBtn' id={status === 'Start' ? 'startBtn' : 'stopBtn'}
                 onClick={handleClick}>{status}</button>
                <button className='animeBtn' id={carLightOn ? 'lightOffBtn' : 'lightOnBtn'}
                 onClick={handleCarLight}>
                    {carLightOn ? 'Light Off' : 'Light On'}</button>
            </div>
        </div>
    )
}

export default memo(Animation);