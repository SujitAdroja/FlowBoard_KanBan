import { React, memo } from "react";
import { Grid, Stack, Typography, IconButton } from "@mui/material";
import AddIcon from "@mui/icons-material/AddCircle";
import Task from "./Task";
import Droppable from "../../utils/StrictModeDroppable";
function BoardTab({ name, status, openAddTaskModel, tasks, removeTask }) {
  return (
    <Droppable droppableId={status}>
      {(provided) => (
        <Grid {...provided} ref={provided.innerRef} item xs={12} sm={6} md={3}>
          <Stack bgcolor={"white"} borderRadius={"20px"}>
            <Stack
              p={2}
              alignItems={"center"}
              justifyContent={"space-between"}
              direction={"row"}
              spacing={2}
            >
              <Typography
                bgcolor={`${
                  name === "Blocked"
                    ? "#FFDCE0"
                    : name === "In Progress"
                    ? "#F0E7F6"
                    : name === "Done"
                    ? "#CBDFD8"
                    : "#E1E4E8"
                }`}
                py={0.5}
                px={1}
                borderRadius={"20px"}
                fontWeight={700}
                variant="body2"
              >
                {name}
              </Typography>
              <IconButton onClick={openAddTaskModel}>
                <AddIcon />
              </IconButton>
            </Stack>
            <Stack bgcolor={"white"} p={1} mx={1} mb={2} spacing={2}>
              {tasks.map((task, index) => (
                <Task
                  index={index}
                  status={status}
                  key={task.id}
                  text={task.name}
                  id={task.id}
                  description={task.description}
                  tasksList={task.tasks}
                  removeTask={() => removeTask(status, task.id)}
                />
              ))}
            </Stack>
            {provided.placeholder}
          </Stack>
        </Grid>
      )}
    </Droppable>
  );
}

export default memo(BoardTab);
