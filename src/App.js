import React from "react";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import HomePage from "./presentation/pages/home_page";
import SplashPage from "./presentation/pages/splash_page";
import WelcomePage from "./presentation/pages/welcome_page";

function App() {
	return (
		<Router>
			<Switch>
				<Route path="/" exact>
					<SplashPage />
				</Route>
				<Route path="/welcome">
					<WelcomePage />
				</Route>
				<Route path="/home">
					<HomePage />
				</Route>
			</Switch>
		</Router>
	);
}

export default App;
