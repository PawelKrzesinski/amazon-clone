import './App.css';
import { Router, Route, Switch } from "react-router";
import Navbar from "./components/UI/navbar";
import SectionBanner from "./components/UI/sectionBanner";
import NavbarSecondary from "./components/UI/navbarSecondary";

function App() {
  return (
    <div className="app">
		<Navbar />
		<NavbarSecondary />
		<SectionBanner />
    </div>
  );
}

export default App;
