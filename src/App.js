import "./App.css";
import Login from "./components/Login";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import ChatRoom from "./components/ChatRoom";
import AuthProvider from "./Context/AuthProvider";

function App() {
  return (
    <Router>
      <AuthProvider>
        <Routes>
          <Route exact path="/login" element={<Login />}></Route>
          <Route path="/" element={<ChatRoom />}></Route>
        </Routes>
      </AuthProvider>
    </Router>
  );
}

export default App;
