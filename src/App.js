import './App.css';
import Sidebar from './components/Sidebar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import Professor from './pages/Professor';
import Student from './pages/Student';
import Activity from './pages/Activity';

function App() {
  return (
    <div className="App">
        <Router>
          <Sidebar/>
          <Switch>
            <Route path='/' exact component={Home}/>
            <Route path='/students' exact component={Student}/>
            <Route path='/professors' exact component={Professor}/>
            <Route path='/activity' exact component={Activity}/>
          </Switch>
        </Router>
    </div>
  );
}

export default App;