import React, { FC, useState } from 'react'
import ButtonSubmit from '../ui/ButtonSubmit/ButtonSubmit'
import FormSlider from '../ui/FormSlider/FormSlider'
import './MainPage.scss'

export const MainPage: FC = () => {
  const [price, setPrice] = useState<string>('1500000')
  const [payment, setPayment] = useState<string>('')
  const [time, setTime] = useState<string>('')
  return (
    <div>
      <FormSlider
        name={'Стоимость автомобиля'}
        value={price}
        maxValue={10000000}
        minValue={1500000}
        setValue={setPrice}
        children={<span className="children">&#8381;</span>}
        />
        {/* <ButtonSubmit name="Оставить заявку" clickSubmit={() => console.log('click')}/> */}
    </div>
  )
}
