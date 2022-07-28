import './index.css';
import { memo } from 'react';
import ImageSlider from './components/ImageSlider';
import Description from './components/Description';
import { SliderData } from './components/SliderData';

const Gallery = () => {
  return (
    <div id="Gallery" className="Gallery">
    <Description />
    <ImageSlider slides={SliderData} />
    </div>
  );
}

export default memo(Gallery);
