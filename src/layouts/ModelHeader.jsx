import React from "react";
import { Stack, Typography, IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

function ModelHeader({ title, onClose }) {
  return (
    <Stack
      direction={"row"}
      justifyContent={"space-between"}
      textAlign={"center"}
    >
      <Typography variant="h6">{title}</Typography>
      <IconButton size="small" onClick={onClose}>
        <CloseIcon />
      </IconButton>
    </Stack>
  );
}

export default ModelHeader;
