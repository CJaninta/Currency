import TextField from "@material-ui/core/TextField";
import { withStyles } from "@material-ui/core/styles";

export const StyledTextField = withStyles({
  root: {
    "& input:valid:focus + fieldset": {
      borderLeftWidth: 6,
      padding: "4px !important", // override inline-style
    },
  },
})(TextField);
