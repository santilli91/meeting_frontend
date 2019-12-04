import React from 'react'

const Heading = ({content}) => (
    <div className="heading content-group">
        <h1>{content.field_heading}</h1>
    </div>
)

const SubHeading = ({content}) => (
    <div className="sub-heading content-group">
        <h2>{content.field_heading}</h2>
    </div>
)

export {Heading,SubHeading}