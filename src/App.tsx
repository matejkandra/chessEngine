import React from 'react';
import './App.css';
import Tile from "./chesstile";
import moveFEN from "./FENotation";

function App() {

    let chessBoard = new Array(8);
    for (let i = 0; i < 8; i++) {
        chessBoard[i] = []
    }

    let colors:string[] = [`bg-gray-400`, `bg-black`]

    let count:number = 0

    let initialPos:string = "PPP///PPPP/PPP/PPPPPP"

    for (let i:number = 0; i < 8; i++) {
        for (let j:number = 0; j < 8; j++) {
            chessBoard[i].push(<Tile key={count} nums={count} color={colors[(i+j)%2]}/>)
            count++
        }
    }
    console.log(chessBoard.length)

    moveFEN(chessBoard,initialPos)

  return (
      <div className="flex justify-center pt-8">
        <div className="inline-grid grid-cols-8" onMouseDown={(e) => (e.preventDefault())}>
            {chessBoard}
        </div>
      </div>
  );
}

export default App;
