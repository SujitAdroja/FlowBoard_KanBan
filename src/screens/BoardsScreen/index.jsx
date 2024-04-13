import React, { useEffect, useState } from "react";
import { Stack, Grid } from "@mui/material";
import TopBar from "./TopBar";
import CreateBoardModel from "./CreateBoardModel";
import BoardCard from "./BoardCard";
import useApp from "../../hook";
import NoBoards from "./NoBoards";

function BoardsScreen() {
  const [showModel, setShowModel] = useState(false);
  const { fetchBoards } = useApp();
  const [boards, setBoards] = useState([]);
  useEffect(() => {
    const data = fetchBoards();
    setBoards(data);
  }, []);
  return (
    <>
      <TopBar openModel={() => setShowModel(true)} />
      {showModel && (
        <CreateBoardModel
          closeModal={() => setShowModel(false)}
          fetchBoards={() => setBoards(fetchBoards())}
        />
      )}

      {!boards.length ? (
        <NoBoards />
      ) : (
        <Stack px={{ sm: 3, xs: 2 }} mt={5}>
          <Grid container spacing={{ sm: 4, xs: 2 }}>
            {boards.map((board, idx) => (
              <BoardCard
                key={board.id}
                name={board.name}
                colorNo={board.color}
                date={board.createdAt}
                {...board}
              />
            ))}
          </Grid>
        </Stack>
      )}
    </>
  );
}

export default BoardsScreen;
