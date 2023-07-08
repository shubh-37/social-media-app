import { useContext, useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Loader from "./components/Loader";
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
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const { isDarkMode } = useContext(postContext);
  const [isLoading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2500);
  }, []);
  return (
    <div
      className="App"
      style={{
        color: isDarkMode ? "white" : "black",
        backgroundColor: isDarkMode ? "#0f172a" : "#93c5fd",
      }}
    >
      {isLoading && <Loader />}
      {!isLoading && (
        <>
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
          <ToastContainer />
        </>
      )}
    </div>
  );
}

export default App;
