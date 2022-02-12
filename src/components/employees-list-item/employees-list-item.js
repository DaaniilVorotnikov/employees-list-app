import React from "react";
import './employees-list-item.css';
import * as Icon from 'react-bootstrap-icons';


class EmployeesListItem extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            starSwitcher: false,
        }
    }
    
    toggleStar = () => {
        this.setState(({starSwitcher})=>({
            starSwitcher: !starSwitcher
        }))
    }


    render(){
        const {name, salary, increase, rise, onToggle, onDel} = this.props;
        const star = <Icon.Star/>
        const starFill = <Icon.StarFill/>

        return(
        <div className="employees-list-items">
            <li className={increase ? "employee active" : "employee"}>
                    <span className="employee-title">
                        {name}
                    </span>

                    <input 
                    className="employee-input-style"
                    defaultValue={salary + '$'}
                    />

                    <div className="employee-btn">
                            <i 
                            className="bi bi-cash"
                            toggle="increase"
                            onClick={onToggle}
                            >
                            <Icon.Cash/>
                            </i>

                        <button
                        type="button"
                        className="btn btn__border"
                        onClick={onDel}
                        >
                            <i 
                            className="bi bi-trash"
                            >
                                <Icon.Trash/>
                            </i>
                        </button>
                            <i 
                            className="bi bi-star"
                            toggle="rise"
                            onClick={onToggle}
                            >
                                {rise ? starFill : star}
                            </i>
                    </div>
            </li>
        </div>    
        );
    }
};

export default EmployeesListItem