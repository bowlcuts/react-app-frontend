import React from "react";
import BoardSquare from "./BoardSquare";


function Board ({board}) {

    function getXYPosition(i) {
        const x = i % 8
        //abs returns absolute value of number so pieces cant go off board
        const y = Math.abs(Math.floor(i / 8) - 7)
        return {x, y}
    }

    function isBlack(i) {
        const {x, y} = getXYPosition(i)
        return (x + y) % 2 === 0
    }
    return (
        <div className="board">
            {board.flat().map((piece, i) => 
            <div key={i} className="square">
                <BoardSquare piece={piece} black={isBlack(i)}/>
            </div>
            )}
        </div>
    );
};

export default Board;