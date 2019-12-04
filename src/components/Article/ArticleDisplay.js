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
          console.log(item)
          switch(item.type) {
            case "button_group":
              return <ButtonGroup key={key} content={item} />
            case "colored_bar":
              return <ColoredBar key={key} content={item} />
            case "text":
              return <TextArea key={key} content={item} />
            case "heading":
              return <Heading key={key} content={item} />
            case "sub_heading":
              return <SubHeading key={key} content={item} />
            default:
              return <div key={key}></div>
          }  
        })}
      </article>
    )
}

export default ArticleDisplay