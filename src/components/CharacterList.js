import './CharacterList.css';
import { characters } from '../characters';

const CharacterList = () => {
    return (
        <section className='character-list'>
            <h2>Dostupné postavy</h2>
            <ul>
                {characters.map((character) => (
                    <li key={character.id}>{character.name}</li>
                ))}
            </ul>
        </section >
    );
};

export default CharacterList;