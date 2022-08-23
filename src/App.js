import "./App.css";
import Login from "./components/Login";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import ChatRoom from "./components/ChatRoom";
import AuthProvider from "./Context/AuthProvider";
import AppProvider from "./Context/AppProvider";
import AddRoomModal from "./components/Modal/AddRoomModal";
import InviteMember from "./components/Modal/InviteMember";

function App() {
  return (
    <Router>
      <AuthProvider>
        <AppProvider>
          <Routes>
            <Route exact path="/login" element={<Login />}></Route>
            <Route path="/" element={<ChatRoom />}></Route>
          </Routes>
          <AddRoomModal />
          <InviteMember />
        </AppProvider>
      </AuthProvider>
    </Router>
  );
}

export default App;
