import React from 'react';

class Create extends React.Component{

    constructor(props) {
        super(props);
        this.state = {Title: '',
                        Year: '',
                        Poster: ''};
    
        this.handleChangeMovieTitle = this.handleChangeMovieTitle.bind(this);
        this.handleChangeMovieYear = this.handleChangeMovieYear.bind(this);
        this.handleChangeMoviePoster = this.handleChangeMoviePoster.bind(this);

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChangeMovieTitle(e) {
        this.setState({Title: e.target.value});
    }

    handleChangeMovieYear(e) {
        this.setState({Year: e.target.value});
    }

    handleChangeMoviePoster(e) {
        this.setState({Poster: e.target.value});
    }
    
    handleSubmit(e) {
        e.preventDefault();
        alert("Title: " + this.state.Title + " Year: " + this.state.Year + " Poster Url: " + this.state.Poster);
        
    }

    render(){
        return(
            <div>
                <h1>Hello from Create component</h1>
                <form onSubmit={this.handleSubmit}>
                    <div className = "form-group">
                        <label>
                            Movie Title:
                        </label>
                        <input type="text" className="form-control" value={this.state.Title} onChange={this.handleChangeMovieTitle} />
                    </div>
                    <div className = "form-group">
                        <label>
                            Release Year:
                        </label>
                        <input type="text" className="form-control" value={this.state.Year} onChange={this.handleChangeMovieYear} />
                    </div>
                    <div className = "form-group">
                        <label>
                            Poster Url:
                        </label>
                        <textarea className="form-control" rows="6" value={this.state.Poster} onChange={this.handleChangeMoviePoster} />
                    </div>
                    <div className = "form-group">
                        <input type="submit" value="Submit" />
                    </div>
                </form>
            </div>
        );    
    }
}
export default Create;