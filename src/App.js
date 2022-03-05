import "./App.css";
import styled from "styled-components";
import { Switch } from "react-router-dom";
import { Route } from "react-router-dom";
import Home from "./components/Home";
import Details from "./components/Details";
import Booking from "./components/Booking";
import Success from "./components/Success";

function App() {
	return (
		<>
			<Switch>
				<Route exact path="/">
					<Home />
				</Route>
				<Route exact path="/details/:id">
					<Details />
				</Route>
				<Route exact path="/booking/:id">
					<Booking />
				</Route>
				<Route exact path="/success">
					<Success />
				</Route>
			</Switch>
		</>
	);
}

export default App;
