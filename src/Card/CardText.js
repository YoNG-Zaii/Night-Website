import './CardText.css';

const CardText = () => {
    return (
        <div className='CardText'>
            <h1>Explore the Beauty of Night</h1>
            <div className='cardsWText'>
                <div className='storyCard'>
                    <div className='card' id='card1'>
                        <div className='frontC'>
                            <h2>Creativity is flowing</h2>
                        </div>
                        <div className='backC'>
                        <p>
                            For night owls, the night is our time to shine. 
                            We’re at our most alert, most energized and our minds aren’t being over-stimulated - 
                            which gives it a chance to do some of its own thinking.
                            </p>
                        </div>
                    </div>
                </div>

                <div className='storyCard'>
                    <div className='card' id='card2'>
                        <div className='frontC'>
                            <h2>Opened eyes and cleared minds</h2>
                        </div>
                        <div className='backC'>
                        <p>
                            The feeling of emptiness and aloneness that night often brings can be thought-provoking.
                            Minds work better, and memory becomes stronger. 
                            Flashbacks always seem to come at night with more clarity, 
                            which allows you to think through situations better.
                            </p>
                        </div>
                    </div>
                </div>

                <div className='storyCard'>
                    <div className='card' id='card3'>
                        <div className='frontC'>
                            <h2>Everything looks different</h2>
                        </div>
                        <div className='backC'>
                        <p>
                        What looked one way in the light looks completely different at night. You notice things you didn’t before. 
                        The moon casts a light glow on everything and the streetlights and other outside lights have a different aura to them as well which makes everything around you seem foreign and exciting.
                        </p>
                        </div>
                    </div>
                </div>
            </div>
            <p>Extracted from:&nbsp; 
                <a id='night2' href='https://www.theodysseyonline.com/5-reasons-the-night-is-so-beautiful'>
                5 Reasons The Night Is So Beautiful
                </a>
            </p>
        </div>
    )
}

export default CardText