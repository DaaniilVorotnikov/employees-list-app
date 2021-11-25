import './app.css';
import AppFilter from '../app-filter';
import AppInfo from '../app-info';
import EmployeesAddForm from '../employees-add-form';
import EmployeesList from '../employees-list';


function App() {
  return (
    <div className="app">
        <AppInfo/>
        <AppFilter/>
        <EmployeesList/>
        <EmployeesAddForm/>
    </div>
  );
}

export default App;
