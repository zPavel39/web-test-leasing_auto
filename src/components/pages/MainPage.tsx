import React, { FC, useState } from "react";
import ButtonSubmit from "../ui/ButtonSubmit/ButtonSubmit";
import FormSlider from "../ui/FormSlider/FormSlider";
import "./MainPage.scss";

export const MainPage: FC = () => {
  const [price, setPrice] = useState<string>("1500000");
  const [payment, setPayment] = useState<string>("1500000");
  const [time, setTime] = useState<string>("12");
  return (
    <div className="main">
      <h1 className="main__title">Рассчитайте стоимость автомобиля в лизинг</h1>
      <div className="main__slider">
        <FormSlider
          name={"Стоимость автомобиля"}
          value={price}
          maxValue={10000000}
          stepValue={10000}
          minValue={1500000}
          setValue={setPrice}
          children={<span className="children">&#8381;</span>}
        />
        <FormSlider
          name={"Первоначальный взнос"}
          value={payment}
          maxValue={10000000}
          minValue={1500000}
          stepValue={10000}
          setValue={setPayment}
          children={<span className="children">13%</span>}
        />
        <FormSlider
          name={"Срок лизинга"}
          value={time}
          maxValue={60}
          minValue={12}
          stepValue={1}
          setValue={setTime}
          children={<span className="children">мес.</span>}
        />
      </div>
      <div className="main__info">
        <div className="main__valueBlock">
          <span className="main__valueBlock_label">Стоимость автомобиля</span>
          <h3 className="main__valueBlock_title">{price}&#8381;</h3>
        </div>
        <div className="main__valueBlock">
          <span className="main__valueBlock_label">Ежемесячный платеж от</span>
          <h3 className="main__valueBlock_title">{payment}&#8381;</h3>
        </div>
        <ButtonSubmit
          name="Оставить заявку"
          clickSubmit={() => console.log("click")}
        />
      </div>
    </div>
  );
};
