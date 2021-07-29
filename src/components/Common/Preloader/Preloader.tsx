import React from 'react';
import preloader from '../../../images/spinner.svg';


const Preloader = () => {
    return (
        <div style={{background: 'white'}}>
            <img src={preloader} alt={preloader}/>
        </div>
    );
};

export default Preloader;