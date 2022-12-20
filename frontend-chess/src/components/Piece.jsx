import React from "react";
import { useDrag, DragPreviewImage } from "react-dnd";


function Piece({ piece: { type, color } }) {

    

    const [, drag] = useDrag( {

        type: 'piece',
        item: {id: `${type}_${color}`}
    })
    
    const pieceImg = (`../assets/${type}_${color}.png`) 
    
    return (
        <>
  
        <div className="piece-container" ref={drag}>
            <img src={pieceImg} alt='pieceImg' className="piece"/>
            
        </div>
   
        </>
    );
};

export default Piece;