import React, { Component } from 'react';
let operators = ["/", "*", "+", "-", "="];
class Calculator extends Component {
    constructor(props){
        super(props);
        this.state = {
            display: '0',
            query: '',
            answer: false,
            minusAtLast: false
        }
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick(e){
        let data = e.target.innerHTML;
        if(data === "AC"){
            this.setState({
                display: '0',
                query: '',
                answer: 0
            })
        } else if(data === "="){
            let a = this.state.display;
            let b = this.state.query;
            try{
                this.setState({
                    display: "" + eval(this.state.query),
                    query: ''+ eval(this.state.query),
                    answer: true
                })
            }
            catch(err){
                this.setState({
                    display:a,
                    query:b,
                    answer: false
                })
            }
            
        } else if(data ==="."){
            if(!this.state.display.split('').includes('.')){
                this.setState({
                    display: this.state.display + data,
                    query: this.state.query + data,
                    answer: false
                })
            } 
        } else if(this.state.display === '0' && !operators.includes(data)) {
            if(data === "0"){
                this.setState({
                    display: data,
                    answer: false
                })
            } else {
                this.setState({
                    display: data,
                    query: this.state.query + data,
                    answer: false
                })
            }
            
        } else if(operators.includes(data)) {
            if(operators.includes(this.state.query[this.state.query.length - 1]) ){
                if(data === "-"){
                    this.setState({
                        display: data,
                        query: this.state.query + data,
                        answer: false,
                        minusAtLast: true
                    })
                } else{
                    if(this.state.minusAtLast){
                        this.setState({
                            display: data,
                            query: this.state.query.substring(0,this.state.query.length - 2) + data,
                            answer: false,
                            minusAtLast:false
                        })
                    } else{
                        this.setState({
                            display: data,
                            query: this.state.query.substring(0,this.state.query.length - 1) + data,
                            answer: false
                        })
                    }
                    
                
                }
                
            } else {
                this.setState({
                    display: data,
                    query: this.state.query + data,
                    answer: false
                })
            }
            
        } else if(operators.includes(this.state.display)) {
            this.setState({
                display: data,
                query: this.state.query + data,
                answer: false
            })
        } else {
            if(this.state.answer === true) {
                this.setState({
                    display: data,
                    query: data,
                    answer: false
                })
            } else{
                this.setState({
                    display: this.state.display + data,
                    query: this.state.query + data,
                    answer: false
                })
            }
            
        }
        
    } 
    render(){
        return(
            <div className="calcscreen">
                <div className="calc longer" id="query">{this.state.query}</div>
                <div className="calc longer" id="display">{this.state.display}</div>
                <div className="first">
                    <button className="calc long" onClick={this.handleClick} id="clear">AC</button>
                    <button className="calc smal" onClick={this.handleClick} id="divide">/</button>
                    <button className="calc smal" onClick={this.handleClick} id="multiply">*</button>
                </div>
                <div className="second">
                    <button className="calc smal" onClick={this.handleClick} id="seven">7</button>
                    <button className="calc smal" onClick={this.handleClick} id="eight">8</button>
                    <button className="calc smal" onClick={this.handleClick} id="nine">9</button>
                    <button className="calc smal" onClick={this.handleClick} id="subtract">-</button>
                </div>
                <div className="third">
                    <button className="calc smal" onClick={this.handleClick} id="four">4</button>
                    <button className="calc smal" onClick={this.handleClick} id="five">5</button>
                    <button className="calc smal" onClick={this.handleClick} id="six">6</button>
                    <button className="calc smal" onClick={this.handleClick} id="add">+</button>
                </div>
                <div className="incoming">
                    <div className="evencoming">
                        <div className="fourth">
                            <button className="calc smal" onClick={this.handleClick} id="one">1</button>
                            <button className="calc smal" onClick={this.handleClick} id="two">2</button>
                            <button className="calc smal" onClick={this.handleClick} id="three">3</button>
                        </div>
                        <div className="fifth">
                            <button className="calc long" onClick={this.handleClick} id="zero">0</button>            
                            <button className="calc smal" onClick={this.handleClick} id="decimal">.</button>
                        </div>
                     </div>
                     <button className="calc vertlong" onClick={this.handleClick} id="equals">=</button> 
                </div>
                
                
            </div>
        );

        
    }
}

export default Calculator;