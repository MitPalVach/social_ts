import React from 'react';
const preloader = 'https://media3.giphy.com/media/3oEjI6SIIHBdRxXI40/giphy.gif?cid=790b7611ea276bbbbaa21051bf651344dc6397a74078b299&rid=giphy.gif&ct=g'

const Preloader = () => {
    return (
        <div style={{background: 'white'}}>
            <img src={preloader} alt={preloader}/>
        </div>
    );
};

export default Preloader;