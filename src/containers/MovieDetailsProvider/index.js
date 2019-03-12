import React from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect';

import { getMovieDetails } from './actions';
import { selectMovieDetailsData, selectMovie, selectGenres } from './selectors';

export function withMovieDetailsHOC(WrappedComponent) {
    class WithMovieDetails extends React.Component {
        static displayName = 'WithMovieDetails';

        componentDidMount() {
            if (!this.props.movieDetailsData.fetched) {
                this.props.getMovieDetails(this.props.id);
            }
        }

        render() {
            return <WrappedComponent {...this.props} />;
        }
    }

    return WithMovieDetails;
}


export function mapDispatchToProps(dispatch) {
    return {
        getMovieDetails: (movieId) => dispatch(getMovieDetails(movieId)),
    }
}

export function mapStateToProps() {
    return createStructuredSelector({
        movieDetailsData: selectMovieDetailsData,
        movie: selectMovie,
        genres: selectGenres,
    });
}

const withMovieDetailsState = connect(mapStateToProps, mapDispatchToProps);

export default compose(
    withMovieDetailsState,
    withMovieDetailsHOC,
);