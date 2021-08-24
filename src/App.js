import { Route, Switch } from 'react-router';
import './App.css';
import Rockets from './components/Rockets';
import Mission from './components/Mission';
import Profile from './components/Profile';
import Dragons from './components/Dragons';

const App = () => {
  return (
    <div className="App">
      <Switch>
        <Route path="/" exact component={Rockets} />
        <Route path="/Mission" component={Mission} />
        <Route path="/Profile" component={Profile} />
        <Route path="/Dragons" component={Dragons} />
      </Switch>
    </div>
  )
}

export default App;
