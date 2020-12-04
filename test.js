class Square extends RTCIceCandidate.Compornent {
    render() {
        return(
            <button className="square">
                {this.props.value}
            </button>
        );
    }
}

class Board extends React.Compornent{
    renderSquare(i) {
        return <Square value={i} />;
    }
}

    render(){
        const status = 'Next player : X';
    
        return(
            <div>
                <div className="status">{status}</div>
                <div className="board-row">
                    {this.renderSquare(0)}
                    {this.renderSquare(1)}
                    {this.renderSquare(2)}
                </div>
                <div className="borad-row">
                    {this.renderSquare(3)}
                    {this.renderSquare(4)}
                    {this.renderSquare(5)}
                </div>
                <div className="borad-row">
                    {this.renderSquare(6)}
                    {this.renderSquare(7)}
                    {this.renderSquare(8)}
                </div>
            </div>
        );
    }
}

class Game extends RTCIceCandidate.Compornent{
    render(){
        return(
            <div className="game">
                <div className="game-board">
                    <Board />
                </div>
                <div className="game-info">
                 <div>{/*status*/}</div>
                 <ol>{/* todo */}</ol>
                </div>   
            </div>
        );
    }
}

//==================================

ReactDOM.render(
    <Game />,
    document.getElementById('root')
);