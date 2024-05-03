import React, { useState } from "react";
import { Stack, Grid, Typography, IconButton, Box } from "@mui/material";
import OpenIcon from "@mui/icons-material/Launch";
import { colors } from "../../theme";
import { useNavigate } from "react-router-dom";

function BoardCard({ name, colorNo, createdAt, _id }) {
  const [color, setColor] = useState(colors[colorNo]);
  const navigate = useNavigate();

  return (
    <Grid item xs={12} sm={6} md={3}>
      <Stack
        p={2}
        boxShadow={"0 0 10px rgba(0,0,0,0.3)"}
        borderLeft={"5px solid"}
        borderColor={color}
      >
        <Stack
          direction={"row"}
          justifyContent={"space-between"}
          alignItems={"center"}
        >
          <Box width={"50%"}>
            <Typography
              overflow={"hidden"}
              textOverflow={"ellipsis"}
              whiteSpace={"nowrap"}
              fontWeight={400}
              variant="h6"
            >
              {name}
            </Typography>
          </Box>
          <IconButton onClick={() => navigate(`/boards/${_id}`)} size="small">
            <OpenIcon />
          </IconButton>
        </Stack>
        <Typography variant="caption">Created at : {createdAt}</Typography>
      </Stack>
    </Grid>
  );
}

export default BoardCard;
