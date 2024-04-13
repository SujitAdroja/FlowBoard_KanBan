import React, { useCallback, useState } from "react";
import BoardTab from "./BoardTab";
import { Grid } from "@mui/material";
import AddTaskModel from "./AddTaskModel";
import { DragDropContext } from "react-beautiful-dnd";
import { uid } from "uid";
import useApp from "../../hook";
const statusMap = {
  notStarted: "Not Started",
  inProgress: "In Progress",
  blocked: "Blocked",
  done: "Completed",
};
function BoardInterface({ data, boardId, handleTabsData }) {
  const [addTaskTo, setAddTaskTo] = useState("");
  const [tabs, setTabs] = useState(structuredClone(data));
  const { updateBoardData } = useApp();

  const handleOpenAddTaskModel = useCallback(
    (status) => setAddTaskTo(status),
    []
  );
  const handleUpdateBoardData = (dClone) => {
    console.log(dClone);
    updateBoardData(boardId, dClone);
    handleTabsData();
    setTabs(dClone);
  };
  const handleRemoveTask = useCallback(
    (tab, taskId) => {
      const dClone = structuredClone(tabs);
      const taskIdx = dClone[tab].findIndex((t) => t.id === taskId);
      dClone[tab].splice(taskIdx, 1);
      handleUpdateBoardData(dClone);
    },
    [tabs]
  );

  const handleAddTask = (text, description, tasks) => {
    if (!text.trim()) return;
    const dClone = structuredClone(tabs);
    dClone[addTaskTo].unshift({ id: uid(), name: text, description, tasks });
    handleUpdateBoardData(dClone);
    setAddTaskTo("");
  };

  const handleDnd = ({ source, destination }) => {
    if (destination === null) return;
    if (
      source.droppableId === destination.droppableId &&
      source.index === destination.index
    )
      return;

    const dClone = structuredClone(tabs);

    //remove the task from tab;

    const [draggedTask] = dClone[source.droppableId].splice(source.index, 1);

    //add it to the tab
    dClone[destination.droppableId].splice(destination.index, 0, draggedTask);

    handleUpdateBoardData(dClone);
  };

  return (
    <>
      {!!addTaskTo && (
        <AddTaskModel
          tabName={statusMap[addTaskTo]}
          closeModel={() => setAddTaskTo("")}
          addTask={handleAddTask}
        />
      )}
      <DragDropContext onDragEnd={handleDnd}>
        <Grid container mt={2} p={3} spacing={2}>
          {Object.keys(statusMap).map((status) => {
            return (
              <BoardTab
                key={status}
                tasks={data[status]}
                name={statusMap[status]}
                removeTask={handleRemoveTask}
                status={status}
                openAddTaskModel={() => handleOpenAddTaskModel(status)}
              />
            );
          })}
        </Grid>
      </DragDropContext>
    </>
  );
}

export default BoardInterface;
