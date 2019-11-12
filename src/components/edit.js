import React from 'react';
import axios from 'axios';

class Edit extends React.Component {
    constructor(props) {
        super(props);

        this.state = { 
            Title: '', 
            Year: '', 
            Poster: '', 
            _id:'' 
        };

        this.handleEditMovieTitle = this.handleEditMovieTitle.bind(this);
        this.handleEditMovieYear = this.handleEditMovieYear.bind(this);
        this.handleEditMoviePoster = this.handleEditMoviePoster.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount(){
        // listening for a get request in server.js
        alert(this.props.match.params.id);
        axios.get("http://localhost:4000/api/movies/" + this.props.match.params.id)
        .then((response) =>{
            this.setState({
                Title:response.data.title,
                Year:response.data.year,
                Poster:response.data.poster,
                _id:response.data._id
            })
        })
        .catch();
    }

    handleEditMovieTitle(e) {
        this.setState({ Title: e.target.value });
    }

    handleEditMovieYear(e) {
        this.setState({ Year: e.target.value });
    }

    handleEditMoviePoster(e) {
        this.setState({ Poster: e.target.value });
    }

    // called when submit button is hit
    handleSubmit(e) {
        alert('Title: ' + this.state.Title + "\nYear: " + this.state.Year + "\nPoster: " + this.state.Poster);
        e.preventDefault();

        const newMovie = {
            title: this.state.Title,
            year: this.state.Year,
            poster: this.state.Poster
        }; 

        axios.put("http://localhost:4000/api/movies/" + this.state._id, newMovie)
        .then()
        .catch();

    }

    render() {
        return (
            <div>
                <h2>This is the Edit component</h2>
                <form onSubmit={this.handleSubmit}>

                    <div className="form-group">
                        <label>Movie Title:</label>
                        <input
                            type="text"
                            className="form-control"
                            value={this.state.Title}
                            onChange={this.handleEditMovieTitle}
                        />     

                        <label>Movie Release Year:</label>
                        <input
                            type="text"
                            className="form-control"
                            value={this.state.Year}
                            onChange={this.handleEditMovieYear}
                        />

                        <label>Movie Poster URL:</label>
                        <textarea
                            className="form-control"
                            rows='6'
                            value={this.state.Poster}
                            onChange={this.handleEditMoviePoster}
                        />
                    </div>

                    <div className="form-group">
                        <input type="submit" value="Submit" />
                    </div>

                </form>
            </div>
        );
    }
}

export default Edit;