import React, {Component} from 'react'
import { withStyles } from '@material-ui/core/styles';
import { fade } from '@material-ui/core/styles/colorManipulator';
import SearchIcon from '@material-ui/icons/Search';
import InputBase from '@material-ui/core/InputBase';
import albumsProvider from '../providers'

const styles = theme => ({
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
  }
})

class SearchInput extends Component {
  render() {
    const { search, searchIcon, inputRoot, inputInput } = this.props.classes
    return (
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
    )
  }
}

export default withStyles(styles)(SearchInput)
