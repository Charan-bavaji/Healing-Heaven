import React from 'react'
import ImageSlider from '../components/ImageSlider'
import Button from '../components/Button'
import { CImage } from '@coreui/react'
import react1 from '../assets/react.svg'
import IntroSection from '../components/IntroSection'
import ServiceGrid from '../components/ServiceGrid'
const Home = () => {
    return (
        <div className='w-full h-auto'>
            <section className=''>
                <article className=' pt-16'>
                    <ImageSlider />
                    <div className='w-full h-36 flex justify-center items-center'>
                        <Button />
                    </div>
                </article>
            </section>
            <section className='w-full pt-2 pb-8 flex justify-center items-center '>
                <div className=" w-full flex justify-center items-center  gap-20 lg:w-[80%] ">
                    <div className='flex justify-center items-center flex-col'>
                        <CImage className=' rounded-full border-red-100  border-[1px] w-[7rem] h-[7rem]' src={react1} />
                        <h1>Depression</h1>
                    </div>
                    <div className='flex justify-center items-center flex-col'>
                        <CImage className=' rounded-full border-red-100  border-[1px] w-[7rem] h-[7rem]' src={react1} />
                        <h1>Depression</h1>
                    </div>
                    <div className='flex justify-center items-center  flex-col'>
                        <CImage className=' rounded-full border-red-100  border-[1px] w-[7rem] h-[7rem]' src={react1} />
                        <h1>Depression</h1>
                    </div>
                    <div className='flex justify-center items-center flex-col'>
                        <CImage className=' rounded-full border-red-100  border-[1px] w-[7rem] h-[7rem]' src={react1} />
                        <h1>Depression</h1>
                    </div>
                </div>
            </section>
            <section className='w-full lg:h-[70vh] my-2 py-5 flex justify-center items-center'>
                <IntroSection />
            </section>
            <section className=' my-2 py-5 flex justify-center items-center'>
                <ServiceGrid />
            </section>
        </div>
    )
}

export default Home;