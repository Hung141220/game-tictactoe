import Cell from "./Cell";

function Board({ cell, onClick }) {
    return (
        <div className="game-board">
            {cell.map((item, index) => (
                <Cell
                    key={index}
                    value={item}
                    onClick={() => onClick(index)}
                    className={
                        item === "X" ? "is-x" : item === "O" ? "is-o" : ""
                    }
                ></Cell>
            ))}
        </div>
    );
}

export default Board;
