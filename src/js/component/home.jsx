import React from "react";
import Carta from "./Carta.jsx";
import Jumbotron from "./Jumbotron.jsx";

import Nav from "./Nav.jsx";

//create your first component
const Home = () => {
	return (
		<>
			<Nav />
			<div className="container p-5">
				<Jumbotron />
			</div>
			<div className="container d-flex p-5">
				<Carta />
				<Carta />
				<Carta />
				<Carta />
			</div>
		</>
	);
};

export default Home;
