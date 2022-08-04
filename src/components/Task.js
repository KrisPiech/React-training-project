import React from "react"
import todo from "./style/todo.css"

function Task({ todo, index, removeTodo }) {
	return (
		<div className='task-section'>
			<li>
				<h3 className='text-task'>{todo.text}</h3>
			</li>
			<button className='remove-button' onClick={() => removeTodo(index)}>
				X
			</button>
		</div>
	)
}

export default Task
