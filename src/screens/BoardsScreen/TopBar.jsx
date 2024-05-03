import React from "react";
import { AppBar, Icon, Toolbar, Typography } from "@mui/material";
import LogoutIcon from "@mui/icons-material/ExitToApp";
import { Stack, Button, useMediaQuery, IconButton } from "@mui/material";
import AcUnitIcon from "@mui/icons-material/AcUnit";
import CreateBoardIcon from "@mui/icons-material/AddCircle";
import { useSelector, useDispatch } from "react-redux";
import { Logout } from "../../feature/login";
import theme from "../../theme";
import { useNavigate } from "react-router-dom";

function TopBar({ openModel }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isXs = useMediaQuery((theme) => theme.breakpoints.only("xs"));
  return (
    <AppBar position="static" sx={{ bgcolor: "white" }}>
      <Toolbar
        sx={{
          justifyContent: "space-between",
        }}
      >
        <Stack direction={"row"} spacing={2} alignItems={"center"}>
          <AcUnitIcon />
          <Typography variant="h5" fontWeight={500} letterSpacing={"1px"}>
            <span style={{ color: "#0CAFFF" }}>Snow</span>Board
          </Typography>
        </Stack>
        <Stack direction={"row"} spacing={2}>
          {isXs ? (
            <>
              <IconButton color="primary" onClick={openModel}>
                <CreateBoardIcon />
              </IconButton>
              <IconButton
                onClick={() => {
                  dispatch(Logout());
                  navigate("/");
                }}
              >
                <LogoutIcon />
              </IconButton>
            </>
          ) : (
            <>
              <Button variant="contained" onClick={openModel}>
                Create Board
              </Button>
              <Button
                startIcon={<LogoutIcon />}
                variant="contained"
                onClick={() => {
                  dispatch(Logout());
                  navigate("/");
                }}
              >
                Log Out
              </Button>
            </>
          )}
        </Stack>
      </Toolbar>
    </AppBar>
  );
}

export default TopBar;
