import { Route, Switch } from 'react-router-dom';
import './App.css';
import Rockets from './components/Rockets';
import Missions from './components/Missions';
import Profile from './components/Profile';
import Dragons from './components/Dragons';

const App = () => (
  <div className="App">
    <Switch>
      <Route path="/" exact component={Rockets} />
      <Route path="/Missions" component={Missions} />
      <Route path="/Profile" component={Profile} />
      <Route path="/Dragons" component={Dragons} />
    </Switch>
  </div>
);

export default App;
