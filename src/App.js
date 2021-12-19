import {
  BrowserRouter as Router,
  Navigate,
  Route,
  Routes
} from "react-router-dom";
import "./App.css";
import { AuthProvider } from "./AuthContext/AuthContext";
import Leyout from "./component/Leyout/Main";
import LogIn from "./component/LogInArea/LogIn";
import Home from "./component/pages/Home";
import Quiz from "./component/pages/Quiz";
import Result from "./component/pages/Result";
// import PrivetRoute from "./component/PrivetRoute/PrivetRoute";
import SignUp from "./component/SignUp/SigUp";
function App() {
  return (
    <Router>
      <div className="App">
        <AuthProvider>
          <Leyout>
            <Routes>
              <Route path="/*" element={<Home />} />
              <Route path="/*" element={<Navigate to="Home" />} />
              <Route path="/logIn" element={<LogIn />} />
              <Route path="/signUp/*" element={<SignUp />} />
              <Route path="/quiz/:useId" element={<Quiz />} />
              <Route path="/result/:useId" element={<Result />} />
            </Routes>
          </Leyout>
        </AuthProvider>
      </div>
    </Router>
  );
}

export default App;
