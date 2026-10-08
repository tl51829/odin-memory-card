import { useState } from 'react';
import Card from './Card';
import '../styles/App.css';

function App() {
  const [scores, setScores] = useState([0, 0]); // [currScore, bestScore]
  const score = scores[0];
  const bestScore = scores[1];

  function handleSetScores(newScore) {
    const newScores = [newScore, bestScore];
    if (newScore > bestScore) {
      newScores[1] = newScore;
    }
    setScores(newScores);
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
        <Card name="eevee">Eevee</Card>
        <Card name="eevee" isShiny={true}>Shiny Eevee</Card>
        <Card name="vaporeon">Vaporeon</Card>
        <Card name="jolteon">Jolteon</Card>
        <Card name="flareon">Flareon</Card>
        <Card name="espeon">Espeon</Card>
        <Card name="umbreon">Umbreon</Card>
        <Card name="leafeon">Leafeon</Card>
        <Card name="glaceon">Glaceon</Card>
        <Card name="sylveon">Sylveon</Card>
      </main>
    </>
  )
}

export default App
