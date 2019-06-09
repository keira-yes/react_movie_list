import React from 'react';
import { moviesData } from './moviesData';
import MovieItem from './components/MovieItem';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      movies: moviesData
    }

  }

  removeMovie = movie => {
    const updateMovies = this.state.movies.filter(item => {
      return item.id !== movie.id
    });
    this.setState({
      movies: updateMovies
    });
  };

  render() {
    return (
      <>
        {this.state.movies.map(movie => {
          return <MovieItem key={movie.id} movie={movie} removeMovie={this.removeMovie}/>
        })};
      </>
    )
  }
}

export default App;
