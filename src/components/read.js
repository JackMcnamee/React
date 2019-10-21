import React from 'react';
import Movies from './movies';
import axios from 'axios';

class Read extends React.Component{

    state = {
        myMovies : []   
    };

    componentDidMount() {
        axios.get('http://localhost:4000/api/movies')
        .then((response) =>{
            this.setState({myMovies: response.data.movies})
        })
        .catch((error) =>{
            console.log(error);
        });
    }

    render(){
        return(
            <div>
                <h1>Hello from Read component</h1>
                <Movies myMovies={this.state.myMovies}></Movies>
            </div>
        );   
    }
}
export default Read;