import { useState } from 'react'
import '../styles/App.css'

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
          <h1>Detective Conan Memory Game</h1>
          <aside>
            <p>Score: {score}</p>
            <p>Best score: {bestScore}</p>
          </aside>
        </section>
        <p>Get points by clicking on an image but don't click on any more than once!</p>
      </header>
      <main>
        <figure>
          <img src="" alt="" />
          <figcaption></figcaption>
        </figure>
      </main>
    </>
  )
}

export default App
