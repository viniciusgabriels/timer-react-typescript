import { ITask } from '../../../types/ITask';
import style from './Item.module.scss';

interface IProps extends ITask {
  taskSelect: (selectedTask: ITask) => void;
}

export default function Item({task, time, selected, completed, id, taskSelect}: IProps) {
  return (
    <li 
      className={`
        ${style.item} 
        ${selected ? style.selectedItem : ''} 
        ${completed ? style.completedItem : ''}
      `} 
      onClick={() => !completed && taskSelect({task, time, selected, completed, id})}
    >
      <h3>{task}</h3>
      <span>{time}</span>
      {completed && <span className={style.done} aria-label='Tarefa finalizada'></span>}
    </li>
  )
}