import Intro from '../components/Intro/Intro';
import OneMovie from '../components/OneMovie/OneMovie';
import MovieTabs from '../components/MovieTabs/MovieTabs';
import intro from '../intro';
import movies from '../data';

const Home = () => {
    const getRandomText = (texts) => {
        return texts[Math.floor(Math.random() * texts.length)];
    };

    const randomText = getRandomText(intro[0].text);

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