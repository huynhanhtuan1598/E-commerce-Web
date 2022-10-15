import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Headers from './components/page/Header';
import {publicRoutes} from './Router/index';
import 'mdb-react-ui-kit/dist/css/mdb.min.css'




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

