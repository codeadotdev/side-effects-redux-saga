import React from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect';

import CardMovie from "../../components/CardMovie";

import { fetchMovies } from './actions';
import { selectMoviesData } from './selectors';
import './styles.css';

class MoviesList extends React.PureComponent {
    componentDidMount() {
        this.props.fetchMovies();
    }

    render() {
        const { moviesData } = this.props;

        if (moviesData.fetching) {
            return (
                <span>Loading movies</span>
            );
        }

        if (moviesData.error) {
            return (
                <button onClick={this.props.fetchMovies}>retry</button>
            );
        }

        return (
          <div className="Movies-List-Container">
              {
                  moviesData.fetched && moviesData.list.map((movie) => (
                      <CardMovie key={movie.id} movie={movie} />
                  ))
              }
          </div>
        );
    }
}

export function mapDispatchToProps(dispatch) {
    return {
        fetchMovies: () => dispatch(fetchMovies()),
    }
}

export function mapStateToProps(){
    return createStructuredSelector({
        moviesData: selectMoviesData,
    });
}

const withConnect = connect(
    mapStateToProps,
    mapDispatchToProps,
);

export default compose(
    withConnect
)(MoviesList);