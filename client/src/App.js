import './App.css';
import {BrowserRouter as Router, Switch, Route} from  'react-router-dom'
import Home from './pages';
import SigninPage from './pages/signin';
import SignUpPage from './pages/signup';
import Logout from './components/Logout';
function App() {
  return (
    <Router>
      <Switch>
        <Route path='/' component={Home} exact />
        <Route path='/signin' component={SigninPage} exact />
        <Route path='/signup' component={SignUpPage} exact />
        <Route path = '/logout' component={Logout} exact />
      </Switch>
    </Router>
  );
}

export default App;
