import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Router, Route, Link, Routes } from "react-router-dom";
import OtherPage from "./OtherPage";
import Fib from "./fib";

function App() {
  return (
    // <Router>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          {/* <Link to="/">Home</Link>
          <Link to="/otherpage">Other Page</Link> */}
        </header>

        <div>
        <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Fib/>}></Route>
          <Route path="/otherpage" element={<OtherPage/>}></Route>
        </Routes>
      </BrowserRouter>
          
        </div>
      </div>
    // </Router>
  );
}

export default App;
