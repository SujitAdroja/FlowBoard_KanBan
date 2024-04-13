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
        borderBottom: "5px solid",
        borderColor: `${colors[color]}`,
        bgcolor: "white",
      }}
      position="static"
    >
      <Toolbar sx={{ justifyContent: "space-between" }}>
        <Stack spacing={1} direction={"row"} alignItems={"center"}>
          <IconButton
            onClick={() => {
              navigate("/boards");
            }}
            size="small"
          >
            <LeftArrow />
          </IconButton>
          <Typography variant="h6">{name}</Typography>
        </Stack>
        <Stack spacing={2} direction={"row"} alignItems={"center"}>
          <Typography display={{ xs: "none", sm: "block" }} variant="body2">
            Last Updated : {date}
          </Typography>
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
