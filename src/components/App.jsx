import { useState } from 'react';
import Card from './Card';
import '../styles/App.css';

const EEVEES = [
    "eevee",
    "vaporeon",
    "jolteon",
    "flareon",
    "espeon",
    "umbreon",
    "leafeon",
    "glaceon",
    "sylveon"
  ];

// Fisher-Yates shuffle
function shuffle(array) {
  let currentIndex = array.length;

  // While there remain elements to shuffle...
  while (currentIndex != 0) {

    // Pick a remaining element...
    let randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]];
  }
}

function App() {
  const [eeveesLeft, setEeveesLeft] = useState([...EEVEES]);
  const shuffledEevees = [...EEVEES];
  shuffle(shuffledEevees);

  const [bestScore, setBestScore] = useState(0);
  const score = EEVEES.length - eeveesLeft.length;

  function handleOnClick(eeveeClicked) {
    if (eeveesLeft.includes(eeveeClicked)) {
      const newScore = score + 1;
      if (newScore >= EEVEES.length) {
        setEeveesLeft([...EEVEES]);
        console.log("Congrats :3");
      } else {
        setEeveesLeft(eeveesLeft.filter((eevee) => eevee !== eeveeClicked));
      } 
    
      if (newScore > bestScore) {
        setBestScore(newScore);
      }
    } else {
      setEeveesLeft([...EEVEES]);
    }
  }
  
  return (
    <>
      <header>
        <section>
          <h1>Pokemon Memory Game</h1>
          <aside>
            <p>Score: {score}</p>
            <p>Best score: {bestScore}</p>
          </aside>
        </section>
        <p>Get points by clicking on an image but don't click on any more than once!</p>
      </header>
      <main>
        {
          shuffledEevees.map(eevee => 
            <Card name={eevee} key={eevee} handleOnClick={handleOnClick}>{ eevee[0].toUpperCase() + eevee.slice(1) }</Card>
          )
        }
      </main>
    </>
  )
}

export default App
