import React, { useEffect, useState, createContext } from 'react';
import { Tasks } from './components/Tasks/Task';
import { Loader } from './components/Loader/Loader';
import { CompleteTask } from './components/CompleteTask/CompleteTask';
import { fetchTasks } from './api';
import { Choose } from './components/Choose/Choose';
import './App.css';

export const Context = createContext();

function App(){
  const [context, setContext] = useState({ openModal: false, selectedTask: null, tasks: [], fetching: false });
  const { openModal, tasks, fetching } = context;

  return (
    <Context.Provider value={[context, setContext]}>
      <>
        <h1>Tasks</h1>
        <Choose />
        {fetching && <div className="loader-container">
          <Loader />
        </div>}
        {!fetching && tasks && tasks.length > 0 && <Tasks tasks={tasks} />}
        {openModal && <CompleteTask />}
      </>
    </Context.Provider>
  );
};

export default App;