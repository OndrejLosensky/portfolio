"use client"

import React from 'react';
import { TailSpin } from 'react-loader-spinner';

const CircularLoader: React.FC = () => {
    return(
        <div className='-z-20 w-screen h-screen bg-main flex flex-col items-center justify-center'>
            <h2 className='pb-12 font-light text-text-light/80'> Stránka se načítá, prosím vyčkejte nejdéle pár vteřin </h2>
            <TailSpin
                visible={true}
                height="80"
                width="80"
                color="#f8f8f8"
                ariaLabel="tail-spin-loading"
                radius="1"
                wrapperStyle={{}}
                wrapperClass=""
            />            
        </div>
    )
};

export default CircularLoader;
