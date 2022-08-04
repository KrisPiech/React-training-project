import React, { useState } from "react"
import contact from "./style/contact.css"
import FormContact from "./FormContact"
import TextContact from "./TextContact"

function Contact() {
	const [textContactValue, setTextContactValue] = useState([
		{
			email: "Your e-mail",
			text: "Your text",
		},
	])

	const addTextContent = (text, email) => {
		const newTextContent = [...textContactValue, { text, email }]
		setTextContactValue(newTextContent)
	}

	const removeTextContent = index => {
		const newTextContent = [...textContactValue]
		newTextContent.splice(index, 1)
		setTextContactValue(newTextContent)
	}

	return (
		<div className='contact-content'>
			<h1>Contact</h1>
			<FormContact addTextContent={addTextContent} />
			<div>
				{textContactValue.map((text, index) => (
					<TextContact
						key={index}
						index={index}
						text={text}
						removeTextContent={removeTextContent}
					/>
				))}
			</div>
		</div>
	)
}

export default Contact
