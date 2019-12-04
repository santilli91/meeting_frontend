import React from 'react'


const NetworkBanner = ({img,link}) => (
    <div id="network-banner">
        <div className="container">
            <a href={link} target="_blank" rel="noopener noreferrer">{img?<img alt="Network Banner" src={img} />:''}</a>
        </div>
    </div>
)

export default NetworkBanner