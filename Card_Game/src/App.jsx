import { useEffect, useState } from "react";

const CARD_VALUES = ["🍎", "🍌", "🍇", "🍓", "🍍", "🥝"]; // 6 pairs = 12 cards

// Helper to shuffle array
function shuffle(array) {
  return [...array]
    .map((item) => ({ item, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ item }) => item);
}

export default function App() {
  const [cards, setCards] = useState([]);
  const [flipped, setFlipped] = useState([]); // indexes of currently flipped cards
  const [matched, setMatched] = useState([]); // indexes of matched cards
  const [moves, setMoves] = useState(0);
  const [disabled, setDisabled] = useState(false);

  // Start / restart game
  const startGame = () => {
    const deck = CARD_VALUES
      .concat(CARD_VALUES) // make pairs
      .map((value, index) => ({
        id: index,
        value,
      }));

    setCards(shuffle(deck));
    setFlipped([]);
    setMatched([]);
    setMoves(0);
    setDisabled(false);
  };

  useEffect(() => {
    startGame();
  }, []);

  const handleCardClick = (index) => {
    // Ignore if:
    if (disabled) return;
    if (flipped.includes(index)) return; // already flipped
    if (matched.includes(index)) return; // already matched

    const newFlipped = [...flipped, index];
    setFlipped(newFlipped);

    if (newFlipped.length === 2) {
      setDisabled(true);
      setMoves((m) => m + 1);

      const [firstIndex, secondIndex] = newFlipped;
      const firstCard = cards[firstIndex];
      const secondCard = cards[secondIndex];

      if (firstCard.value === secondCard.value) {
        // It's a match
        setMatched((prev) => [...prev, firstIndex, secondIndex]);
        setTimeout(() => {
          setFlipped([]);
          setDisabled(false);
        }, 700);
      } else {
        // Not a match – flip back
        setTimeout(() => {
          setFlipped([]);
          setDisabled(false);
        }, 700);
      }
    }
  };

  const allMatched = cards.length > 0 && matched.length === cards.length;

  return (
    <div className="game-container">
      <h1>Memory Card Game by Gireesh 🃏</h1>
      <div className="info-row">
        <button onClick={startGame}>Restart</button>
        <span>Moves: {moves}</span>
      </div>

      {allMatched && <p className="win-text">You matched all cards! 🎉</p>}

      <div className="grid">
        {cards.map((card, index) => {
          const isFlipped =
            flipped.includes(index) || matched.includes(index);

          return (
            <div
              key={card.id}
              className={`card ${isFlipped ? "flipped" : ""}`}
              onClick={() => handleCardClick(index)}
            >
              <div className="card-inner">
                <div className="card-front">?</div>
                <div className="card-back">{card.value}</div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
