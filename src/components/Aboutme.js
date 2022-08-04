import React, { useState } from "react"
import image from "../images/image.jpg"
import about from "./style/about.css"

function Aboutme({ addToLogo }) {
	const [value, setValue] = useState("")

	const aboutMe = {
		name: "Krystian",
		lastname: "Piechota",
		age: 31,
		info: "I am energetic person. I like challenges and I am constantly looking for my place in life. My hobbies are motorization, new technologies and traveling. The most important thing for me is my family. Currently, I work as a car appraiser at BMW Dealership. I am also a man who has no patience and often doesn`t believe in himself, but my main goal is to change the field and become a programmer. I hope it will work!",
	}

	const changeLogoOnClick = () => {
		if (value) {
			addToLogo(value)
			setValue("")
		} else {
			setValue("")
		}
	}

	return (
		<div className='container-about'>
			<div>
				<img className='image' src={image} alt=''></img>
			</div>
			<div className='text-section'>
				<h1>Hello!</h1>
				<p>
					My name is {aboutMe.name} {aboutMe.lastname}
				</p>
				<p>{aboutMe.info}</p>
				<section className='form-section'>
					<input
						className='input-style'
						value={value}
						placeholder='ADD TEXT TO LOGO'
						onChange={e => setValue(e.target.value)}
						type='text'></input>
					<button className='btn-logo-style' onClick={changeLogoOnClick}>
						ENTER
					</button>
				</section>
			</div>
		</div>
	)
}

export default Aboutme
