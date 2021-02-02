import './App.css';
import { Router, Route, Switch } from "react-router";
import Navbar from "./components/UI/Navbar";
import SectionBanner from "./components/UI/SectionBanner";
import NavbarSecondary from "./components/UI/NavbarSecondary";
import { ShowMenuContextProvider } from './components/UI/ShowMenuProvider';
function App() {

  return (
    <ShowMenuContextProvider>
    <div className="app">
		<Navbar />
		<NavbarSecondary />

		<div>
			<SectionBanner />
		</div>
    </div>
    </ShowMenuContextProvider>
  );
}

export default App;
