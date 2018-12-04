import React, {Component} from 'react'
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

import SearchInput from './SearchInput'

const styles = () => ({
  appBar: {
    marginBottom: '20px'
  },
  appHeader: {
    marginRight: '20px'
  },
  container: {
    width: '96%',
    margin: '0 auto'
  }
});

class AppHeader extends Component {
  render() {
    const { appBar, appHeader, container } = this.props.classes
    return (
      <AppBar className={appBar} position="static" color="primary">
        <Toolbar className={container}>
          <Typography className={appHeader} variant="h6" color="inherit">
            AlbumsCollection App
          </Typography>
        </Toolbar>
        <SearchInput/>
      </AppBar>
    )
  }
}

export default withStyles(styles)(AppHeader)

