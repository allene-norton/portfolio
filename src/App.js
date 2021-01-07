import { Router, Route, Link } from "react-router";
import { createBrowserHistory as createHistory } from "history";
import Home from './containers/Home'
import './App.css';
import '/Users/a_norton/Documents/job_search/portfolio/allene-portfolio/node_modules/react-typist/dist/Typist.css'
const history = createHistory();


function App() {
  return (
    <div className="App">
      <Router history={history}>
        <Route path="/" exact component={Home} />
      </Router>
    </div>
  );
}

export default App;
