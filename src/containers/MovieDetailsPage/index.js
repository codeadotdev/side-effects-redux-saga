import React from 'react';
import { compose } from "redux";
import { mapProps } from 'react-map-props';

import withMovieDetails  from "../MovieDetailsProvider";
import './styles.css';

export class MovieDetailsPage extends React.PureComponent {
    render() {
        const { movieDetailsData, movie, genres, getMovieDetails } = this.props;

        if (movieDetailsData.fetching) {
            return (
                <span>loading movie details</span>
            );
        }

        if (movieDetailsData.error) {
            return (
                <button onClick={getMovieDetails}>retry</button>
            );
        }

        return (
            <div
                className="Movie-Overview-Widget"
                style={{ backgroundImage: `url(${movie.image_background})` }}
            >
                <h1 className="Movie-Title">
                    {
                        movie.title
                    }
                </h1>

                <div className="Movie-Details-Layout">
                    <div className="Movie-Details-Image">
                        <img src={movie.image_medium} alt={movie.image_medium_alt}/>
                    </div>

                    <div className="Movie-Details-Info">
                        <p>{movie.large_description}</p>

                        <ul>
                            {
                                genres.map((genre) => <li key={genre}>{genre}</li>)
                            }
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}

export function mapPropsToProps({ match, ...other }) {
    const id = match.params.movieId;

    return {
        id,
        ...other
    };
}

export default compose(
    mapProps(mapPropsToProps),
    withMovieDetails
)(MovieDetailsPage);