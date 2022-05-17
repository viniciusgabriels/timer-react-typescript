import style from './Clock.module.scss';

interface IProps {
  time: number | undefined;
}

export default function Clock({ time = 0 } : IProps) {
  const seconds = time % 60;
  const minutes = Math.floor(time / 60);
  const secondsUnit = String(seconds).padStart(2, '0').split('')[1];
  const secondsDecimal = String(seconds).padStart(2, '0').split('')[0];
  const minutesUnit = String(minutes).padStart(2, '0').split('')[1];
  const minutesDecimal = String(minutes).padStart(2, '0').split('')[0];

  return (
    <>
      <span className={style.clockNumber}>{minutesDecimal}</span>
      <span className={style.clockNumber}>{minutesUnit}</span>
      <span className={style.clockDivision}>:</span>
      <span className={style.clockNumber}>{secondsDecimal}</span>
      <span className={style.clockNumber}>{secondsUnit}</span>
    </>
  )
}