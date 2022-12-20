import React from "react";
import { useDrag } from "react-dnd";


function Piece({ piece: { type, color }, position }) {

    
    

    const [{isDragging}, drag] = useDrag(() => ({

        type: 'piece',
        item: {id: `${position}_${type}_${color}`},
        collect: monitor =>({
            isDragging: !!monitor.isDragging()
        })
    }))
    
    const pieceImg = (`../assets/${type}_${color}.png`) 
    
    return (
        <>
        
        <div className="piece-container" ref={drag} style={{
        opacity: isDragging ? 0 : 1,
        fontSize: 25,
        fontWeight: 'bold',
        
      }}>
            <img src={pieceImg} alt='pieceImg' className="piece"/>
            
        </div>
        
        </>
    );
};

export default Piece;

