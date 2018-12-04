import React, {Component} from 'react'
import { withStyles } from '@material-ui/core/styles';
import { fade } from '@material-ui/core/styles/colorManipulator';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import SearchIcon from '@material-ui/icons/Search';
import InputBase from '@material-ui/core/InputBase';

const styles = (theme) => ({
  appBar: {
    marginBottom: '20px'
  },
  appHeader: {
    marginRight: '20px'
  },
  container: {
    width: '96%',
    margin: '0 auto'
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    marginLeft: 'auto',
    width: '40%',
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
  },
  searchIcon: {
    width: theme.spacing.unit * 9,
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
    width: '100%',
  },
  inputInput: {
    paddingTop: theme.spacing.unit,
    paddingRight: theme.spacing.unit,
    paddingBottom: theme.spacing.unit,
    paddingLeft: theme.spacing.unit * 10,
    transition: theme.transitions.create('width'),
    width: '100%'
  },
});

class AppHeader extends Component {
  render() {
    const { appBar, appHeader, container, search, searchIcon, inputRoot, inputInput } = this.props.classes
    return (
      <AppBar className={appBar} position="static" color="primary">
        <Toolbar className={container}>
          <Typography className={appHeader} variant="h6" color="inherit">
            AlbumsCollection App
          </Typography>
          <div className={search}>
            <div className={searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Enter Album name"
              classes={{
                root: inputRoot,
                input: inputInput
              }}
            />
          </div>
        </Toolbar>
      </AppBar>
    )
  }
}

export default withStyles(styles)(AppHeader)

