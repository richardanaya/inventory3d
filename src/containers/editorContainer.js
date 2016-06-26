import React from 'react';
import Radium from 'radium';
import {Tabs,Tab} from 'material-ui/Tabs';
import {Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle} from 'material-ui/Toolbar';
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';
import RaisedButton from 'material-ui/RaisedButton';
import FontIcon from 'material-ui/FontIcon';
import {
    cyan500, cyan700,
    orange700,
    grey100, grey300, grey400, grey500,grey600, grey700,grey800,grey900,
    white, darkBlack, fullBlack,
} from 'material-ui/styles/colors';

const containerStyle = {
    position:"absolute",
    "width": "100%",
    "height": "calc(100% - 64px)"
}
const styles = {
    headline: {
        fontSize: 24,
        paddingTop: 16,
        marginBottom: 12,
        fontWeight: 400,
    },
};

const sideBarStyle = {
    position: "absolute",
    width: "320px",
    background: "green",
    height: "calc(100% - 56px)",
    overflowY: "hidden",
    top: "56px",
    background: grey700,
    "boxShadow": "rgba(0, 0, 0, 0.117647) 1px 1px 6px, rgba(0, 0, 0, 0.117647) 1px 1px 4px",
    "zIndex": 1
}

const tabStyle = {
    position: "absolute",
    left: "320px",
    background: grey600,
    height: "calc(100% - 56px)",
    overflowY: "hidden",
    top: "56px"
}

const toolbarStyle = {
    background: grey800,
    "boxShadow": "rgba(0, 0, 0, 0.117647) 0px 1px 6px, rgba(0, 0, 0, 0.117647) 0px 1px 4px",
    position: "absolute",
    "zIndex": 2,
    width: "100%"
}

const frameStyle = {
    position: "absolute",
    top: "0px",
    left: "0px",
    minHeight: "calc(100% - 56px)",
    width: "100%"
}

function onRef(e){
    e.style.height = window.innerHeight-168+"px"
    if(!e.resizeWatch){
        e.resizeWatch = true;
        window.addEventListener("resize",function(){
            e.style.height = window.innerHeight-168+"px"
        })
    }
}

const EditorContainer = Radium(function(props){
    return (
        <div style={containerStyle}>
            <Toolbar style={toolbarStyle}>
                <ToolbarGroup firstChild={true}>
                    <FontIcon className="fa fa-pencil" />
                    <DropDownMenu value={1} >
                        <MenuItem value={1} primaryText="Cat.dae" />
                        <MenuItem value={2} primaryText="All Voice" />
                        <MenuItem value={3} primaryText="All Text" />
                        <MenuItem value={4} primaryText="Complete Voice" />
                        <MenuItem value={5} primaryText="Complete Text" />
                        <MenuItem value={6} primaryText="Active Voice" />
                        <MenuItem value={7} primaryText="Active Text" />
                    </DropDownMenu>
                    <DropDownMenu value={1} >
                        <MenuItem value={1} primaryText="Cube" />
                        <MenuItem value={2} primaryText="All Voice" />
                        <MenuItem value={3} primaryText="All Text" />
                        <MenuItem value={4} primaryText="Complete Voice" />
                        <MenuItem value={5} primaryText="Complete Text" />
                        <MenuItem value={6} primaryText="Active Voice" />
                        <MenuItem value={7} primaryText="Active Text" />
                    </DropDownMenu>
                    <DropDownMenu value={1} >
                        <MenuItem value={1} primaryText="Material1" />
                        <MenuItem value={2} primaryText="All Voice" />
                        <MenuItem value={3} primaryText="All Text" />
                        <MenuItem value={4} primaryText="Complete Voice" />
                        <MenuItem value={5} primaryText="Complete Text" />
                        <MenuItem value={6} primaryText="Active Voice" />
                        <MenuItem value={7} primaryText="Active Text" />
                    </DropDownMenu>
                </ToolbarGroup>
                <ToolbarGroup>
                    <RaisedButton label="Assets" backgroundColor={grey700}/>
                </ToolbarGroup>
            </Toolbar>
            <div style={sideBarStyle}>
            </div>
            <div style={tabStyle}>
                <Tabs>
                    <Tab label="Preview" value="a" >
                        <div>
                            <iframe style={frameStyle} ref={onRef} src="viewer.html">
                            </iframe>
                        </div>
                    </Tab>
                    <Tab label="Script" value="b">
                        <div>
                            <h2 style={styles.headline}>Controllable Tab B</h2>
                            <p>
                                This is another example of a controllable tab. Remember, if you
                                use controllable Tabs, you need to give all of your tabs values or else
                                you wont be able to select them.
                            </p>
                        </div>
                    </Tab>
                </Tabs>
            </div>
        </div>
    )
})
export default EditorContainer;