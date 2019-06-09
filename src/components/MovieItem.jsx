import React from 'react';

const MovieItem = (props) => {
  console.log(props.movie);
  return (
    <div>
      <p>{props.movie.title}</p>
      <button onClick={props.removeMovie.bind(null, props.movie)}>Delete</button>
    </div>
  )
};

export default MovieItem;