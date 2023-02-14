import React, {FC} from 'react'
import './FormSlider.scss'

interface SliderProps {
  name: string;
  maxValue: string;
  minValue: string;
  children?: React.ReactNode;
};

const FormSlider: FC<SliderProps> = ({
  name,
  maxValue,
  minValue,
  children,
}) => {
  return (
    <form>
      <h2 className="sliderForm__title">{name}</h2>
      <div className="sliderForm__blockInput">
        <input
          className="sliderForm__blockInput_input"
          placeholder={minValue}
          type="text"
        />
        {children}
      </div>
      <div className="sliderForm__blockSlider">
        <input
          className="sliderForm__blockSlider_slider"
          type="range"
          min={maxValue}
          max={minValue}
          value={minValue}
        />
      </div>
    </form>
  )
}

export default FormSlider;