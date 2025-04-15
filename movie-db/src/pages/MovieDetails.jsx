import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import backup from '../assets/react.svg';
import { convertMinutes } from '../utils/Utils';

const MovieDetails = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const key = import.meta.env.VITE_API_KEY;
  const url = `https://api.themoviedb.org/3/movie/${id}?api_key=${key}`;

  useEffect(() => {
    async function fetchMovie() {
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const jsonData = await response.json();
        setMovie(jsonData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }
    fetchMovie();
  }, [id]); // Dependency on `id`

  useEffect(() => {
    if (movie?.title) {
      document.title = movie.title; // Update document title
    }
  }, [movie]);

  return (
    <main className="container">
      {movie ? (
        <>
          <h5 className="text-danger py-2 border-bottom mb-3">{movie.title}</h5>
          <div className="row">
            <div className="col-md-4">
              <img
                src={movie.poster_path ? `https://image.tmdb.org/t/p/original${movie.poster_path}` : backup}
                alt={movie.title || 'Movie Poster'}
                className="img-fluid img-thumbnail"
              />
            </div>
            <div className="col-md-8">
              <h3 className="text-primary">{movie.title}</h3>
              <p className="mt-3">{movie.overview}</p>

              {movie.genres && (
                <p className="d-flex gap-3">
                  {movie.genres.map((genre) => (
                    <span key={genre.id} className="badge bg-danger">{genre.name}</span>
                  ))}
                </p>
              )}

              <p className="mt-2">
                <i className="bi bi-star-fill text-warning"></i> {movie.vote_average} |
                <i className="bi bi-people-fill text-success"></i> {movie.vote_count} reviews
              </p>

              <table className="table table-bordered w-30 mt-2">
                <tbody>
                  <tr>
                    <th>Runtime</th>
                    <td>{convertMinutes(movie.runtime)}</td>
                  </tr>
                  <tr>
                    <th>Budget</th>
                    <td>${new Intl.NumberFormat().format(movie.budget)}</td>
                  </tr>
                  <tr>
                    <th>Revenue</th>
                    <td>${new Intl.NumberFormat().format(movie.revenue)}</td>
                  </tr>
                  <tr>
                    <th>Release date</th>
                    <td>{movie.release_date}</td>
                  </tr>
                </tbody>
              </table>

              {movie.imdb_id && (
                <a
                  className="btn btn-warning"
                  target="_blank"
                  rel="noopener noreferrer"
                  href={`https://www.imdb.com/title/${movie.imdb_id}/`}
                >
                  View on IMDb
                </a>
              )}
            </div>
          </div>
        </>
      ) : (
        <p>Loading movie details...</p>
      )}
    </main>
  );
};

export default MovieDetails;
