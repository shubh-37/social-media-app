import { useContext } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import { postContext } from "./contexts/PostContextProvider";
import Bookmark from "./pages/BookmarkPage";
import Explore from "./pages/ExplorePage";
import HomePage from "./pages/HomePage";
import LandingPage from "./pages/LandingPage";
import Login from "./pages/LoginPage";
import Profile from "./pages/ProfilePage";
import SignUp from "./pages/SignUpPage";
import ThirdPerson from "./pages/ThirdPersonPage";

function App() {
  const { isDarkMode } = useContext(postContext);
  return (
    <div
      className="App"
      style={{
        color: isDarkMode ? "white" : "black",
        backgroundColor: isDarkMode ? "#0f172a" : "#93c5fd",
      }}
    >
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/landing" element={<LandingPage />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/bookmark" element={<Bookmark />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/tp/:userId" element={<ThirdPerson />} />
      </Routes>
    </div>
  );
}

export default App;
