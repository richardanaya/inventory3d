import React from 'react';
import {connect} from 'react-redux'
import Radium from 'radium';
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import IconButton from "material-ui/IconButton";
import {toggleDetails} from "../actions"
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import {
    cyan500, cyan700,
    pinkA200,
    grey100, grey300, grey400, grey500, grey700,grey800,
    white, darkBlack, fullBlack,
} from 'material-ui/styles/colors';
import {toggleEditorDrawer} from "../actions"
import ActionMenu from 'material-ui/svg-icons/navigation/menu';
import { push } from 'react-router-redux'
import { RouteTransition } from 'react-router-transition';


darkBaseTheme.palette.primary1Color = grey800;
darkBaseTheme.palette.primary2Color = grey700;
darkBaseTheme.palette.primary3Color = grey400;
darkBaseTheme.palette.accent1Color = grey100;
darkBaseTheme.palette.accent2Color = grey100;
darkBaseTheme.palette.accent3Color = grey500;
darkBaseTheme.palette.alternateTextColor = grey100;

const muiTheme = getMuiTheme(darkBaseTheme);

var menuHeaderStyle = {
    backgroundColor: "black",
    color: "white",
    fontSize: "24px",
    height: "64px",
    textAlign: "center",
    lineHeight: "64px",
    fontWeight: 100,
    cursor: "pointer",
    userSelect: "none"
}

const starStyle = {
    "width": "30px",
    "marginBottom": "-5px",
    "marginRight": "5px"
}

const MenuHeader = Radium(function ({onClick}) {
    return (<div onClick={onClick} style={[menuHeaderStyle]}>
        <img className="front" style={starStyle} src="/images/inventory3d-thick.svg" />INVENTORY3D</div>)
})

function goToGithub(){
    window.location = "https://github.com/richardanaya/aframe-inventory3d/"
}

let AppContainer = function ({app, toggleEditorDrawer, goToHome, goToEditor, goToGettingStarted, goToDocumentation, children, location}) {
    return (
        <MuiThemeProvider muiTheme={muiTheme}>
            <div>
                <AppBar
                    iconElementLeft={
                        <IconButton
                          onClick={toggleEditorDrawer}>
                          <ActionMenu/>
                        </IconButton>
                      }
                    iconElementRight={
                        <IconButton
                          iconClassName="fa fa-github"
                          onClick={goToGithub}
                        />
                      }
                />
                <Drawer docked={false} open={app.editorDrawerOpen}>
                    <MenuHeader onClick={toggleEditorDrawer}/>
                    <MenuItem onClick={()=>{toggleEditorDrawer();goToHome()}}>Home</MenuItem>
                    <MenuItem onClick={()=>{toggleEditorDrawer();goToEditor()}}>Editor</MenuItem>
                    <MenuItem onClick={()=>{toggleEditorDrawer();goToGettingStarted()}}>Getting Started</MenuItem>
                    <MenuItem onClick={()=>{toggleEditorDrawer();goToDocumentation()}}>Documentation</MenuItem>
                </Drawer>
                <RouteTransition
                    pathname={location.pathname}
                    atEnter={{ opacity: 0 }}
                    atLeave={{ opacity: 0 }}
                    atActive={{ opacity: 1 }}
                >
                    {children}
                </RouteTransition>
            </div>
        </MuiThemeProvider>
    )
}
AppContainer = connect(
    state => ({app: state.app}),
    {toggleEditorDrawer,goToHome:push.bind(null,"/"),goToEditor:push.bind(null,"/editor"),goToGettingStarted:push.bind(null,"/gettingstarted"),goToDocumentation:push.bind(null,"/documentation")}
)(AppContainer)
export default AppContainer;