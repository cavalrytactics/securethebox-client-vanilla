import {makeStyles} from '@material-ui/core/styles';
import React from 'react';

const useStyles = makeStyles(theme => ({
  root: {
    ...theme.typography.button,
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(1),
  },
}));

export default function TypographyTheme() {
  const classes = useStyles();

  return <div className={classes.root}>{"This div's text looks like that of a button."}</div>;
}
