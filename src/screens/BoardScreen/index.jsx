import React, { useEffect, useMemo, useState, useTransition } from "react";
import BoardTopBar from "./BoardTopBar";
import BoardInterface from "./BoardInterface";
import { useParams } from "react-router-dom";
import useApp from "../../hook";

function BoardScreen() {
  const { boardID } = useParams();
  const { fetchBoards } = useApp();
  const [singleBoard, setSingleBoard] = useState("");
  const [data, setData] = useState(null);

  useEffect(() => {
    handleTabsData();
  }, []);
  const handleTabsData = () => {
    const dataFetched = fetchBoards();
    setSingleBoard(dataFetched.find((board) => board.id === boardID));
    setData(dataFetched.find((board) => board.id === boardID).tabs);
  };
  const { deleteBoard } = useApp();
  const handleDeleteBoard = (boardId) => {
    if (!window.confirm("Do you want to delete this board ? ")) return;
    deleteBoard(boardId);
  };
  return (
    <>
      <BoardTopBar
        {...singleBoard}
        boardId={singleBoard.id}
        deleteBoard={handleDeleteBoard}
      />
      {!!data && (
        <BoardInterface
          data={data}
          boardId={boardID}
          handleTabsData={handleTabsData}
        />
      )}
    </>
  );
}

export default BoardScreen;
