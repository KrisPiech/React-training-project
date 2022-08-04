import React, { useState } from "react"
import todo from "./style/todo.css"
import FormTodo from "./FormTodo.js"
import Task from "./Task.js"

function Todo({ logo, setLogo }) {
	const [todos, setTodos] = useState([
		{
			text: "Your first task is add a new task",
		},
	])

	const [valueLogo, setValueLogo] = useState("NEW LOGO")

	const handleChangeNewLogo = () => {
		if (valueLogo === "NEW LOGO") {
			setLogo(valueLogo)
			setValueLogo("LOGO")
		} else {
			setLogo(valueLogo)
			setValueLogo("NEW LOGO")
		}
	}

	const addTodo = text => {
		const newTodos = [...todos, { text }]
		setTodos(newTodos)
	}

	const removeTodo = index => {
		const newTodos = [...todos]
		newTodos.splice(index, 1)
		setTodos(newTodos)
	}

	return (
		<div className='todo-content'>
			<h1>Todo List</h1>
			<button className='logo-button' onClick={handleChangeNewLogo}>
				LOGO
			</button>
			<div className='todo-container'>
				<FormTodo addTodo={addTodo} todos={todos} />

				<div>
					<ol>
						{todos.map((todo, index) => (
							<Task
								key={index}
								index={index}
								todo={todo}
								removeTodo={removeTodo}
							/>
						))}
					</ol>
				</div>
			</div>
		</div>
	)
}

export default Todo
