import React from 'react'
import ButtonGroup from './ButtonGroup'
import ColoredBar from './ColoredBar.js'
import TextArea from './TextArea'
import {Heading,SubHeading} from './Headings'
import Hero from './Hero'


const ArticleDisplay = ({content,hero}) => {
  if(!content)
    return <></>

    let heroOutput = ''
    if(hero) {
      heroOutput = hero.type === 'hero'?<Hero src={hero.src} />:<Hero video_link={hero.src} />
    }

    return (
      <article>
        {heroOutput}
        {content.map((item,key) => {
          switch(item.type) {
            case "button_group":
              return <ButtonGroup key={key} buttons={item.buttons} />
            case "colored_bar":
              return <ColoredBar key={key} />
            case "text":
              return <TextArea key={key} text={item.text} />
            case "heading":
              return <Heading key={key} heading={item.heading} />
            case "sub_heading":
              return <SubHeading key={key} heading={item.heading} />
            default:
              return <div key={key}></div>
          }  
        })}
      </article>
    )
}

export default ArticleDisplay