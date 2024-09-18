import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import UserDetails from "./components/UserDetails";
import "./styles.css";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" exact Component={Home} />
        <Route path="user/id" exact Component={UserDetails} />
      </Routes>
    </Router>
  );
};

export default App;
