import React from 'react'

const IntroSection = () => {
    return (
        <div className='w-full flex justify-center items-center'>
            <section className='w-full flex-col md:flex-row lg:flex lg:w-[80%] '>
                <div className='w-full h-[15rem] flex justify-center items-center lg:w-full '>
                    <iframe className='w-[90%] h-[100%] rounded-md lg:w-[90%] lg:h-[120%]' src="https://www.youtube.com/embed/itZMM5gCboo" title="15-Minute Meditation For Self Love" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                </div>
                <div className='w-full text-black '>
                    <h1 className='p-3 tracking-wide text-center text-[18px] text-gray-600'>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Animi eligendi obcaecati, reiciendis delectus eum facere. Sit ut officiis magni? Unde odio molestiae adipisci vero pariatur aspernatur cupiditate! Dolore, iure suscipit.
                    </h1>
                </div>
            </section>
        </div>
    )
}

export default IntroSection;