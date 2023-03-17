import React, { FC, useEffect, useState } from "react";
import ButtonSubmit from "../ui/ButtonSubmit/ButtonSubmit";
import FormSlider from "../ui/FormSlider/FormSlider";
import "./MainPage.scss";

export const MainPage: FC = () => {
  const [price, setPrice] = useState<number>(1500000);
  const [payment, setPayment] = useState<number>(150000);
  const [time, setTime] = useState<number>(12);
  const [percent, setPercent] = useState<number>(10);

  useEffect(() => {
    setPayment((price / 100) * 10);
    setPercent(Math.ceil(100 / (price / payment)));
  }, [price]);

  useEffect(() => {
    setPercent(Math.ceil(100 / (price / payment)));
  }, [payment]);

  // Подсчет общей суммы лизинговых платежей
  const valueAllSum = (): number => {
    return price + price * 0.15 - payment;
  };

  // Подсчет ежемесячной суммы платежа
  const monthPay = (): number => {
    return Math.ceil(valueAllSum() / time);
  };
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
          maxValue={(price / 100) * 70}
          minValue={(price / 100) * 10}
          stepValue={10000}
          setValue={setPayment}
          children={<span className="children">{percent}&#x25;</span>}
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
          <span className="main__valueBlock_label">Сумма договора лизинга</span>
          <h3 className="main__valueBlock_title">
            {valueAllSum()}&nbsp;&#8381;
          </h3>
        </div>
        <div className="main__valueBlock">
          <span className="main__valueBlock_label">Ежемесячный платеж от</span>
          <h3 className="main__valueBlock_title">{monthPay()}&nbsp;&#8381;</h3>
        </div>
        <ButtonSubmit
          name="Оставить заявку"
          clickSubmit={() => console.log("click")}
        />
      </div>
    </div>
  );
};