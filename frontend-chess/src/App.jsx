import { useState, useEffect } from 'react'
import './App.css'
import { gameSubject, initGame, resetGame } from './components/Game'
import Board from './components/Board'

function App() {
  
  const [board, setBoard] = useState([]);
  const [isGameOver, setIsGameOver] = useState();
  const [result, setResult] = useState();
  const [turn, setTurn] = useState();

  useEffect(() => {
    initGame()
    //observable and method
    const subscirbe = gameSubject.subscribe(game => {
      setBoard(game.board)
      setIsGameOver(game.isGameOver)
      setResult(game.result)
      setTurn(game.turn)
  })
    return () => subscirbe.unsubscribe() 
  }, [])

  return (
    <div className="container">
      {isGameOver && (
        <h2 className='game-over-text'>GAME OVER
        <button onClick={resetGame}>
          <span className='new-game'>
            NEW GAME
          </span>
        </button>
        </h2>

      )}
      <div className='board-container'>
        <Board board={board} turn={turn} />
      </div>
      {result && <p className='result'>{result}</p>}
    </div>
  )
}

export default App
