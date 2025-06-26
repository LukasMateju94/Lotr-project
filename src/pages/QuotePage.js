import CharacterQuotes from '../components/CharacterQuotes/CharacterQuotes';
import CharacterList from '../components/CharacterList/CharacterList';

const QuotePage = () => {

    return (
        <section className="quote-section">
            <CharacterList />
            <CharacterQuotes />
        </section>
    );
};

export default QuotePage