import React from "react"

function TextContact({ text, index, removeTextContent }) {
	return (
		<div className='text-container'>
			<div>
				<h2>E-MAIL: {text.email}</h2>
				<h4>{text.text}</h4>
			</div>
			<button
				className='btn-delete-text'
				onClick={() => removeTextContent(index)}>
				DELETE
			</button>
		</div>
	)
}

export default TextContact
