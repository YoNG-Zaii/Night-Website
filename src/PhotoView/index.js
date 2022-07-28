import './index.css';
import { useEffect } from 'react';

const PhotoView = () => {

    const assignClick = () => {
        document.querySelectorAll('.image img').forEach(image => {
            image.onclick = () => {
                document.querySelector('.popup-image').style.display = 'block';
                document.querySelector('.popup-image img').src = image.getAttribute('src');
        }})
    }

    const handleClose = () => {
        document.querySelector('.popup-image').style.display = 'none';
    }

    useEffect(() => {
        assignClick();
        return handleClose();
    });

    return (
        <div className='PhotoView'>
            <h1>A Glance At Night</h1>
            <div className="gallery">
                <div className="image" data-name="bag">
                    <span><img src="https://images.unsplash.com/photo-1508197149814-0cc02e8b7f74?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTl8fG5pZ2h0JTIwY2l0eXxlbnwwfDB8MHx8&auto=format&fit=crop&w=800&q=60" alt="City"/></span></div>
                <div className="image" data-name="headphone">
                    <span><img src="https://images.unsplash.com/photo-1525935944571-4e99237764c9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fG5pZ2h0JTIwY2l0eXxlbnwwfDB8MHx8&auto=format&fit=crop&w=800&q=60" alt="City2"/></span></div>
                <div className="image" data-name="camera">
                    <span><img src="https://images.unsplash.com/photo-1600952912114-7e2aecc0f64f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8bmlnaHQlMjB2aWV3fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=700&q=60" alt="City3"/></span></div>
                <div className="image" data-name="shoe">
                    <span><img src="https://images.unsplash.com/photo-1545158828-4e222fdb1d5a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8bmlnaHQlMjBjaXR5fGVufDB8MHwwfHw%3D&auto=format&fit=crop&w=800&q=60" alt="City4"/></span></div>
                <div className="image" data-name="headphone">
                    <span><img src="https://images.unsplash.com/photo-1549796943-f0d60ddf92a0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8bmlnaHQlMjBjaXR5fGVufDB8MHwwfHw%3D&auto=format&fit=crop&w=800&q=60" alt="City5"/></span></div>
                <div className="image" data-name="watch">
                    <span><img src="https://images.unsplash.com/photo-1620353540061-38ac5848aaef?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8bmlnaHQlMjBjaXR5fGVufDB8MHwwfHw%3D&auto=format&fit=crop&w=800&q=60" alt="City6"/></span></div>
                <div className="image" data-name="shoe">
                    <span><img src="https://images.unsplash.com/photo-1628164304740-dfef5f3a9c39?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fG5pZ2h0JTIwY2l0eXxlbnwwfDB8MHx8&auto=format&fit=crop&w=800&q=60" alt="City7"/></span></div>
                <div className="image" data-name="camera">
                    <span><img src="https://images.unsplash.com/photo-1611323340350-bdcc0e6cfae5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fG5pZ2h0JTIwY2l0eXxlbnwwfDB8MHx8&auto=format&fit=crop&w=800&q=60" alt="City8"/></span></div>
            </div>
            
            <div className='popup-image'>
                <span onClick={handleClose}>&times;</span>
                <img src='https://images.unsplash.com/photo-1508197149814-0cc02e8b7f74?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTl8fG5pZ2h0JTIwY2l0eXxlbnwwfDB8MHx8&auto=format&fit=crop&w=800&q=60' alt='' />
            </div>
        </div>
    )
}

export default PhotoView