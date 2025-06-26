import './Intro.css';

const Intro = (props) => {
    return (
        <div className='intro'>
            <img src={props.introImg} alt='' />
            <h1>{props.introDescription}</h1>
            <p>{props.introText}</p>
            <h2>{props.introInfo}</h2>
        </div>
    )
}

export default Intro