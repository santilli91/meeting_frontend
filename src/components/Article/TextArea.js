import React from 'react'
import ReactHtmlParser from 'react-html-parser'


const TextArea = ({text}) => (
    <div className="text-area content-group">
        <div className="text-body">{ReactHtmlParser(text)}</div>
    </div>
)

export default TextArea