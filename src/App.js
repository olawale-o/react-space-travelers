import { Route, Switch } from 'react-router-dom';
import './App.css';
import Rockets from './components/Rockets';
import Missions from './components/Missions';
import Profile from './components/Profile';
import Dragons from './components/Dragons';
import Header from './components/Header';

const App = () => (
  <div className="App">
    <Header />
    <Switch>
      <Route path="/" exact component={Rockets} />
      <Route path="/Dragons" component={Dragons} />
      <Route path="/Missions" component={Missions} />
      <Route path="/Profile" component={Profile} />
    </Switch>
  </div>
);

export default App;
