import React from 'react';

class MovieItem extends React.Component{
    render(){
        return(
            <div>
                <h4>{this.props.movie.Title}</h4>
                <p>{this.props.movie.Year}</p>
                <img src={this.props.movie.Poster}/>
            </div>
        );  
    }
}
export default MovieItem;