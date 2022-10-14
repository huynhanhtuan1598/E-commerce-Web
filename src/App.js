import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'mdb-react-ui-kit/dist/css/mdb.min.css'
import { Fragment } from 'react';
import Home_Page from './Page/Home-Page/Home_Page';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import {publicRoutes} from './Router/index'

function App() {
  return (
    // <Router>
    <div className="App">
      <Routes>
        {publicRoutes.map((route, index) => {
          const Page = route.component
          return(
            <Route key={index} path = {route.path} element = {<Page/>}/>)
          })}
        </Routes>
    </div>
    // </Router>
  );
}

export default App;
