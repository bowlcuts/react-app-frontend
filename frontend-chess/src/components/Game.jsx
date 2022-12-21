import { Chess } from 'chess.js';
//observable is a way to create some kind of data that we can subscirbe to so that we can listen to changes that are happening.
//behavrio subject allows us to subsribe to different observables
import { BehaviorSubject } from 'rxjs'

//FEN position * represents any position on a chessboard *
let promotion = 'rnb2bnr/pppPkppp/8/4p3/7q/8/PPPP1PPP/RNBQKBNR w KQ - 1 5'
let staleMate = '4k3/4P3/4K3/8/8/8/8/8 b - - 0 1'
let checkMate = 'rnb1kbnr/pppp1ppp/8/4p3/5PPq/8/PPPPP2P/RNBQKBNR w KQkq - 1 3'
let insufficcientMaterial = 'k7/8/n7/8/8/8/8/7K b - - 0 1'

// creating a new Chess game
const chess = new Chess()

const gameSubject = new BehaviorSubject()

function initGame(){
    updateGame()
}

function resetGame() {
    chess.reset()
    updateGame()
}

function handleMove(from, to){
    const promotions = chess.moves({verbose: true}).filter(m => m.promotion)
    console.table(promotions)
    if(promotions.some(p => `${p.from}:${p.to}` === `${from}:${to}`)) {
        const pendingPromotion = {from, to, color: promotions[0].color}
        updateGame(pendingPromotion)
    }
    const {pendingPromotion} = gameSubject.getValue()
    if(!pendingPromotion) {
        move(from ,to )
    }
   
}

function move (from, to, promotion){
    console.log(from, to)
    let tempMove = {from, to}
    if(promotion) {
        tempMove.promotion = promotion
    }

    const legalMove = chess.move(tempMove)
    if(legalMove){
        updateGame()
    }
}

function updateGame(pendingPromotion) {
    const isGameOver = chess.isGameOver()
    const newGame = {
        board: chess.board(),
        pendingPromotion,
        isGameOver,
        turn: chess.turn(),
        result: isGameOver ? getGameResult() : null
    }

    gameSubject.next(newGame)
}
function getGameResult() {
    if(chess.isCheckmate()) {
        const winner = chess.turn() === "w" ? 'BLACK' : 'WHITE'
        return `CHECKMATE - WINNER IS - ${winner}`
    } else if(chess.isDraw()){
        let reason = '50 - MOVES - RULE'
        if(chess.isStalemate()) {
            reason = 'STALEMATE'
        } else if(chess.isThreefoldRepetition()) {
            reason = 'REPETITION'
        } else if(chess.insufficcientMaterial()) {
            reason = 'INSUFFICIENT MATERIAL'
        }
        return `DRAW - ${reason}`
    }else {
        return 'UNKNOWN REASON'
    }
}

export {
    gameSubject,
    move,
    initGame,
    handleMove,
    resetGame
};
