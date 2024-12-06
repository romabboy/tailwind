import React from 'react'
import { Button } from '../button'
import MenImage from '../../images/image-hero-desktop.png';
import MenImageMobile from '../../images/image-hero-mobile.png'
import { ReactComponent as Databiz } from '../../images/client-databiz.svg'
import { ReactComponent as Audiophile } from '../../images/client-audiophile.svg'
import { ReactComponent as Meet } from '../../images/client-meet.svg'
import { ReactComponent as Maker } from '../../images/client-maker.svg'


class IMainSection {

}

export const MainSection = () => {
  return (
    <section className='w-full flex-col xl:flex-row h-screen flex mt-6'>
      <div className="order-2 xl:mt-60 xl:order-1 text-center xl:text-left relative w-full xl:w-2/4">
        <h1 className='text-2xl xl:text-8xl mt-6 xl:whitespace-pre-line font-black'>{`Make \nremote work`}</h1>
        <p className='my-12 xl:whitespace-pre-line text-lg'>{`Lorem ipsum dolor sit amet consectetur adipisicing elit.\n Sit minima beatae veritatis harum, distinctio repellat quis,\n dignissimos quo in alias quos rerum.`}</p>
        <Button isFilled={true}>Learn More</Button>
        <div className='flex xl:absolute bottom-0 justify-around w-full my-20'>
          <Databiz/>
          <Audiophile/>
          <Meet/>
          <Maker/>
        </div>
      </div>
      <div className='w-2/4 hidden xl:flex justify-end xl:order-2'>
        <img src={MenImage} alt='men' />
      </div>
      <div className='w-full mb-8 order-1 flex xl:hidden justify-center'>
        <img src={MenImageMobile} alt='men' />
      </div>
    </section>
  )
}
