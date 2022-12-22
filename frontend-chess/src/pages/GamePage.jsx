import { useState, useEffect } from 'react'
import { gameSubject, initGame, resetGame } from '../components/Game'
import Board from '../components/Board'
import { movesArr } from '../components/Game'

const GamePage = () => {

const [board, setBoard] = useState([]);
const [isGameOver, setIsGameOver] = useState();
const [result, setResult] = useState();


useEffect(() => {
  initGame()
  //observable and method
  const subscirbe = gameSubject.subscribe(game => {
    setBoard(game.board)
    setIsGameOver(game.isGameOver)
    setResult(game.result)
    // setTurn(game.turn)
})
  return () => subscirbe.unsubscribe() 
}, [])

return (
  <div className="container">
    {isGameOver && (
      <h2 className='game-over-text'>GAME OVER
      <button onClick={resetGame} className='new-game-btn'>
        <span className='new-game'>
          NEW GAME
        </span>
      </button>
      </h2>

    )}
    <div className='board-container'>
      <Board board={board}/>
    </div>
    {!isGameOver && (
        <button onClick={resetGame} className='new-game-btn'>
        <span className='newGameBefore'>+</span>
        </button>
      )}
    {result && <p className='result'>{result}</p>}
    {movesArr.length ? 
    <div>
        {movesArr.map((move) => {
            return (
                <div className='move-history'>
                    <p>
                        <span>{move.from}</span>
                        <span>{move.to}</span>
                    </p>
                </div>
            )
        })}
    </div> : null
    }
  </div>
)
}

export default GamePage;