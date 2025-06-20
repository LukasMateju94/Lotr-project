import './CharacterQuotes.css';
import { useState } from 'react';
import { characters } from '../characters';
import axios from 'axios';


const CharacterQuotes = () => {
    const [name, setName] = useState('');
    const [quotes, setQuotes] = useState([]);
    const [randomQuote, setRandomQuote] = useState(null);
    const [error, setError] = useState('');
    const token = process.env.REACT_APP_LOTR_API_KEY;

    const getQuote = async () => {
        const characterId = characters.find(
            (character) => character.name.toLowerCase() === name.trim().toLowerCase()
        );

        if (!characterId) {
            setError('Postava nenalezena.');
            setQuotes([]);
            setRandomQuote(null);
            return;
        }

        setError('');

        const url = `https://the-one-api.dev/v2/quote?character=${characterId.id}`;

        try {
            const response = await axios.get(url, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });

            const quoteList = response.data.docs;

            if (quoteList.length === 0) {
                setQuotes([]);
                setRandomQuote(null);
                return;
            }

            setQuotes(quoteList);
            setRandomQuote(
                quoteList[Math.floor(Math.random() * quoteList.length)]
            );
        } catch {
            setError('Chyba při načítání citátů.');
            setQuotes([]);
            setRandomQuote(null);
        }
    };

    const searchAnotherQuote = () => {
        if (quotes.length > 0) {
            setRandomQuote(
                quotes[Math.floor(Math.random() * quotes.length)]
            );
        }
    };

    return (
        <section className='character-quote'>
            <h2>Hledej citáty postav</h2>
            <input
                type="text"
                value={name}
                onChange={(event) => setName(event.target.value)}
                placeholder="Zadej jméno postavy"
            />
            <button onClick={getQuote}>Hledat</button>

            {error && <p className='error'>{error}</p>}

            {randomQuote && (
                <div>
                    <h3>Citát:</h3>
                    <p>"{randomQuote.dialog}"</p>
                    <button onClick={searchAnotherQuote}>Zobrazit jiný citát</button>
                </div>
            )}
        </section>
    );
};

export default CharacterQuotes;
