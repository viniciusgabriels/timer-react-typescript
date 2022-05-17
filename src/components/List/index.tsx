import { ITask } from '../../types/ITask';
import Item from './item';
import style from './List.module.scss';

interface IProps {
  tasks: ITask[];
  taskSelect: (selectedTask: ITask) => void;
}

function List({tasks, taskSelect}: IProps) {  
  return (
    <aside className={style.tasksList}>
      <h2>Lista de estudos</h2>
      <ul>
        {tasks.map((item) => (
          <Item 
          key={item.id} 
          taskSelect={taskSelect}
          {...item} 
          />
        ))}
      </ul>
    </aside> 
  )
}

export default List;