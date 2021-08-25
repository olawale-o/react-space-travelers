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
      <Route path="/rockets" exact component={Rockets} />
      <Route path="/dragons" component={Dragons} />
      <Route path="/missions" component={Missions} />
      <Route path="/my-profile" component={Profile} />
    </Switch>
  </div>
);

export default App;
