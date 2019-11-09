import React, {Component} from 'react';

class Buttons extends Component {

  render() {
    return (
      <div className="buttons">
        <div className="button" onClick={() => this.props.onClick("1")}>1</div>
        <div className="button" onClick={() => this.props.onClick("2")}>2</div>
        <div className="button" onClick={() => this.props.onClick("3")}>3</div>
        <div className="button" onClick={() => this.props.onClick("+")}>+</div>
        <div className="button" onClick={() => this.props.onClick("4")}>4</div>
        <div className="button" onClick={() => this.props.onClick("5")}>5</div>
        <div className="button" onClick={() => this.props.onClick("6")}>6</div>
        <div className="button" onClick={() => this.props.onClick("-")}>-</div>
        <div className="button" onClick={() => this.props.onClick("7")}>7</div>
        <div className="button" onClick={() => this.props.onClick("8")}>8</div>
        <div className="button" onClick={() => this.props.onClick("9")}>9</div>
        <div className="button" onClick={() => this.props.onClick("*")}>&#8226;</div>
        <div className="button" onClick={() => this.props.onClick(".")}>.</div>
        <div className="button" onClick={() => this.props.onClick("0")}>0</div>
        <div className="button" onClick={() => this.props.onClick("=")}>=</div>
        <div className="button" onClick={() => this.props.onClick("/")}>÷</div>
        <div className="button" onClick={() => this.props.onClick("(")}>(</div>
        <div className="button" onClick={() => this.props.onClick("CE")}>CE</div>
        <div className="button" onClick={() => this.props.onClick(")")}>)</div>
        <div className="button" onClick={() => this.props.onClick("C")}>C</div>
      </div>
    );
  }
}


export default Buttons;
