"use client"

import React from 'react';
import { TailSpin } from 'react-loader-spinner';

const CircularLoader: React.FC = () => {
    return(
        <TailSpin
            visible={true}
            height="80"
            width="80"
            color="#4fa94d"
            ariaLabel="tail-spin-loading"
            radius="1"
            wrapperStyle={{}}
            wrapperClass=""
        />
    )
};

export default CircularLoader;
