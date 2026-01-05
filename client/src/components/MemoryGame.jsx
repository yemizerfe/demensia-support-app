import React, { useState, useEffect } from 'react';

const cardsData = ['🍎', '🍌', '🍇', '🍓', '🍎', '🍌', '🍇', '🍓']; // pairs
const shuffledCards = [...cardsData].sort(() => 0.5 - Math.random());

const MemoryGame = () => {
  const [cards, setCards] = useState(shuffledCards.map((symbol, index) => ({
    id: index,
    symbol,
    flipped: false,
    matched: false
  })));
  const [selected, setSelected] = useState([]);
  const [matchedCount, setMatchedCount] = useState(0);

  useEffect(() => {
    if (selected.length === 2) {
      const [first, second] = selected;
      if (cards[first].symbol === cards[second].symbol) {
        const updatedCards = cards.map((card, index) =>
          index === first || index === second ? { ...card, matched: true } : card
        );
        setCards(updatedCards);
        setMatchedCount(matchedCount + 1);
        setSelected([]);
      } else {
        setTimeout(() => {
          const updatedCards = cards.map((card, index) =>
            index === first || index === second ? { ...card, flipped: false } : card
          );
          setCards(updatedCards);
          setSelected([]);
        }, 1000);
      }
    }
  }, [selected]);

  const handleFlip = (index) => {
    if (cards[index].flipped || cards[index].matched || selected.length === 2) return;

    const updatedCards = [...cards];
    updatedCards[index].flipped = true;
    setCards(updatedCards);
    setSelected([...selected, index]);
  };

  const resetGame = () => {
    const reshuffled = [...cardsData].sort(() => 0.5 - Math.random()).map((symbol, index) => ({
      id: index,
      symbol,
      flipped: false,
      matched: false
    }));
    setCards(reshuffled);
    setSelected([]);
    setMatchedCount(0);
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>🧠 Memory Match Game</h2>
      <div style={styles.grid}>
        {cards.map((card, index) => (
          <div
            key={card.id}
            style={{
              ...styles.card,
              backgroundColor: card.flipped || card.matched ? '#f9fafb' : '#4f46e5',
              cursor: card.flipped || card.matched ? 'default' : 'pointer',
            }}
            onClick={() => handleFlip(index)}
          >
            <span style={styles.cardText}>
              {card.flipped || card.matched ? card.symbol : '❓'}
            </span>
          </div>
        ))}
      </div>
      {matchedCount === cardsData.length / 2 && (
        <div style={styles.message}>
          🎉 Great job! All matches found.
          <button style={styles.button} onClick={resetGame}>Play Again</button>
        </div>
      )}
    </div>
  );
};

const styles = {
  container: {
    fontFamily: 'sans-serif',
    textAlign: 'center',
    padding: '20px',
    minHeight: '90vh',
    boxShadow: '1px 2px blue'
  },
  title: {
    fontSize: '2rem',
    marginBottom: '20px',
    color: '#1e40af'
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(4, 80px)',
    gap: '10px',
    justifyContent: 'center',
    marginBottom: '20px'
  },
  card: {
    width: '80px',
    height: '80px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '2rem',
    borderRadius: '8px',
    color: '#1e3a8a',
    boxShadow: '0 2px 6px rgba(0,0,0,0.2)',
    userSelect: 'none'
  },
  cardText: {
    fontSize: '2rem'
  },
  message: {
    fontSize: '1.2rem',
    color: '#065f46',
    marginTop: '20px'
  },
  button: {
    marginLeft: '10px',
    padding: '8px 16px',
    fontSize: '1rem',
    backgroundColor: '#9d99dfff',
    color: 'white',
    border: 'none',
    borderRadius: '6px',
    cursor: 'pointer'
  }
};

export default MemoryGame;
