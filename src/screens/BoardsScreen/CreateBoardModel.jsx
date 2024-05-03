import React, { useEffect } from "react";
import { useState } from "react";
import {
  Dialog,
  Stack,
  Typography,
  Box,
  TextField,
  Button,
} from "@mui/material";
import ModelHeader from "../../layouts/ModelHeader";
import { colors } from "../../theme";
import useApp from "../../hook";

function CreateBoardModel({ closeModal, fetchBoards }) {
  const { CreateBoard } = useApp();
  const [name, setName] = useState("");
  const [color, setColor] = useState(0);
  const handleChange = function (event) {
    setName(event.target.value);
  };
  const handleCreateBoard = async () => {
    try {
      if (!name.trim()) return;
      if (name.length > 20) return;
      const data = await CreateBoard({ name, color });
      if (!data) throw Error("No Board Created");
      await fetchBoards();
      closeModal();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Dialog open onClose={closeModal} fullWidth maxWidth={"xs"}>
      <Stack p={2}>
        <ModelHeader title={"Create Board"} onClose={closeModal} />
        <Stack my={5} spacing={3}>
          <TextField label="Board Name" value={name} onChange={handleChange} />
          <Stack spacing={1.5} direction={"row"}>
            <Typography>Colors:</Typography>

            {colors.map((clr, idx) => (
              <Box
                sx={{
                  cursor: "pointer",
                  border: idx === color ? "3px solid #383838" : "none",
                  outline: `3px solid ${clr}`,
                }}
                onClick={() => setColor(idx)}
                key={clr}
                height={25}
                width={25}
                backgroundColor={clr}
                borderRadius={"50%"}
              />
            ))}
          </Stack>
        </Stack>
        <Button size="large" variant="contained" onClick={handleCreateBoard}>
          Create Board
        </Button>
      </Stack>
    </Dialog>
  );
}

export default CreateBoardModel;
