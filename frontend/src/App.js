import Navbar from "./Navigation"
import Home from "./pages/Home"
import Profile from "./pages/Profile"
import "./styles/App.css"


function App() {
  let Component
  switch (window.location.pathname) {
    case "/":
      Component = Home
      break
    case "/Profile":
      Component = Profile
      break
  }

  return (
    <>
      <Navbar />
      <Component />
    </>
  );
}

export default App;
