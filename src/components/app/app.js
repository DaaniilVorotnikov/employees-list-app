import './app.css';
import AppFilter from '../app-filter';
import AppInfo from '../app-info';
import EmployeesAddForm from '../employees-add-form';
import EmployeesList from '../employees-list';
import React from 'react';


class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      data: [
      {name: "John", salary: '10000', increase: false, rise: false, key: 1},
      {name: "Anna", salary: '8000', increase: false, rise: false, key: 2},
      {name: "Ratata", salary: '9000', increase: false, rise: false, key: 3},
    ],
      term: '',
      filterData: null   
  }
    this.maxId = 4
  }

  updateClone = (newClone) =>{
    this.clone = newClone
  }

  increaseCount = (key, props) => {
    this.setState(({data}) => ({
      data: data.map(item => {
        if(item.key === key){
          return {...item, [props]: !item[props]}
        }
        return item;
      })
    }))
  }

  deleteItem = (key) => {
    this.setState(({data}) =>{
      return{
        data: data.filter(item => item.key !== key)
      }
    })
  }
  searchEmployees = (items, term) =>{
    if(term.length === 0){
      return items
    }
    return items.filter(item => {
      return item.name.indexOf(term) > - 1
    })
  }
  onUpdateSearch = (term) => {
      this.setState({term})
  }

  addItem = (name, salary) => {
    if(name && salary){
    const randKey = this.maxId++
    const newItem = {
      name,
      salary,
      increase:false,
      key:randKey
    }
    this.setState(({data}) =>{
      const newData = [...data, newItem]
      this.updateClone(newData)
        return{data: newData}
    })
  }
  }

  getNeedsEmploees = (rule) => {
    switch(rule){
      case 'rise':
        const rise = this.state.data.filter(item => item.rise === true)
        this.setState({filterData: rise})
        break
      case 'employees':  
        this.setState({filterData: null})
        break
      case '>1000$':
        const moreThousand = this.state.data.filter(item => item.salary > 1000)
        this.setState({filterData: moreThousand})
        break
    }
  }



 render(){
  const {data, term, filterData} = this.state 
  const finalData = !filterData ? data : filterData
  const inc = this.state.data.filter(item => item.increase === true)
  const employees = this.state.data.filter(item => item.key)
  const visibleData = this.searchEmployees(finalData, term)

  return (
    <div className="app">
        <AppInfo
         increase={inc.length}
          employees={employees.length}
        />
        <AppFilter
         onUpdateSearch={this.onUpdateSearch}
         getNeedsEmploees={this.getNeedsEmploees}
        />
        <EmployeesList 
        data={visibleData}
        onDelete={this.deleteItem}
        onToggle={this.increaseCount}
        />
        <EmployeesAddForm 
          handleAdd={this.addItem}
        />
    </div>
  );
 }  
}


export default App;
