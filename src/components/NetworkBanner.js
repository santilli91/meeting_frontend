import React from 'react'


const NetworkBanner = ({img,link}) => (
    <div id="network-banner">
        <div class="container">
            <a href={link} target="_blank"><img src={img} /></a>
        </div>
    </div>
)

export default NetworkBanner