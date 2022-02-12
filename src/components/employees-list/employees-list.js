import React from "react";
import EmployeesListItem from '../employees-list-item';
import './employees-list.css';

const EmployeesList = ({data, onDelete, onToggle}) =>{
    const elements = data.map(item => {
        const {key, ...itemProps} = item
        return <EmployeesListItem 
        key={key} 
        {...itemProps} 
        onDel={() => onDelete(key)}
        onToggle={(e) => onToggle(key, e.currentTarget.getAttribute('toggle'))}
        />
    })

    return(
        <div >
            {elements}
        </div>
    );
};

export default EmployeesList