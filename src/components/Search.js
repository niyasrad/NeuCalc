import React, { Component } from 'react';
import calc from '../assets/calc.png';
import calc1 from '../assets/calc1.png'
import { createClient } from 'pexels';

const client = createClient('563492ad6f9170000100000158e6af51149649a18483f1a974346c95');
class Search extends Component{
    constructor(props){
        super(props);
        this.state = {
            query:'',
            url: ''
        }
        this.handleSearch = this.handleSearch.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }
    handleSearch(){
        let query = this.state.query;
        client.photos.search({ query, per_page: 1 }).then(photos => {
            console.log(photos)
            let a = photos.photos[0].src.original;
            document.body.style.backgroundImage = 'url(\''+a+'\')';
        });
    }
    handleChange(e){
        console.log(e.target.value);
        this.setState({
            query: e.target.value
        })
    }
    render(){
        
        return(
            <div className="dawg">
                <div className="dawg1">
                    <img id="img"src={calc}></img>
                    <img id="img1" src={calc1}></img>
                </div>
                <div className="dawg2">
                    <h1>What do you feel like?</h1>
                    <input type="text" id="feeling" value={this.state.query} onChange={this.handleChange} className="motive" placeholder="e.g Feeling MOTIVATED"></input>
                    <br></br>
                    <button id="submitter" onClick={this.handleSearch}>Try</button>
                </div>
                
                
            </div>
        );
    }
}
export default Search;