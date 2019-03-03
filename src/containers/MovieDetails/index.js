import React from 'react';
import get from 'lodash/get';
import { compose } from 'redux';
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect';

import { getMovieDetails } from './actions';
import { selectMovieDetailsData, selectMovie } from './selectors';
import './styles.css';

class MovieDetails extends React.PureComponent {
    componentDidMount() {
        if (!this.props.movieDetailsData.fetched) {
            this.props.getMovieDetails(this.props.id);
        }
    }

    render() {
        const { movieDetailsData, movie } = this.props;

        return (
            <div className="Movie-Details-Container">
              {
                  movieDetailsData.fetching && (
                      <span>loading movie details</span>
                  )
              }

              {
                  movieDetailsData.error && (
                      <button onClick={this.props.getMovieDetails}>retry</button>
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
                      </React.Fragment>
                  )
              }
            </div>
        );
    }
}

export function mapDispatchToProps(dispatch) {
    return {
        getMovieDetails: (movieId) => dispatch(getMovieDetails(movieId)),
    }
}

export function mapStateToProps(){
    return createStructuredSelector({
        movieDetailsData: selectMovieDetailsData,
        movie: selectMovie,
    });
}

const withConnect = connect(
    mapStateToProps,
    mapDispatchToProps,
);

export default compose(
    withConnect
)(MovieDetails);