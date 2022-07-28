import './NightAnimation.css';
import './FallAnimation.css';
import { FaStar } from 'react-icons/fa';
import { CgMoon } from 'react-icons/cg';
import { GiFamilyHouse } from 'react-icons/gi';
import { SiGumtree } from 'react-icons/si';
import BigStone from './Objects/BigStone';
import Leaf from './Objects/Leaf';
import Car from './Objects/Vehicle/Car';
import LightedCar from './Objects/Vehicle/LightedCar';
import FrontWheel from './Objects/Vehicle/FrontWheel';
import BackWheel from './Objects/Vehicle/BackWheel';
import Tree from './Objects/Tree';
import Bush from './Objects/Bush';

const Scene = ( { carLightOn } ) => {
    return (
        <>
        <div className='nightSky'>
            <CgMoon className='moonAnimation'/>
            <FaStar className='star' id='star1' />
            <FaStar className='star' id='star2' />
            <FaStar className='star' id='star3' />
        </div>
        <div className='nightGround'>
            <div className='svgCar'>
                <div className='upDown'> {/* For 2nd animation on car */}
                    {carLightOn ? <LightedCar /> : <Car />}
                    <FrontWheel />
                    <BackWheel />
                </div>
            </div>
            <SiGumtree className='tree' id='tree1'/>
            <Leaf />
            <BigStone />
            <Tree />
            <Bush />
            <GiFamilyHouse className='house'/>
            <div className='ground'></div>
        </div>
        </>
    )
}

export default Scene;