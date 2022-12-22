import React, { useEffect, useState } from "react";
import BoardSquare from "./BoardSquare";
import { Chess } from "chess.js";
import { AuthContext } from '../context/auth.context';
import { useContext } from 'react';

function Board ({board}) {

    // const [currBoard, setCurrBoard] = useState([])

    // useEffect(() => {
    //     setCurrBoard(
    //         turn === 'w' ? board.flat() : board.flat().reverse()
    //     )
    // }, [board, turn])

    // console.log(turn, board)


    function getXYPosition(i) {
        const x = i % 8
        const y = Math.abs(Math.floor(i / 8) - 7)
            
        return { x, y }
    }

    function isBlack(i) {
        const {x, y} = getXYPosition(i)
        return (x + y) % 2 === 0
    }

    function getPosition(i){
        
        const { x, y } = getXYPosition(i)
        const letter = ["a", "b", "c", "d", "e", "f", "g", "h"][x]
        return `${letter}${y + 1}`
    }

    return (
        <div className="board">
            {board.flat().map((piece, i) => 
            <div key={i} className="square">
                <BoardSquare 
                piece={piece} 
                black={isBlack(i)} 
                position={getPosition(i)} 
                />
            </div>
            )}
        </div>
    );
};

export default Board;

