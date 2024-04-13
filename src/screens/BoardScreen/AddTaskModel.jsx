import React, { useState } from "react";
import {
  OutlinedInput,
  Dialog,
  Typography,
  IconButton,
  Stack,
  Chip,
  Button,
  List,
  ListItem,
  Icon,
  Grid,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import AddTaskIcon from "@mui/icons-material/AddCircle";
import { uid } from "uid";

function AddTaskModel({ closeModel, tabName, addTask }) {
  const [text, setText] = useState("");
  const [description, setDescription] = useState("");
  const [taskName, setTaskName] = useState("");
  const [listItems, setListItems] = useState([]);
  return (
    <Dialog open maxWidth={"xs"} fullWidth onClose={closeModel}>
      <Stack p={4}>
        <Stack
          mb={3}
          direction={"row"}
          alignItems={"center"}
          justifyContent={"space-between"}
        >
          <Typography variant="h6">Add Task</Typography>
          <IconButton onClick={closeModel}>
            <CloseIcon />
          </IconButton>
        </Stack>
        <Stack spacing={2}>
          <Stack direction={"row"} alignItems={"center"} spacing={2}>
            <Typography>Status:</Typography>
            <Chip size="small" label={tabName} />
          </Stack>
          <OutlinedInput
            onChange={(e) => setText(e.target.value)}
            value={text}
            placeholder="Task Title"
          />
          <OutlinedInput
            onChange={(e) => setDescription(e.target.value)}
            value={description}
            placeholder="Description"
          />

          <Stack spacing={1}>
            {listItems &&
              listItems.map((item, index) => (
                <Stack
                  fullWidth
                  direction={"row"}
                  alignItems={"center"}
                  justifyContent={"space-between"}
                  bgcolor={"#f5f5f5"}
                  py={1}
                  px={2}
                >
                  <Typography>{item.sTaskName}</Typography>
                  <IconButton
                    onClick={() => {
                      setListItems(
                        listItems.filter(
                          (item, taskIndex) => taskIndex !== index
                        )
                      );
                    }}
                  >
                    <CloseIcon />
                  </IconButton>
                </Stack>
              ))}
          </Stack>

          <Stack direction={"row"} spacing={2}>
            <OutlinedInput
              onChange={(e) => setTaskName(e.target.value)}
              value={taskName}
              placeholder="Task"
            />

            <Button
              variant="contained"
              onClick={() => {
                const task = {
                  sTaskName: taskName,
                  id: uid(),
                  completed: false,
                };
                setListItems([...listItems, task]);
                setTaskName("");
              }}
            >
              Add Task
            </Button>
          </Stack>
          <Button
            variant="contained"
            onClick={() => {
              addTask(text, description, listItems);
            }}
          >
            Add Task
          </Button>
        </Stack>
      </Stack>
    </Dialog>
  );
}

export default AddTaskModel;
