import './App.css';
import { Router, Route, Switch } from "react-router";
import Navbar from "./components/UI/Navbar";
import SectionBanner from "./components/UI/SectionBanner";
import NavbarSecondary from "./components/UI/NavbarSecondary";
import { DimBGContextProvider, TranslateXContextProvider } from './components/UI/NavFunctionality';


function App() {
  return (
		<DimBGContextProvider>
			<TranslateXContextProvider>
			<div className="app">
				<Navbar />
				<NavbarSecondary />
				<SectionBanner />
			</div>
			</TranslateXContextProvider>
		</DimBGContextProvider>
  );
}

export default App;