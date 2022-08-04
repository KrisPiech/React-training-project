import React, { useState } from "react"
import "./App.css"
import MenuItem from "./components/MenuItem"
import Aboutme from "./components/Aboutme"
import Character from "./components/Character"
import Contact from "./components/Contact"
import Todo from "./components/Todo"


function App() {
	const [logo, setLogo] = useState("LOGO")
	const [activeButton, setActiveButton] = useState(null)

	const addToLogo = value => {
		setLogo(`${logo} ${value}`)
	}

	return (
		<div className='app'>
			<div className='section-logo-menu'>
				<div className='logo-section'>{logo}</div>

				<MenuItem
					setActiveButton={setActiveButton}
					activeButton={activeButton}
					className='menu-section'
				/>
			</div>
			<div className='page-section'>
				{activeButton === null && <h1 className='home'>HOME</h1>}
				{activeButton === "aboutme" && <Aboutme addToLogo={addToLogo} />}
				{activeButton === "todo" && <Todo setLogo={setLogo} />}
				{activeButton === "character" && <Character />}
				{activeButton === "contact" && <Contact />}
				{activeButton === "home" && setActiveButton(null)}
			</div>
		</div>
	)
}

export default App
