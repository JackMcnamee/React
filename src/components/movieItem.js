import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import { Link } from 'react-router-dom';

class MovieItem extends React.Component {
    constructor(){
        super();
        this.DeleteMovie = this.DeleteMovie.bind(this);
    }
    
    DeleteMovie(e){
        console.log("Delete Clicked");
        axios.delete("http://localhost:4000/api/movies/"+this.props.movie._id)
        .then(window.location.reload())
        .catch();
    
    }

    render() { 
        return (
            <div>        
                <Card border="primary" style={{ width: '28rem' }}>
                    <Card.Header><h4>{this.props.movie.title}</h4></Card.Header>
                    <Card.Body>
                        <blockquote className="blockquote mb-0">
                            <img src={this.props.movie.poster}></img>
                            <footer>
                                {this.props.movie.year}
                            </footer>
                        </blockquote>
                    </Card.Body>
                    <Button variant="danger" onClick={this.DeleteMovie}>Delete</Button>
                    <Link to={"/edit/" + this.props.movie._id} className="btn btn-primary">Edit</Link>
                </Card>
            </div>
        );
    }
}

export default MovieItem;

import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import { Link } from 'react-router-dom';

class MovieItem extends React.Component {
    constructor(){
        super();
        this.DeleteMovie = this.DeleteMovie.bind(this);
    }
    
    DeleteMovie(e){
        console.log("Delete Clicked");
        axios.delete("http://localhost:4000/api/movies/"+this.props.movie._id)
        .then(window.location.reload())
        .catch();
    
    }

    render() { 
        return (
            <div>        
                <Card border="primary" style={{ width: '28rem' }}>
                    <Card.Header><h4>{this.props.movie.title}</h4></Card.Header>
                    <Card.Body>
                        <blockquote className="blockquote mb-0">
                            <img src={this.props.movie.poster}></img>
                            <footer>
                                {this.props.movie.year}
                            </footer>
                        </blockquote>
                    </Card.Body>
                    <Button variant="danger" onClick={this.DeleteMovie}>Delete</Button>
                    <Link to={"/edit/" + this.props.movie._id} className="btn btn-primary">Edit</Link>
                </Card>
            </div>
        );
    }
}

export default MovieItem;

