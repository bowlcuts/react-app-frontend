import { useState, useEffect } from 'react'
import './App.css'
import { gameSubject } from './components/Game'
import Board from './components/Board'

function App() {
  
  const [board, setBoard] = useState([])

  useEffect(() => {
    //observable and method
    const subscirbe = gameSubject.subscribe(game => 
      setBoard(game.board)
    )
    return () => subscirbe.unsubscribe() 
  }, [])

  return (
    <div className="container">
      <div className='board-container'>
        <Board board={board}/>
      </div>
    </div>
  )
}

export default App
