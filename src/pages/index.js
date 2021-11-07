import * as React from "react";
import Logo from "../images/logo.svg";

// styles
const pageStyles = {
	background: '#000000',
	color: "#232129",
	// padding: 96,
	fontFamily: "-apple-system, Roboto, sans-serif, serif",
};


// markup
const IndexPage = () => {
  return (
    <main style={pageStyles}>
      <title>Home Page</title>
		<img src={Logo} alt="Born2Play" />
    </main>
  )
};

export default IndexPage
