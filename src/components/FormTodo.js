import React, { useState } from "react"
import todo from "./style/todo.css"

function FormTodo({ addTodo, todos }) {
	const [value, setValue] = useState("")

	const handleSubmit = e => {
		e.preventDefault()
		if (!value) return
		addTodo(value)
		setValue("")
	}

	return (
		<form className='form' onSubmit={handleSubmit}>
			<input
				type='text'
				className='input'
				value={value}
				onChange={e => setValue(e.target.value)}
				placeholder='Add new task'
			/>
			<button className='submit-button' type='submit'>
				SUBMIT
			</button>
			<div className='counter'>
				<p>TASKS: {todos.length}</p>
			</div>
		</form>
	)
}

export default FormTodo
