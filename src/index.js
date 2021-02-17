import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';


// - ShoppingList
// : React 컴포넌트 클래스 or React 컴포넌트 타입

// - props
// : 개별 컴포넌트에서 받아온 매개변수

// - render()
// : 화면에 띄우려 하는 내용을 return
// : 렌더링할 내용을 경량화한 React 엘리먼트를 return

// - <h1>Shopping List for {this.props.name}</h1>
// : JSX를 활용한 구문
// : 중괄호 안에 어떤 JacaScript 표현식도 사용 가능
class ShoppingList extends React.Component {
    render(){
        return (
            <div className="shopping-list">
                <h1>Shopping List for {this.props.name}</h1>
                <ul>
                    <li>Instagram</li>                    
                    <li>Whatsapp</li>                    
                    <li>Oculus</li>                    
                </ul>
            </div>
        )
    }
}


class Square extends React.Component {
    // 컴포넌트의 생성자(constructor)에 this.state 설정
    constructor(props){
        // ** JavaScript 클래스에서 하위 클래스의 생성자를 정의할때 항상 super 호출 **
        // ** 모든 React 컴포넌트 클래스는 생성자를 가질때 super(props) 호출구문 작성 필수 **
        super(props);
        this.state = {
            value: null,
        };
    }
    render() {
        return (
            // onClick으로 사용자와 상호작용할 수 있도록 설정
            <button 
                className="square" 
                onClick={()=>this.setState({value: 'X'})}
            >
                {/* Board 컴포넌트에서 전달받은 value 변수 출력 */}
                {this.state.value}
            </button>
        );
    }
}

// 게임의 상태를 Borad 컴포넌트에 저장하는 것이 중요
class Board extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            squares: Array(9).fill(null),
        };
    }

    renderSquare(i) {
        // 자식 컴포넌트인 Square에 value 변수 전달
        return <Square value = {i} />;
    }
  
    render() {
        const status = 'Next player: X';
  
        return (
            <div>
                <div className="status">{status}</div>
                <div className="board-row">
                    {this.renderSquare(0)}
                    {this.renderSquare(1)}
                    {this.renderSquare(2)}
                </div>
                <div className="board-row">
                    {this.renderSquare(3)}
                    {this.renderSquare(4)}
                    {this.renderSquare(5)}
                </div>
                <div className="board-row">
                    {this.renderSquare(6)}
                    {this.renderSquare(7)}
                    {this.renderSquare(8)}
                </div>
            </div>
        );
    }
}
  
class Game extends React.Component {
    render() {
        return (
            <div className="game">
                <div className="game-board">
                    <Board />
                </div>
                <div className="game-info">
                    <div>{/* status */}</div>
                    <ol>{/* TODO */}</ol>
                </div>
            </div>
        );
    }
}
  
  // ========================================
  
ReactDOM.render(
    <Game />,
    document.getElementById('root')
);
  