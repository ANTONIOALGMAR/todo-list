import { useState } from 'react';
import styles from './styles/app.module.css';

function App() {
  const [tasks, setTasks] = useState([
    { text: 'Estudar React', completed: false },
    { text: 'Lavar o carro', completed: false },
    { text: 'Aprender componentização', completed: false }
  ]);
  const [task, setTask] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    if (task.trim()) {
      setTasks((currentTasks) => [
        ...currentTasks,
        { text: task, completed: false }
      ]);
      setTask('');
    }
  };

  const toggleTaskCompletion = (index) => {
    setTasks((currentTasks) =>
      currentTasks.map((task, i) =>
        i === index ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const deleteTask = (index) => {
    setTasks((currentTasks) =>
      currentTasks.filter((_, i) => i !== index)
    );
  };

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h1>Todo List</h1>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={task}
            placeholder="Nome da tarefa"
            onChange={(event) => setTask(event.target.value)}
          />
          <button type="submit">Adicionar Tarefa</button>
        </form>
        <ul>
          {tasks.map((task, index) => (
            <li key={index} className={task.completed ? styles.completed : ''}>
              <span onClick={() => toggleTaskCompletion(index)}>
                {task.text}
              </span>
              <button onClick={() => deleteTask(index)}>Excluir</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
