import React, { useState }  from 'react';

import MovieOverviewWidget from '../../containers/MovieDetailsWidget'

import './styles.css';

function MovieCard({ movie }) {
    const [isOpen, setToggle] = useState(false);

    const toggle = () => setToggle(!isOpen);

    const { image_medium, title_episode, id } = movie;

    return (
        <div className="Card-Movie" >
            <img src={image_medium} alt={title_episode} onClick={toggle}/>

            {
                isOpen && (
                    <MovieOverviewWidget id={id} onClose={toggle} />
                )
            }

        </div>
    );
}

export default MovieCard;