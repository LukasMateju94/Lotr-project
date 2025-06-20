import CharacterQuotes from '../components/CharacterQuotes';
import CharacterList from '../components/CharacterList';

const QuotePage = () => {

    return (
        <section className="quote-section">
            <CharacterList />
            <CharacterQuotes />
        </section>
    );
};

export default QuotePage