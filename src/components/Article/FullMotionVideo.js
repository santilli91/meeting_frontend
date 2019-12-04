import React from 'react'


class FullMotionVideo extends React.Component {
    
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
            <div style={{height:this.state.height}} className="full-motion-video-wrapper">
        <video style={{height:this.state.height}} className="full-motion-video" muted autoPlay loop>
            <source src={this.props.video_link} type="video/mp4" />
        </video>
    </div>
        )
    }

}
export default FullMotionVideo