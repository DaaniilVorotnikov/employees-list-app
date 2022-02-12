import React from "react";
import './employees-add-form.css';

class EmployeesAddForm extends React.Component{
    constructor(props){
        super(props);
        this.state ={
            name: '', 
            salary: ''
        }
    }

    onValueChange = (e) =>{
        this.setState({
            [e.target.name] : e.target.value,
            [e.target.salary] : e.target.salary
        })
    }

    onAdd = () =>{
        this.props.handleAdd(this.state.name, this.state.salary);
        this.setState({
            name: '',
            salary: ''
        })
    }


   render(){

    const {name, salary} = this.state

    return(
        <div className="employees-add-form">
            <h4>Добавить нового сотрудника</h4>
            <form className="interactive-panel" onSubmit={this.onSubmit}>
                <input 
                    placeholder="Имя сотрудника"
                    className="form-control"
                    type="text"
                    name="name"
                    onChange={this.onValueChange}
                    value={name}
                />
                <input
                 placeholder="З/П в $"
                 className="form-control"
                 type="text"
                 name="salary"
                 onChange={this.onValueChange}
                 value={salary}
                 />
                <button 
                className="btn"
                type="button"
                onClick={this.onAdd}
                >
                    Добавить 
                </button>
            </form>
        </div>
    );
}};

export default EmployeesAddForm