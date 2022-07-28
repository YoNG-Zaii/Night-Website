import Gallery from './Gallery';
import Menu from './Menu';
import Text from './Explore';
import Flow1 from './Flow/Flow-1';
import Flow2 from './Flow/Flow-2';
import Flow3 from './Flow/Flow-3';
import Animation from './Animation';
import Contact from './Contact';

const Home = () => {
    return (
        <div className='App'>
            <Menu />
            <Text />
            <Flow1 />
            <Gallery />
            <Flow2 />
            <Contact />
            <Flow3 />
            <Animation />
        </div>
    )
}

export default Home;