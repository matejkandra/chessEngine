import Tile from "./chesstile";
import {ReactComponent as Blackpawn} from "./white/p.svg"

function moveFEN(board:JSX.Element[][], notation:string):void{
    let indexi:number = 0
    let indexj:number = 0
    let i:number = 0

    while(true){
        if(indexj == 8 && indexi == 8){
            break
        }
        if(indexj == 8){
            indexi++
            indexj = 0
        }
        if(i == notation.length){
            break
        }

        switch (notation.at(i)){
            case "/":
                indexi++
                indexj = 0
                i++
                break
            case "P":
                board[indexi][indexj] =
                    <Tile color={board[indexi][indexj].props.color} key={board[indexi][indexj].props.nums}>
                            <Blackpawn className="w-full h-full"/>
                    </Tile>
                console.log(indexi, " ", indexj)
                i++
                indexj++
                break
            default:
                indexj++
        }
    }

}

export default moveFEN