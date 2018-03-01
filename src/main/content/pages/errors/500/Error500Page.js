import React, {Component} from 'react';
import {withStyles} from 'material-ui/styles/index';
import {Icon, Input, Paper, Typography} from 'material-ui';
import classNames from 'classnames';
import {Link} from 'react-router-dom';

const styles = theme => ({
    root         : {},
    searchWrapper: {
        width     : '100%',
        height    : 56,
        padding   : 18,
        display   : 'flex',
        alignItems: 'center'
    },
    search       : {
        paddingLeft: 16
    }
});

class Error500Page extends Component {

    render()
    {
        const {classes} = this.props;

        return (
            <div className={classNames(classes.root, "flex flex-col flex-1 items-center justify-center p-16")}>

                <div className="max-w-512 text-center">

                    <Typography variant="display4" color="inherit" className="font-medium mb-16">
                        500
                    </Typography>

                    <Typography variant="headline" color="textSecondary" className="mb-16">
                        Well, you broke the internet!
                    </Typography>

                    <Typography variant="subheading" color="textSecondary" className="mb-48">
                        Just kidding, looks like we have an internal issue, please try again in couple minutes
                    </Typography>

                    <Link className="font-medium" to="/apps/dashboards/project">Report this problem</Link>
                </div>
            </div>
        );
    }
}

export default withStyles(styles, {withTheme: true})(Error500Page);