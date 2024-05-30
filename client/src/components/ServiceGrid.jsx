import React from 'react'
import react1 from '../assets/react.svg'
const ServiceGrid = () => {
    return (
        <div className='w-full h-auto bg-slate-50 grid grid-rows-5 grid-flow-col lg:w-[80%] lg:grid-rows-2 lg:gap-5'>
            <div className='flex justify-center items-center flex-col'>
                <img src={react1} width={200} alt="img" />
                <p>abdbkakakkdvvhkdhkvkhdva</p>
            </div>
            <div className='flex justify-center items-center flex-col'>
                <img src={react1} width={200} alt="img" />
                <p>abdbkakakkdvvhkdhkvkhdva</p>
            </div>
            <div className='flex justify-center items-center flex-col'>
                <img src={react1} width={200} alt="img" />
                <p>abdbkakakkdvvhkdhkvkhdva</p>
            </div>
            <div className='flex justify-center items-center flex-col'>
                <img src={react1} width={200} alt="img" />
                <p>abdbkakakkdvvhkdhkvkhdva</p>
            </div>
            <div className='flex justify-center items-center flex-col'>
                <img src={react1} width={200} alt="img" />
                <p>abdbkakakkdvvhkdhkvkhdva</p>
            </div>
        </div >
    )
}
export default ServiceGrid;