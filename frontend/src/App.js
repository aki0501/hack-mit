import Navbar from "./Navigation"
import Home from "./pages/Home"
import Profile from "./pages/Profile"
import Login from "./pages/Login"
import Signup from "./pages/Signup"
import ElectedOfficials from "./pages/ElectedOfficials"
import "./styles/App.css"


function App() {
  let Component
  switch (window.location.pathname) {
    case "/":
      Component = Home
      break
    case "/ElectedOfficials":
      Component = ElectedOfficials
      break
    case "/Profile":
      Component = Profile
      break
    case "/login":
      Component = Login
      break
    case "/signup":
      Component = Signup
      break
    default:
      Component = Home
  }

  return (
    <>
      <Navbar />
      <Component />
    </>
  );
}

export default App;
