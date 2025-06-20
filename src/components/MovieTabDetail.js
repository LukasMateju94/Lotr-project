import './MovieTabDetail.css';

const MovieTabDetail = (props) => {
    return (
        <div className='movie-detail'>
            <h2>{props.movieTitle}</h2>
            <h3>{props.movieYear}</h3>
            <h3>{props.movieLength}</h3>
            <p>{props.movieDescription}</p>
        </div>
    )
}

export default MovieTabDetail