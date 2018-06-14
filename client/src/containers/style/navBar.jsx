import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";
import { connect } from "react-redux";

const styles = {
  root: {
    flexGrow: 1,
    textAlign: "center"
  }
};

// currentUser () => {
//   const logInReducer=this.props
// }
export class SimpleAppBar extends PureComponent {
  render() {
    const { classes, logInReducer } = this.props;
    return (
      <div>
        <AppBar position="static" color="primary" align="center">
          <Toolbar>
            <Typography variant="title" color="inherit">
            
            </Typography>
            {logInReducer &&
              logInReducer.jwt && <Button href="/quizzes">HOME</Button>}
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

// SimpleAppBar.propTypes = {
//   classes: PropTypes.object.isRequired
// };

const mapStateToProps = ({ logInReducer }) => {
  return {
    logInReducer
  };
};
export default connect(mapStateToProps)(SimpleAppBar);
