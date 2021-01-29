import logo from './logo.svg';
import './App.css';

import LoginPage from "./pages/login";
import HomePage from "./pages/home";

import { BrowserRouter as Router, Redirect,Route } from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <Router>
        <Route path="/login" component={LoginPage} />
        <Route path="/home" component={HomePage} />
        <Redirect to='/login' />
      </Router>
    </div>
  );
}

export default App;
