import React from 'react';
import MovieItem from './movieItem';

class Movies extends React.Component {
    render() {
        // pulls myMovies collection apart
        return this.props.myMovies.map((movie) => {
            return <MovieItem key={movie._id} movie={movie}></MovieItem> // each getting on individual object
        });
    }
}

export default Movies;