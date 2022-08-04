import React, { useState } from "react"
import menu from "./style/menu.css"

const array = ["aboutme", "todo", "contact", "character", "home"]

function MenuItem({ activeButton, setActiveButton }) {
	const handle = event => {
		setActiveButton(event.target.innerHTML)
	}
	console.log(activeButton)

	return (
		<div>
			{array.map(item => (
				<button className="glow-on-hover" onClick={handle}>{item}</button>
			))}
		</div>
	)
}

export default MenuItem
