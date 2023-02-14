import React from 'react'
import ButtonSubmit from '../ui/ButtonSubmit/ButtonSubmit'
import FormSlider from '../ui/FormSlider/FormSlider'
import './MainPage.scss'

export const MainPage = () => {
  return (
    <div>
      <FormSlider
        name={'Стоимость автомобиля'}
        maxValue={'10000000'}
        minValue={'1500000'}
        children={<span className="children">&#8381;</span>}
        />
        <ButtonSubmit name="Оставить заявку" clickSubmit={() => console.log('click')}/>
    </div>
  )
}
