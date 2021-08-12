import React, { useContext, useState } from 'react';
import ReactDom from 'react-dom';
import { Context } from '../../App';
import { completeTask } from '../../api';
import './CompleteTask.css';

export const CompleteTask = () => {
  const [context, setContext] = useContext(Context);
  const [loading, setLoading] = useState(false);
  const { selectedTask } = context;

  const onClose = () => {
    setContext({ ...context, openModal: false });
  };

  const onComplete = async () => {
    setLoading(true);
    await completeTask(selectedTask.uuid);
    setLoading(false);
    setContext({
      ...context,
      openModal: false,
      tasks: context.tasks.filter(task => task.uuid !== selectedTask.uuid),
    });
  }

  return (
    ReactDom.createPortal(
      <>
        <div className="complete-task-overlay">
          <div className="complete-task-modal">
            <div className="modal-body">
              Task #{selectedTask.uuid}, {selectedTask.title}
            </div>
            <div className="modal-action">
              <button type="button" onClick={onComplete}>{loading ? 'loading...' : 'Complete'}</button>
              <button type="button" onClick={onClose}>Close</button>
            </div> 
          </div> 
        </div> 
      </>,
      document.body
    )
  );
};