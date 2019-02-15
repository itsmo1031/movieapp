import React, { Component } from "react";
import "./App.css";
import Movie from "./Movie";

class App extends Component {
  // Render: componentWillMount() -> render() -> componentDiDMount()
  // Update: componentWillReceiveProps() -> shouldComponentUpdate(): boolean(true/false) ->
  //         componentWillUpdate() -> render() -> componentDidUpdate()

  state = {};

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        movies: [
          {
            title: "Coco",
            poster:
              "https://www.slashfilm.com/wp/wp-content/images/2017-bestposter-coco.jpg"
          },
          {
            title: "Frozen 2",
            poster:
              "https://m.media-amazon.com/images/M/MV5BODYwMzYzODEzNV5BMl5BanBnXkFtZTgwOTgxOTE0NzM@._V1_.jpg"
          },
          {
            title: "Avengers: Endgame",
            poster:
              "https://m.media-amazon.com/images/M/MV5BNGZiMzBkZjMtNjE3Mi00MWNlLWIyYjItYTk3MjY0Yjg5ODZkXkEyXkFqcGdeQXVyNDg4NjY5OTQ@._V1_SY1000_CR0,0,675,1000_AL_.jpg"
          },
          {
            title: "Spider-Man: Into the Spider-Verse",
            poster:
              "https://m.media-amazon.com/images/M/MV5BMjMwNDkxMTgzOF5BMl5BanBnXkFtZTgwNTkwNTQ3NjM@._V1_SY1000_CR0,0,674,1000_AL_.jpg"
          },
          {
            title: "Spider-Man: Far From Home",
            poster:
              "https://m.media-amazon.com/images/M/MV5BMjE1MzE5MjczMl5BMl5BanBnXkFtZTgwOTgwMTgxNzM@._V1_SY1000_CR0,0,674,1000_AL_.jpg"
          }
        ]
      });
    }, 5000);
  }

  _renderMovies = () => {
    const movies = this.state.movies.map((movie, index) => {
      return <Movie title={movie.title} poster={movie.poster} key={index} />;
    });
    return movies;
  };

  render() {
    return (
      <div className="App">
        {this.state.movies ? this._renderMovies() : "Loading"}
      </div>
    );
  }
}

export default App;
