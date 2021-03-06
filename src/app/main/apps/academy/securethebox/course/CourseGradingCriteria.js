import React, { Component } from 'react';
import connect from 'react-redux/es/connect/connect';
// import { bindActionCreators } from 'redux';
// import * as Actions from '../store/actions';
import {
    withStyles,
    Paper,
} from '@material-ui/core';


const styles = theme => ({
    stepLabel: {
        cursor: 'pointer!important'
    },
    successFab: {
        background: 'red',
        color: 'white!important'
    }
});

class CourseGradingCriteria extends Component {

    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidMount() {

    }

    render() {
        return (
            <div className="flex justify-center p-16 pb-64 sm:p-24 sm:pb-64 md:p-48 md:pb-64">
                <Paper className="w-full max-w-lg rounded-8 p-16 md:p-24" elevation={1}>
                    <h1>Grading Criteria</h1>
                    <div>This challenge will be grading you based on your {this.props.data.role} skills.</div>
                    <br />
                    {
                        Object.keys(this.props.data.topics[this.props.data.role]).map((e, i) => {
                            return (
                                <div key={e}>
                                    <h2>{e}</h2>
                                    <ul>
                                        {this.props.data.topics[this.props.data.role][e].map((f, i) => {
                                            return (
                                                <div key={f}>
                                                    <li>
                                                        {f}
                                                    </li>
                                                </div>
                                            )
                                        })}
                                    </ul>
                                </div>
                            )
                        })
                    }
                </Paper>
            </div>
        )
    };
}

// function mapDispatchToProps(dispatch) {
//     return bindActionCreators({
//         updateFormState: Actions.updateFormState
//     }, dispatch);
// }

function mapStateToProps({ auth }) {
    return {
        user: auth.user
    }
}

export default (withStyles(styles, { withTheme: true })(connect(mapStateToProps)(CourseGradingCriteria)));
