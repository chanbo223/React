class Square extends React.Compornent{
    constructor(props){
        super(props);
        this.state = {
            value: null,
        };
    }
    render(){
        return(
        <button className="square"
        onClick={() => this.setState({value:'X'})}>
        {this.state.value}
        </button>
        );
    }
}
class Board extends React.Component {
    constructor(props){                  
        super(props);
        this.state = {
            square: ASrray(9).fill(null), //９つの正方形(マス)に対応する配列
        };
    }

    renderSquare(i){
        return <Square value={this.state.squares[i]} />;
    }
}



