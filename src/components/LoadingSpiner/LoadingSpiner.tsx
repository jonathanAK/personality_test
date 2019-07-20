import React from 'react';

const LoadingSpinner: React.FC = () => {
    return (
        <div>
            <img src={"/loading.gif"}  alt={'page loading please wait'}/>
        </div>
    );
};

export default LoadingSpinner;