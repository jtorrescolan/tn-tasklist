import React, { useContext } from 'react';
import { Context } from '../../App';
import './Task.css';

export const Tasks = ({ tasks }) => {
  const [context, setContext] = useContext(Context);

  const onOpen = (task) => {
    setContext({ ...context, openModal: true, selectedTask: task });
  };

  return (
    <div className="tasks">
      {tasks && tasks.length > 0 && tasks.map(task => (
        <div key={task.uuid} className="task" onClick={() => onOpen(task)}>
          <span className="task-title">{task.title}</span>
          <div className="task-id">Task #{task.uuid}</div>
        </div>
      ))}
    </div>
  )
}