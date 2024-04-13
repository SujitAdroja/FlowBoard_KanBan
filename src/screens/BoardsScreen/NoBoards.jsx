import React from "react";
import { Stack, Typography } from "@mui/material";
function NoBoards() {
  return (
    <Stack mt={15} spacing={1} textAlign={"center"}>
      <Typography variant="h5">No Boards Created</Typography>
      <Typography>Create your First Board</Typography>
    </Stack>
  );
}

export default NoBoards;
