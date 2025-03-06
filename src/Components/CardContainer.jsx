import React from 'react'
import CardItem from './CardItem'
import { card } from '../__data__/card'

const CardContainer = () => {
  return (
    <section className='bg-white relative'>
        <div className='max-w-[1240] p-4 pt-10 grid lg:grid-cols-3 gap-5 lg:px-32 lg:gap-10 '>
            {
              card.map((card) => {
                return <CardItem key={1} card={card} />
              })
            }
        </div>

    </section>
  )
}

export default CardContainer