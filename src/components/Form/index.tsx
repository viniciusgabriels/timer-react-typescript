import React, { useState } from "react";
import { ITask } from "../../types/ITask";
import Button from "../Button";
import style from './Form.module.scss';
import { v4 as uuidv4 } from 'uuid';

interface IProps {
  setTasks: React.Dispatch<React.SetStateAction<ITask[]>>
}

function Form({ setTasks } : IProps) {
  const [task, setTask] = useState('');
  const [time, setTime] = useState('00:00:00');
  
  function addTask(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setTasks(oldTasks => [...oldTasks, {
      task,
      time,
      selected: false,
      completed: false,
      id: uuidv4()
    }]);
    setTask('');
    setTime('00:00:00');
  }

  return (
    <>
      <form className={style.newTask} onSubmit={addTask}>
        <div className={style.inputContainer}>
          <label htmlFor="task">
            Adicione um novo estudo
          </label>
          <input 
            type="text"
            name="task"
            id="task"
            value={task}
            onChange={(e) => setTask(e.target.value)}
            placeholder="O que você quer estudar"
            required
          />
        </div>
        <div className={style.inputContainer}>
          <label htmlFor="time">
            Tempo
          </label>
          <input 
            type="time"
            step="1"
            name="time"
            value={time}
            onChange={(e) => setTime(e.target.value)}
            id="time"
            min="00:00:00"
            max="02:00:00"
            required
          />
          <Button type="submit">
            Adicionar
          </Button>
        </div>
      </form>
    </>
  );
}

export default Form;