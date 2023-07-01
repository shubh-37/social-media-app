import { useContext } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import RequiresAuth from "./components/RequiresAuth";
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
        <Route
          path="/"
          element={
            <RequiresAuth>
              <HomePage />
            </RequiresAuth>
          }
        />
        <Route path="/landing" element={<LandingPage />} />
        <Route
          path="/explore"
          element={
            <RequiresAuth>
              <Explore />
            </RequiresAuth>
          }
        />
        <Route
          path="/bookmark"
          element={
            <RequiresAuth>
              <Bookmark />
            </RequiresAuth>
          }
        />
        <Route
          path="/profile"
          element={
            <RequiresAuth>
              <Profile />
            </RequiresAuth>
          }
        />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route
          path="/tp/:userId"
          element={
            <RequiresAuth>
              <ThirdPerson />
            </RequiresAuth>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
