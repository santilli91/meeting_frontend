import React from 'react'


class Hero extends React.Component {
    
    constructor(props) {
        super(props)
        this.state = {
            height: window.innerHeight,
            width: window.innerWidth
        }
    }

    componentDidMount() {
        window.addEventListener("resize", this.updateDimensions.bind(this));
    }

    updateDimensions() {
        this.setState({
            height: window.innerHeight,
            width: window.innerWidth
        })
    }

    render() {
        return (
            <div style={{height:this.state.height}}  id="full-hero-wrapper">
                {this.props.video_link?
                <video style={{height:this.state.height}}  id="full-hero" muted autoPlay loop><source src={this.props.video_link} type="video/mp4" /></video>
                :<div 
                    style={{
                        backgroundImage: 'url(' + this.props.src + ')',
                        backgroundSize: 'cover',
                        backgroundRepeat: 'no-repeat',
                        backgroundPosition: 'center top',
                    }} 
                    id="hero"></div>}
                </div>
        )
    }

}
export default Hero