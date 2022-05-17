import React from 'react';
import style from './Button.module.scss';

interface IProps {
  children?: React.ReactNode,
  type?: 'button' |'submit' | 'reset' | undefined,
  onClick?: () => void;
}

function Button({ onClick, type, children } : IProps) {
  return (
    <button type={type} className={style.button} onClick={onClick}>
      {children}
    </button>
  )
}

export default Button;