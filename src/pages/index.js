import * as React from "react";
import Logo from "../components/Logo";

// markup
const IndexPage = () => {
	return (
		<main className="flex h-screen">
			<title>Home Page</title>
			<Logo />
			{/*<img className="w-4/12 m-auto" src={Logo} alt="Born2Play" />*/}
		</main>
	)
};

export default IndexPage
