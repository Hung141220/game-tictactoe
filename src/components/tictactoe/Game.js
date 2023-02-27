import { useState } from "react";
import { handleWinner } from "../../helper";
import Board from "./Board";
import "./gameStyle.css";

function Game() {
    const [boards, setBoards] = useState(Array(9).fill(null));
    const [xIsNext, setXIsNext] = useState(true);
    const winner = handleWinner(boards);

    const handleClick = (index) => {
        const boardsCopy = [...boards];
        if (winner || boardsCopy[index]) return;
        boardsCopy[index] = xIsNext ? "X" : "O";
        setBoards(boardsCopy);
        setXIsNext(!xIsNext);
    };

    const handleResetGame = () => {
        setBoards(Array(9).fill(null));
    };
    return (
        <div>
            <Board cell={boards} onClick={handleClick}></Board>
            {winner && (
                <div className="game-winner">
                    {winner ? `Winner is ${xIsNext ? "O" : "X"}` : ""}
                </div>
            )}
            <button className="game-reset" onClick={handleResetGame}>
                Reset game
            </button>
        </div>
    );
}

export default Game;
