import './App.css';
import {BrowserRouter as Router, Switch, Route} from  'react-router-dom'
import Home from './pages';
import SigninPage from './pages/signin';
import SignUpPage from './pages/signup';
import Dashboard from './pages/dashboard';
function App() {
  return (
    <Router>
      <Switch>
        <Route path='/' component={Home} exact />
        <Route path='/signin' component={SigninPage} exact />
        <Route path='/signup' component={SignUpPage} exact />
        <Route path = '/dashboard' component={Dashboard}/>
      </Switch>
    </Router>
  );
}

export default App;
