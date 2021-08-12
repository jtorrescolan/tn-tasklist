import React, { useState, useContext } from 'react';
import { fetchTasks } from '../../api';
import { Context } from '../../App';
import './Choose.css';

export const Choose = () => {
  const [context, setContext] = useContext(Context);
  const [quantity, setQuantity] = useState('');

  const onShow = async () => {
    setContext({ ...context, fetching: true });
    const tasks = await fetchTasks(quantity);
    setContext({ ...context, tasks: tasks, fetching: false });
  };

  return (
    <div className="choose">
      <label>Number of tasks: </label>
      <input type="text" value={quantity} onChange={(event) => setQuantity(event.target.value)} />
      <button onClick={onShow}>Show</button>
    </div>
  )
}