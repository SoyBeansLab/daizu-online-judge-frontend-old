import React from "react";
import Checkbox from "@material-ui/core/Checkbox";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import PropTypes from "prop-types";

export default function CheckBox(props) {
  const [state, setState] = React.useState({
    check: false,
  });
  const handleChange = name => event => {
    setState({ ...state, [name]: event.target.checked });
  };

  return (
    <div>
      <FormControlLabel
        control={
          <Checkbox
            checked={state.check}
            onChange={handleChange("check")}
            value="check"
            color="primary"
            inputProps={{
              "aria-label": "primary checkbox",
            }}
          />
        }
        label={props.checkBoxText}
      />
    </div>
  );
}

CheckBox.propTypes = {
  checkBoxText: PropTypes.string,
};
