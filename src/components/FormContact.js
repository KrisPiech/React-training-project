import React, { useState } from "react"

function FormContact({ addTextContent }) {
	const [valueEmail, setValueEmail] = useState("")
	const [valueText, setValueText] = useState("")

	const handleSend = e => {
		e.preventDefault()
		if (!valueText && !valueEmail) return
		addTextContent(valueText, valueEmail)
		setValueEmail("")
		setValueText("")
	
	}

	return (
		<div>
			<form className='contact-form'>
				<input
					className='input-email'
					type='email'
					placeholder='e-mail'
					value={valueEmail}
					onChange={e => setValueEmail(e.target.value)}
				/>
				<textarea
					className='input-textarea'
					value={valueText}
					onChange={e => setValueText(e.target.value)}
				/>
			</form>
			<button className='button' type='submit' onClick={handleSend}>
				SEND
			</button>
		</div>
	)
}

export default FormContact
