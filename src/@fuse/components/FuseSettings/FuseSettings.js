import React, {Component} from 'react';
import {Button, FormControl, FormControlLabel, FormLabel, Icon, MenuItem, Modal, Radio, RadioGroup, Select, Slide, Switch, withStyles} from 'material-ui';
import * as Actions from '../../../store/actions';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import _ from 'lodash';

const styles = theme => ({
    root                 : {
        position: 'fixed',
        top     : 160,
        right   : 0,
        zIndex  : 999
    },
    button               : {
        minWidth: 48,
        width   : 48,
        height  : 48,
        opacity : .75
    },
    '@keyframes rotating': {
        from: {
            transform: 'rotate(0deg)'
        },
        to  : {
            transform: 'rotate(360deg)'
        }
    },
    buttonIcon           : {
        animation: 'rotating 3s linear infinite'
    },
    modalPaper           : {
        position       : 'absolute',
        width          : 360,
        backgroundColor: theme.palette.background.paper,
        boxShadow      : theme.shadows[5],
        padding        : theme.spacing.unit * 4,
        top            : 160,
        right          : 0
    },
    formControl          : {
        marginBottom: 16,
        width       : '100%'
    },
    group                : {}
});

class FuseSettings extends Component {
    state = {
        open: false
    };

    handleOpen = () => {
        this.setState({open: true});
    };

    handleClose = () => {
        this.setState({open: false});
    };

    handleChange = (event) => {
        this.props.setSettings(_.set({...this.props.settings}, event.target.name, event.target.type === 'checkbox' ? event.target.checked : event.target.value));
    };

    render()
    {
        const {classes, settings} = this.props;
        return (
            <div id="fuse-settings" className={classes.root}>
                <Button className={classes.button} variant="raised" color="secondary" onClick={this.handleOpen}>
                    <Icon className={classes.buttonIcon}>settings</Icon>
                </Button>
                <Slide direction="left" in={this.state.open}>
                    <Modal
                        aria-labelledby="simple-modal-title"
                        aria-describedby="simple-modal-description"
                        open={this.state.open}
                        keepMounted
                        onClose={this.handleClose}
                        BackdropProps={{invisible: true}}
                    >
                        <div className={classes.modalPaper}>
                            <FormControl component="fieldset" className={classes.formControl}>
                                <FormLabel component="legend">Navigation</FormLabel>
                                <RadioGroup
                                    aria-label="Navigation"
                                    name="layout.navigation"
                                    className={classes.group}
                                    value={settings.layout.navigation}
                                    onChange={this.handleChange}
                                    row
                                >
                                    <FormControlLabel value="left" control={<Radio/>} label="Left"/>
                                    <FormControlLabel value="right" control={<Radio/>} label="Right"/>
                                    <FormControlLabel value="none" control={<Radio/>} label="None"/>
                                </RadioGroup>
                            </FormControl>
                            <FormControl className={classes.formControl}>
                                <FormLabel component="legend">Navigation Folded</FormLabel>
                                <Switch
                                    checked={settings.layout.navigationFolded}
                                    onChange={this.handleChange}
                                    aria-label="Navigation Folded"
                                    name="layout.navigationFolded"
                                />
                            </FormControl>
                            <FormControl component="fieldset" className={classes.formControl}>
                                <FormLabel component="legend">Toolbar</FormLabel>
                                <RadioGroup
                                    aria-label="Toolbar"
                                    name="layout.toolbar"
                                    className={classes.group}
                                    value={settings.layout.toolbar}
                                    onChange={this.handleChange}
                                    row
                                >
                                    <FormControlLabel value="below" control={<Radio/>} label="Below"/>
                                    <FormControlLabel value="above" control={<Radio/>} label="Above"/>
                                    <FormControlLabel value="none" control={<Radio/>} label="None"/>
                                </RadioGroup>
                            </FormControl>
                            <FormControl component="fieldset" className={classes.formControl}>
                                <FormLabel component="legend">Footer</FormLabel>
                                <RadioGroup
                                    aria-label="Footer"
                                    name="layout.footer"
                                    className={classes.group}
                                    value={settings.layout.footer}
                                    onChange={this.handleChange}
                                    row
                                >
                                    <FormControlLabel value="below" control={<Radio/>} label="Below"/>
                                    <FormControlLabel value="above" control={<Radio/>} label="Above"/>
                                    <FormControlLabel value="none" control={<Radio/>} label="None"/>
                                </RadioGroup>
                            </FormControl>
                            <FormControl component="fieldset" className={classes.formControl}>
                                <FormLabel component="legend">Layout Mode</FormLabel>
                                <RadioGroup
                                    aria-label="Layout mode"
                                    name="layout.mode"
                                    className={classes.group}
                                    value={settings.layout.mode}
                                    onChange={this.handleChange}
                                    row
                                >
                                    <FormControlLabel value="fullwidth" control={<Radio/>} label="Full Width"/>
                                    <FormControlLabel value="boxed" control={<Radio/>} label="Boxed"/>
                                </RadioGroup>
                            </FormControl>
                            <FormControl component="fieldset" className={classes.formControl}>
                                <FormLabel component="legend">Theme</FormLabel>
                                <Select
                                    value={settings.theme}
                                    onChange={this.handleChange}
                                    name="theme"
                                >
                                    <MenuItem value="default">Default</MenuItem>
                                    <MenuItem value="dark">Dark</MenuItem>
                                </Select>
                            </FormControl>
                            <FormControl className={classes.formControl}>
                                <FormLabel component="legend">Custom Scrollbars</FormLabel>
                                <Switch
                                    checked={settings.customScrollbars}
                                    onChange={this.handleChange}
                                    aria-label="Custom Scrollbars"
                                    name="customScrollbars"
                                />
                            </FormControl>
                        </div>
                    </Modal>
                </Slide>
            </div>
        );
    }
}

function mapDispatchToProps(dispatch)
{
    return bindActionCreators({
        setSettings: Actions.setSettings
    }, dispatch);
}

function mapStateToProps({settings})
{
    return {
        settings
    }
}

export default withStyles(styles)(connect(mapStateToProps, mapDispatchToProps)(FuseSettings));