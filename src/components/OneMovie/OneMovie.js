import './OneMovie.css';

const OneMovie = (props) => {
    return (
        <div className='one-movie'>
            <img src={props.movieImg} alt='' />
            <h2>{props.movieTitle}</h2>
            <p>{props.movieDescription}</p>
        </div>
    )
}

export default OneMovie