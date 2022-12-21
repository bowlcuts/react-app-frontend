import React from "react";
import Square from "./Square";
import { move } from "./Game";

const promotionPiece = ['r', 'n', 'b', 'q']

function Promote({
    promotion: {from, to, color}

}){
    return(
        <div className="board">
            {promotionPiece.map((p, i) => (
                <div key={i} className="promote-square">
                    <Square black={i % 3 === 0}>
                        <div className="piece-container" onClick={() => move(from, to, p)}>
                            <img 
                            src={(`../assets/${p}_${color}.png`)} 
                            alt="pieceImg" 
                            className="piece cursor-pointer" 
                            />
                        </div>
                    </Square>
                </div>
            ))}
        </div>
    );
};

export default Promote;