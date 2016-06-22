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
    grey100, grey300, grey400, grey500, grey700,grey900,
    white, darkBlack, fullBlack,
} from 'material-ui/styles/colors';
import {toggleEditorDrawer} from "../actions"
import ActionMenu from 'material-ui/svg-icons/navigation/menu';
import { push } from 'react-router-redux'


darkBaseTheme.palette.primary1Color = grey900;
darkBaseTheme.palette.primary2Color = grey700;
darkBaseTheme.palette.primary3Color = grey400;
darkBaseTheme.palette.accent1Color = pinkA200;
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
    fontWeight: 300,
    cursor: "pointer"
}

const MenuHeader = Radium(function ({onClick}) {
    return (<div onClick={onClick} style={[menuHeaderStyle]}>Inventory 3D</div>)
})

let AppContainer = function ({app, toggleEditorDrawer, goToHome, goToEditor, goToGettingStarted, goToDocumentation, children}) {
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
                />
                <Drawer open={app.editorDrawerOpen}>
                    <MenuHeader onClick={toggleEditorDrawer}/>
                    <MenuItem onClick={()=>{toggleEditorDrawer();goToHome()}}>Home</MenuItem>
                    <MenuItem onClick={()=>{toggleEditorDrawer();goToEditor()}}>Editor</MenuItem>
                    <MenuItem onClick={()=>{toggleEditorDrawer();goToGettingStarted()}}>Getting Started</MenuItem>
                    <MenuItem onClick={()=>{toggleEditorDrawer();goToDocumentation()}}>Documentation</MenuItem>
                </Drawer>
                {children}
            </div>
        </MuiThemeProvider>
    )
}
AppContainer = connect(
    state => ({app: state.app}),
    {toggleEditorDrawer,goToHome:push.bind(null,"/"),goToEditor:push.bind(null,"/editor"),goToGettingStarted:push.bind(null,"/gettingstarted"),goToDocumentation:push.bind(null,"/documentation")}
)(AppContainer)
export default AppContainer;