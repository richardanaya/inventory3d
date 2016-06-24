import React from 'react';
import Radium from 'radium';

const starStyle = {
    position: "absolute",
    top: "50%",
    left: "50%",
    marginTop: "-190px",
    marginLeft: "-114px"
}

const titleStyle = {
    "color": "white",
    "fontSize": "34px",
    "height": "80px",
    "textAlign": "center",
    "lineHeight": "80px",
    "fontWeight": "100",
    "position": "absolute",
    "width": "300px",
    "left": "50%",
    "marginLeft": "-150px",
    "top": "53%",
    "textTransform": "uppercase"
}

const StartContainer = function(props){
    return (
        <div>
            <img className="spin" style={starStyle} src="/images/inventory3d.svg" />
            <div style={titleStyle}>INVENTORY3D</div>
        </div>
    )
}
export default StartContainer;