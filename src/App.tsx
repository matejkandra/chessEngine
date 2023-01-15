import React from 'react';
import './App.css';
import Tile from "./chesstile";

function App() {

    let chessBoard:JSX.Element[];

    chessBoard = []

    let colors:string[] = [`bg-gray-400`, `bg-black`]

    let count:number = 0

    for (let i:number = 0; i < 8; i++) {
        for (let j:number = 0; j < 8; j++) {
            chessBoard.push(<Tile key={count} nums={count} color={colors[(i+j)%2]}/>)
            count++
        }
    }
    console.log(chessBoard.length)

  return (
    <div className="inline-grid grid-cols-8 gap-0 p-48">
        {chessBoard}
    </div>
  );
}

export default App;
