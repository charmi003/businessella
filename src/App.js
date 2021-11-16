import './App.css';
import Home from './components/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Provider } from 'react-redux'  //for providing the redux store
import store from './redux/store'
import Orders from './components/Orders';
import PageNotFound from './components/PageNotFound';
import Navbar from './components/Navbar';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="App">
            <Navbar/>
            <Switch>
              <Route exact path="/"><Home/></Route>
              <Route exact path="/orders-page"><Orders/></Route>
              <Route path='*'><PageNotFound/></Route>
            </Switch>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
