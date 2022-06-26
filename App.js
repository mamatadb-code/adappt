// import logo from './logo.svg';
import './App.css';
import './App.css';
import Table from './Table';
import NewOfficeSchedul from './NewOfficeSchedule';
import SimpleTable from './SimpTab';
import ChangeSchedule from './ChangeSchedule';
import './ChangeSchedule.css';
import './BasicTable';
import BasicTable from './BasicTable';


function App() {
  return (
    <div className="App">
        <ChangeSchedule/>
      <NewOfficeSchedul />
      <SimpleTable/>
      {/* <BasicTable/> */}
    </div>
  );
}

export default App;
