import React from 'react'

const Heading = ({heading}) => (
    <div className="heading content-group">
        <h1>{heading}</h1>
    </div>
)

const SubHeading = ({heading}) => (
    <div className="sub-heading content-group">
        <h2>{heading}</h2>
    </div>
)

export {Heading,SubHeading}