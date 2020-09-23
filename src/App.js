import React from "react";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import SplashScreen from "./presentation/pages/splash_screen";

function App() {
	return (
		<Router>
			<Switch>
				<Route path="/" exact>
					<SplashScreen />
				</Route>
			</Switch>
		</Router>
	);
}

export default App;
