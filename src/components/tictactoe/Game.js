import { useState, useEffect } from "react";
import { handleWinner } from "../../helper";
import Board from "./Board";
import "./gameStyle.css";

function Game() {
    const [boards, setBoards] = useState(Array(9).fill(null));
    const [xIsNext, setXIsNext] = useState(true);
    const winner = handleWinner(boards);
    console.log(winner);
    const handleClick = (index) => {
        const boardsCopy = [...boards];
        if (winner || boardsCopy[index]) return;
        boardsCopy[index] = xIsNext ? "X" : "O";
        setBoards(boardsCopy);
        setXIsNext(!xIsNext);
    };

    const handleResetGame = () => {
        setBoards(Array(9).fill(null));
        setXIsNext(true);
    };
    useEffect(() => {
        if (!xIsNext) {
            const boardsCopy = [...boards];
            const arrIndex = [];
            boardsCopy.forEach((item, index) => {
                if (!item) arrIndex.push(index);
            });
            // console.log(arrIndex);
            boardsCopy[arrIndex[Math.floor(Math.random() * arrIndex.length)]] =
                "O";

            if (!winner) {
                setBoards(boardsCopy);
                setXIsNext(!xIsNext);
            }
        }
    }, [xIsNext]);

    return (
        <div>
            <Board cell={boards} onClick={handleClick}></Board>
            {winner && (
                <div className="game-winner">
                    {winner ? `Winner is ${winner}` : ""}
                </div>
            )}
            <button className="game-reset" onClick={handleResetGame}>
                Reset game
            </button>
        </div>
    );
}

export default Game;
