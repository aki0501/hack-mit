import Navbar from "./Navigation"
import Home from "./pages/Home"
import Profile from "./pages/Profile"
import Login from "./pages/Login"
import Signup from "./pages/Signup"
import ElectedOfficials from "./pages/ElectedOfficials"
import "./styles/App.css"
import background from "./icons/forest3.jpeg"
import TreeMail from "./pages/TreeMail"

function App() {
  let Component
  switch (window.location.pathname) {
    case "/":
      Component = Login
      break
    case "/ElectedOfficials":
      Component = ElectedOfficials
      break
    case "/Profile":
      Component = Profile
      break
    case "/signup":
      Component = Signup
      break
    case "/treemail":
      Component = TreeMail
      break
    case "/home":
      Component = Home
      break
    default:
      Component = Home
  }

  return (
    <div>
      <Navbar />
      <div className="component-container">
        <Component />
      </div>
    </div>
  );
}

export default App;
