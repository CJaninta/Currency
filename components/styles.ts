import InputBase from '@material-ui/core/InputBase';

import { withStyles, fade } from "@material-ui/core/styles";

export const StyledTextField = withStyles((theme) => ({
  root: {
    'label + &': {
      marginTop: theme.spacing(3),
    },
  },
  input: {
    borderRadius: '1em',
    position: 'relative',
    backgroundColor: theme.palette.common.white,
    border: '3px solid #e94057',
    fontSize: 20,
    fontFamily: 'Poppins',
    fontWeight: 'bold',
    color: '#e94057',
    padding: '10px 12px',
    transition: theme.transitions.create(['border-color', 'box-shadow']),
    '&:focus': {
      boxShadow: `${fade(theme.palette.secondary.main, 0.25)} 0 0 0 0.2rem`,
      borderColor: '#f27121',
    },
  },
}))(InputBase);




