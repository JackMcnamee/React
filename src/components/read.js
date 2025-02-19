import React from 'react';
import Movies from './movies'; 
import axios from 'axios';

class Read extends React.Component {
    state = {
        movies: []
    };

    //call back function
    componentDidMount() {
        // run method, then (gets info), otherwise catch error
        axios.get('http://localhost:4000/api/movies')
        .then((response)=>{ 
            this.setState({movies : response.data.movies});
        })
        .catch((error)=>{
            console.log(error);
        });
    }

    render() {
        return (
            <div>
                <h2>Hello from Read component</h2>
                <Movies myMovies={this.state.movies}> </Movies>
            </div>
        );
    }
}

export default Read;