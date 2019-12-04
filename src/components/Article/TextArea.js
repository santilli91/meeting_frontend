import React from 'react'
import ReactHtmlParser from 'react-html-parser'


const TextArea = ({content}) => (
    <div className="text-area content-group">
        <div className="text-body">{ReactHtmlParser(content.field_text)}</div>
    </div>
)

export default TextArea