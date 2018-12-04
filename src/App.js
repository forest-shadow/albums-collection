import React, { Component } from 'react'
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import AppHeader from './components/AppHeader'
import Typography from '@material-ui/core/Typography';

const styles = theme => ({
  container: {
    width: '96%',
    margin: '0 auto'
  },
  paper: {
    padding: `${theme.spacing.unit}px ${theme.spacing.unit *2}px`,
    color: theme.palette.text.secondary,
    whiteSpace: 'nowrap',
    marginBottom: theme.spacing.unit,
  }
});


class App extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div className="App">
        <AppHeader />
        <div className={classes.container}>
          <Grid container spacing={24}>
            <Grid item xs={8}>
              <Paper className={classes.paper}>
                <Typography variant="h6" color="inherit">
                  Searching Results
                </Typography>
              </Paper>
            </Grid>
            <Grid item xs={4}>
              <Paper className={classes.paper}>
                <Typography variant="h6" color="inherit">
                  Albums Collection
                </Typography>
              </Paper>
            </Grid>
          </Grid>
        </div>

      </div>
    );
  }
}

export default withStyles(styles)(App)
