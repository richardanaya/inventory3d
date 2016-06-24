import React from 'react';
import Radium from 'radium';

const starStyle = {
    position: "absolute",
    top: "60%",
    left: "50%",
    marginTop: "-190px",
    marginLeft: "-114px",
    "zIndex":"99999"
}

const titleStyle = {
    "color": "white",
    "fontSize": "34px",
    "height": "80px",
    "textAlign": "center",
    "fontWeight": "100",
    "position": "absolute",
    "width": "300px",
    "left": "50%",
    "marginLeft": "-150px",
    "top": "23%",
    "textTransform": "uppercase",
    "background": "rgba(0,0,0,.8)",
    "paddingTop": "300px",
    "zIndex": "9"
}

const StartContainer = function(props){
    return (
        <div>
            <video id="background-video" loop autoPlay>
                <source src="https://media.giphy.com/media/qEbo6MHIjbu1O/giphy.mp4" type="video/mp4" />
            </video>
            <div style={titleStyle}>
                <img className="spin" style={starStyle} src="/images/inventory3d.svg" />
                INVENTORY3D<br/><span style={{fontSize:"10px"}}>Reusable scripted 3d VR assets anywhere</span>
            </div>
        </div>
    )
}
export default StartContainer;