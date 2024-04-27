import { AppBar, Stack, Toolbar, Typography, IconButton } from "@mui/material";
import LeftArrow from "@mui/icons-material/ArrowBack";
import DeleteIcon from "@mui/icons-material/Delete";
import { useNavigate } from "react-router-dom";
import { colors } from "../../theme";
import useApp from "../../hook";
import { memo } from "react";
function BoardTopBar({ name, color, createdAt: date, boardId, deleteBoard }) {
  const navigate = useNavigate();
  return (
    <AppBar
      sx={{
        boxShadow: "none",
        bgcolor: "white",
        mt: "30px",
      }}
      position="static"
    >
      <Toolbar
        sx={{
          padding: "10px !important",
          justifyContent: "space-between",
          alignItems: "start",
        }}
      >
        <Stack spacing={3} direction={"row"} alignItems={"flex-start"}>
          <IconButton
            onClick={() => {
              navigate("/boards");
            }}
            size="small"
          >
            <LeftArrow />
          </IconButton>
          <Stack spacing={1}>
            <Typography variant="h4" color={colors[color]}>
              {name}
            </Typography>
            <Typography display={{ xs: "none", sm: "block" }} variant="body2">
              Last Updated : {date}
            </Typography>
          </Stack>
        </Stack>
        <Stack direction={"row"} mr={2} alignItems={"flex-start"}>
          <IconButton
            size="small"
            onClick={() => {
              deleteBoard(boardId);
            }}
          >
            <DeleteIcon />
          </IconButton>
        </Stack>
      </Toolbar>
    </AppBar>
  );
}

export default memo(BoardTopBar);
