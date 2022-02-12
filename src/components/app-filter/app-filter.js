import React from "react";
import SearchPanel from "../search-panel/search-panel";
import './app-filter.css';

class AppFilter extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            rules:''
        }
    }
    searchWithRules = (rules) =>{
        this.setState({rules})
        this.props.getNeedsEmploees(rules)
    }


    render(){

    const buttonsData = [
        {name: 'employees', text: 'Все сотрудники',},
        {name: 'rise', text: 'На повышение',},
        {name: '>1000$', text: '>1000$',}
    ]    
    
    const createButtons = 
        buttonsData.map(button => {
        return(
        <button
        key={button.name}
        className="btn"
        type="button"
        onClick={() => this.searchWithRules(button.name)}
        >
           {button.text}
        </button>
        )
        })
    
    
    return(
        <div className="app-filter">
            <SearchPanel onUpdateSearch={this.props.onUpdateSearch}/>
            <div className="btn-group">
             {createButtons}
            </div>
        </div>
        
    );
    };
};

export default AppFilter