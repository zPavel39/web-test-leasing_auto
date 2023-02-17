import React, { FC }from 'react'
import './ButtonSubmit.scss'

interface ButtonProps {
  name: string;
  clickSubmit(): void;
};

const ButtonSubmit: FC<ButtonProps> = ({name, clickSubmit}) => {
  return (
    <button className='button' onClick={clickSubmit}>
        <span className='button__name'>{name}</span>
    </button>
  )
}

export default ButtonSubmit