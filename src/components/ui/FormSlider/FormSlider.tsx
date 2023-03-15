import React, { FC } from "react";
import "./FormSlider.scss";

interface SliderProps {
  name: string;
  value: string;
  maxValue: number;
  minValue: number;
  setValue: (num: string) => void;
  stepValue: number;
  children?: React.ReactNode;
}

const FormSlider: FC<SliderProps> = ({
  name,
  value,
  stepValue,
  maxValue,
  minValue,
  setValue,
  children,
}) => {
  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);

  }

  const getBackgroundSize = () => {
    console.log(parseInt(value))
   return { backgroundSize: `${(((parseInt(value)- minValue) * 100)) / (maxValue - minValue)}% 2px` };
  }
  return (
    <form className="sliderForm">
      <h2 className="sliderForm__title">{name}</h2>
      <div className="sliderForm__blockInput">
        <input
          className="sliderForm__blockInput_input"
          value={value}
          onChange={changeHandler}
          type="text"
        />
        {children}
      </div>
      <div className="sliderForm__blockSlider">
        <input
          className="sliderForm__blockSlider_slider"
          type="range"
          min={minValue}
          max={maxValue}
          value={value}
          step={stepValue}
          onChange={changeHandler}
          style={getBackgroundSize()}
        />
      </div>
    </form>
  );
};

export default FormSlider;
