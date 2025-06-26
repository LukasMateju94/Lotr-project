import './CharacterQuotes.css';
import { useState } from 'react';
import { characters } from '../../characters';
import axios from 'axios';

const CharacterQuotes = () => {
    const [name, setName] = useState('');
    const [quotes, setQuotes] = useState([]);
    const [randomQuote, setRandomQuote] = useState(null);
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const token = process.env.REACT_APP_LOTR_API_KEY;

    const getQuote = () => {
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
        setLoading(true);

        const url = `https://the-one-api.dev/v2/quote?character=${characterId.id}`;

        axios
            .get(url, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            })
            .then((response) => {
                const quoteList = response.data.docs;

                setQuotes(quoteList);

                if (quoteList.length > 0) {
                    setRandomQuote(quoteList[Math.floor(Math.random() * quoteList.length)]);
                    return;
                }

                setRandomQuote(null);
            })
            .catch(() => {
                setError('Chyba při načítání citátů.');
                setQuotes([]);
                setRandomQuote(null);
            })
            .finally(() => {
                setLoading(false);
            });
    };

    const searchRandomQuote = () => {
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

            {loading && <p>Načítání...</p>}

            {error && <p className='error'>{error}</p>}

            {randomQuote && !loading && (
                <div>
                    <h3>Citát:</h3>
                    <p>"{randomQuote.dialog}"</p>
                    <button onClick={searchRandomQuote}>Zobrazit jiný citát</button>
                </div>
            )}
        </section>
    );
};

export default CharacterQuotes;