import React from 'react';
import Footer from "./footer/footer.js";
import Header from "./header/header.js";
import Section from "./section/section.js";
class App extends React.Component{
render(){
		return(
			<div id="inner">
				<Header/>
				<Section/>
				<Footer/>
			</div>
		)
	}
}

export default App;