import React, { useEffect, useMemo, useState, useTransition } from "react";
import BoardTopBar from "./BoardTopBar";
import BoardInterface from "./BoardInterface";
import { useParams } from "react-router-dom";
import useApp from "../../hook";

function BoardScreen() {
  const { boardID } = useParams();
  const { fetchBoards, getSingleBoard, getTask } = useApp();
  const [singleBoard, setSingleBoard] = useState("");
  const [data, setData] = useState(null);

  useEffect(() => {
    handleTabsData();
  }, []);

  const handleTabsData = async () => {
    try {
      const { board } = await getSingleBoard(boardID);
      const tasks = await getTask(boardID);
      setSingleBoard(board);
      setData(tasks);
    } catch (error) {
      console.log(error);
    }
  };
  const { deleteBoard } = useApp();
  const handleDeleteBoard = (boardId) => {
    if (!window.confirm("Do you want to delete this board ? ")) return;
    deleteBoard(boardId);
  };
  return (
    <>
      <BoardTopBar {...singleBoard} deleteBoard={handleDeleteBoard} />

      {!!data && (
        <BoardInterface
          data={data.tasks}
          boardId={boardID}
          handleTabsData={handleTabsData}
        />
      )}
    </>
  );
}

export default BoardScreen;
