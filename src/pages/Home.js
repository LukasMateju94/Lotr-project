import Intro from '../components/Intro';
import OneMovie from '../components/OneMovie';
import MovieTabs from '../components/MovieTabs';
import intro from '../intro';
import movies from '../data';
import { useEffect, useState } from 'react';


const Home = () => {
    const [randomText, setRandomText] = useState('')

    useEffect(() => {
        const text = intro[0].text
        const getRandomText = Math.floor(Math.random() * text.length)
        setRandomText(text[getRandomText])
    }, [])

    return <div>
        <section className='intro-section'>
            <Intro
                introImg={intro[0].image}
                introDescription={intro[0].description}
                introText={randomText}
                introInfo={intro[0].info} />
        </section>

        <section className='movie-section'>
            {movies.map((movie) => (
                <OneMovie
                    key={movie.id}
                    movieImg={movie.image}
                    movieTitle={movie.title.short}
                    movieDescription={movie.description.short}
                />
            ))}
        </section>

        <section className='detail-section'>
            <MovieTabs />
        </section>

    </div>

}

export default Home