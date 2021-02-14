import './App.css';
import { Router, Route, Switch } from "react-router";
import Navbar from "./Components/UI/Navbar";
import SectionBanner from "./Components/UI/SectionBanner";
import { TranslateXContextProvider } from './Components/UI/NavFunctionality';


function App() {
	return (
	  	// <Router>
			<TranslateXContextProvider>
				<div className="app">
					<Navbar />
					<SectionBanner />
				</div>
			</TranslateXContextProvider>
		 //</Router>
  );
}

export default App;