import React, { useState }  from 'react';

import MovieDetails from '../../containers/MovieDetails'

import './styles.css';

function CardMovie({ movie }) {
    const [isOpen, setToggle] = useState(false);

    const toggle = () => setToggle(!isOpen);

    const { image_medium, title_episode, id } = movie;

    return (
        <div className="Card-Movie" >
            <img src={image_medium} alt={title_episode} onClick={toggle}/>

            {
                isOpen && (
                    <MovieDetails id={id} onClose={toggle} />
                )
            }

        </div>
    );
}

export default CardMovie;