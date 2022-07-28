import './index.css';
import { memo } from 'react';

const Text = () => {
    return (
        <div id='Explore' className='paraText'>
            <h2>Explore the Beauty of Night</h2>
            <h4>Creativity is flowing</h4>
            <p>
            For night owls, the night is our time to shine. 
            We’re at our most alert, most energized and our minds aren’t being over-stimulated - 
            which gives it a chance to do some of its own thinking.
            </p>
            <h4>Opened eyes and cleared minds</h4>
            <p>
            The feeling of emptiness and aloneness that night often brings can be thought-provoking. 
            Minds work better, and memory becomes stronger. Flashbacks always seem to come at night with more clarity, which allows you to think through situations better. 
            Most solutions are thought up at night; the trick is remembering them the next day!
            </p>
            <p>Extracted from:&nbsp; 
                <a id='night' href='https://www.theodysseyonline.com/5-reasons-the-night-is-so-beautiful'>
                5 Reasons The Night Is So Beautiful
                </a>
            </p>
        </div>
    )
}

export default memo(Text)