/* eslint-disable no-undef */
import React, { useState } from 'react';
import TrashIcon from '../../assets/trash.svg';
import EditIcons from '../../assets/edit.svg';

import { Container, AddTask, Wrapper, ToDo } from './styles';

function Home() {
	const [todoList, setTodoList] = useState({
		editTask: false,
		newTask: '',
		tasks: [],
		tasksDone: [],
	});

	const handleSubmit = (e) => {
		e.preventDefault();
		if (todoList.editTask) {
			/* move todo taks when mark done for taskDone ↓ */
			/* fazer a lógica aqui */
		} else {
			setTodoList((prevState) => ({
				...prevState,
				newTask: '',
				tasks: [...prevState.tasks, { name: prevState.newTask }],
			}));
		}
	};

	const setNewTaskName = (name) => {
		setTodoList((prevState) => ({
			...prevState,
			newTask: name,
		}));
	};

	const handleDelete = (index) => {
		todoList.tasks.splice(index, 1);

		setTodoList((prevState) => ({
			...prevState,
		}));
	};

	const handleEdit = (index) => {
		setTodoList((prevState) => ({
			...prevState,
			editTask: true,
			newTask: index,
		}));
		console.log('Edit', index);
	};

	return (
		<Container>
			<Wrapper>
				<AddTask>
					<form onSubmit={handleSubmit}>
						<input
							type="text"
							placeholder="Digite uma nova tarefa..."
							value={todoList.newTask}
							onChange={(e) => setNewTaskName(e.target.value)}
						/>
						<button type="submit">
							{todoList.editTask ? 'Salvar' : 'Adicionar'}
						</button>
					</form>
				</AddTask>

				<ToDo>
					<h3>a fazer</h3>
					<div>
						<ul>
							{todoList.tasks.map((task, index) => (
								<li>
									<div>
										<input type="checkbox" />
										<span>{task.name}</span>
									</div>
									<div>
										<button
											type="button"
											onClick={() => handleEdit(index)}
										>
											<img src={EditIcons} alt="Edit" />
										</button>

										<button
											type="button"
											onClick={() => handleDelete(index)}
										>
											<img src={TrashIcon} alt="Trash" />
										</button>
									</div>
								</li>
							))}
						</ul>
					</div>
				</ToDo>
			</Wrapper>
		</Container>
	);
}

export default Home;
