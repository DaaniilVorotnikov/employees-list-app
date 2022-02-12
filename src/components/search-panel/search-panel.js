import React from "react";

class SearchPanel extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            term: ''
        }
    }
    onUpdateSearch = (e) => {
        const term = e.target.value;
        this.setState({term})
        this.props.onUpdateSearch(term)
    }
    render(){
    return(
        <input
            placeholder="Найти сотрудника"
            className="form-control"
            type="text"
            onChange={this.onUpdateSearch}
        />
    );
};
}

export default SearchPanel