import React from "react";
import {
  Stack,
  Typography,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  Checkbox,
  ListItemText,
  ListItemIcon,
} from "@mui/material";

import DeleteIcon from "@mui/icons-material/Delete";
import { Draggable } from "react-beautiful-dnd";
function Task({ text, id, removeTask, index, description, tasksList }) {
  return (
    <Draggable draggableId={id} index={index}>
      {(provided) => (
        <Stack
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          spacing={1}
          px={2}
          py={1}
          boxShadow={"0 0 10px rgba(0,0,0,0.1)"}
        >
          <Stack
            justifyContent={"space-between"}
            alignItems={"center"}
            direction={"row"}
            borderRadius={"10px"}
          >
            <Typography fontWeight={600} variant="h6">
              {text}
            </Typography>
            <IconButton onClick={removeTask}>
              <DeleteIcon />
            </IconButton>
          </Stack>
          <Typography mb={1}>{description}</Typography>

          <Stack>
            {tasksList &&
              tasksList.map((task) => (
                <Stack key={task.id} direction={"row"} alignItems={"center"}>
                  <Checkbox />
                  <Typography variant="body2">{task.sTaskName}</Typography>
                </Stack>
              ))}
          </Stack>
        </Stack>
      )}
    </Draggable>
  );
}

export default Task;
