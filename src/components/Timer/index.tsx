import { useEffect, useState } from "react";
import { timeToSeconds } from "../../common/utils/date";
import { ITask } from "../../types/ITask";
import Button from "../Button";
import Clock from "./Clock";
import style from "./Timer.module.scss";

interface IProps {
  selected: ITask | undefined;
  finishTask: () => void;
}

export default function Timer({ selected, finishTask } : IProps) {
  const [time, setTime] = useState<number>();
  
  useEffect(() => {
    if(selected?.time) {
      setTime(timeToSeconds(selected.time));
    }
  }, [selected]);

  function countdown(counter: number = 0) {
    setTimeout(() => {
      if(counter > 0) {
        setTime(counter - 1);
        return countdown(counter - 1);
      }
      finishTask();
    }, 1000);
  };

  return(
    <div className={style.timer}>
      <p className={style.title}>Escolha um card e inicie o cronômetro</p>
      <div className={style.clockWrapper}>
        <Clock time={time} />
      </div>
      <Button onClick={() => countdown(time)}>
        Começar        
      </Button>
    </div>
  )
}