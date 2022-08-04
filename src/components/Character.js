import React, { useEffect, useState } from "react"
import character from "./style/character.css"

function Character() {
	let API = `https://rickandmortyapi.com/api/character`
	const [items, setItems] = useState([])

	useEffect(() => {
		;(async function () {
			let data = await fetch(API).then(res => res.json())
			setItems(data)
			console.log(data)
		})()
	}, [API])

	let display

	if (items.results) {
		display = items.results.map(item => {
			let { id, name, image, status, species } = item

			return (
				<div key={id} className='card'>
					<div>
						<img src={image} alt='' className='image-character' />
					</div>
					<div className='content-card'>
						<div>{name}</div>
						<div className='status'>Status: {status}</div>
						<div className='species'>Species: {species}</div>
					</div>
				</div>
			)
		})
	} else {
		display = "No characters"
	}

	return (
		<>
			<div className='card-container'>{display}</div>
		</>
	)
}

export default Character
