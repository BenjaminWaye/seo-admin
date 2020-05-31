import React from "react";

import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/styles";

const Header = ({ classes }) => {
  return (
    <div>
      <AppBar className={classes.appBar} color="default">
        <Toolbar>
          <Typography variant="h6" noWrap>
            Your Company name
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
};

const styles = (theme) => ({
  appBar: {
    position: "relative",
  },
});

export default withStyles(styles)(Header);
