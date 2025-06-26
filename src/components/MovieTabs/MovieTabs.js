import './MovieTabs.css';
import { useState } from 'react';
import MovieTabDetail from '../MovieTabDetail/MovieTabDetail';
import movies from '../../data';

const MovieTabs = () => {
    const [currentTab, setCurrentTab] = useState(0);
    const currentMovie = movies[currentTab];

    return (
        <div className="movie-tabs">
            <div className="tab-buttons">
                {movies.map((movie, tabId) => {
                    const label = movie.title.tab;
                    const buttonClass = tabId === currentTab ? 'current' : '';

                    return (
                        <button
                            key={movie.id}
                            onClick={() => setCurrentTab(tabId)}
                            className={buttonClass}
                        >
                            {label}
                        </button>
                    );
                })}
            </div>

            <MovieTabDetail
                movieTitle={currentMovie.title.long}
                movieYear={currentMovie.year}
                movieLength={currentMovie.length}
                movieDescription={currentMovie.description.long}
            />
        </div>
    );
};

export default MovieTabs;