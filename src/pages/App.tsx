import { useState } from 'react';
import Form from '../components/Form';
import List from '../components/List';
import Timer from '../components/Timer';
import { ITask } from '../types/ITask';
import style from './App.module.scss';

function App() {  
  const [tasks, setTasks] = useState<ITask[]>([]);
  const [selected, setSelected] = useState<ITask>();

  function taskSelect(selectedTask: ITask) {
    setSelected(selectedTask);
    setTasks(tasks => tasks.map(task => ({
      ...task,
      selected: task.id === selectedTask.id ? true : false
    })));
  }

  function finishTask() {
    if(selected) {
      setSelected(undefined);
      setTasks(tasks => tasks.map(task => {
        if(task.id === selected.id) {
          return {
            ...task,
            selected: false,
            completed: true
          }
        }
        return task;
      }));
    }
  }
  
  return (
    <div className={style.AppStyle}>
      <Form setTasks={setTasks} />
      <List 
        tasks={tasks}
        taskSelect={taskSelect} 
      />
      <Timer 
        selected={selected}
        finishTask={finishTask}
      />
    </div>
  );
}

export default App;
