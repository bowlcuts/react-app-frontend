import { Chess } from 'chess.js';
//observable is a way to create some kind of data that we can subscirbe to so that we can listen to changes that are happening.
//behavrio subject allows us to subsribe to different observables
import { BehaviorSubject } from 'rxjs'

// creating a new Chess game
const chess = new Chess()

const gameSubject = new BehaviorSubject({
    // gives us an array representation of the board 
    board: chess.board()
})

export {gameSubject};
