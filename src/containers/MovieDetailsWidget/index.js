import React from 'react';
import { compose } from 'redux';
import { Link } from 'react-router-dom';
import get from 'lodash/get';

import withMovieDetails  from "../MovieDetailsProvider";
import './styles.css';

export class MovieOverviewWidget extends React.PureComponent {
    render() {
        const { movieDetailsData, movie, getMovieDetails } = this.props;

        return (
            <div className="Movie-Details-Widget-Container">
                {
                    movieDetailsData.fetching && (
                        <span>loading movie details</span>
                    )
                }

                {
                    movieDetailsData.error && (
                        <button onClick={getMovieDetails}>retry</button>
                    )
                }

                {
                    movieDetailsData.fetched && (
                        <React.Fragment>
                            <span>{movie.title}</span>
                            <p>
                                {movie.large_description}
                            </p>

                            <p>
                                rate: {get(movie, 'ranking.average_votes', 0)} / 5
                            </p>

                            <button onClick={this.props.onClose}>
                                close
                            </button>

                            <Link to={`/movies/${movie.id}`}>
                                more info
                            </Link>
                        </React.Fragment>
                    )
                }
            </div>
        );
    }
}

export default compose(
    withMovieDetails,
)(MovieOverviewWidget);