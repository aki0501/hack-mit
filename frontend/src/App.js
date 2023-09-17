import Navbar from "./Navigation"
import Home from "./pages/Home"
import Profile from "./pages/Profile"
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
