import { json, useNavigate } from "react-router-dom";
import { uid } from "uid";
import axios from "axios";
import { Task } from "@mui/icons-material";
//commented code is for the local storage purpose create first
// now it is connnected with the data base so no worries
const useApp = () => {
  const date = new Date();

  const navigate = useNavigate();
  const CreateBoard = async ({ name, color }) => {
    // const oldData = JSON.parse(localStorage.getItem("data"));
    // // const newData = [
    // //   {
    // //     id: uid(),
    // //     name,
    // //     color,
    // //     tabs: { notStarted: [], inProgress: [], blocked: [], done: [] },
    // //     createdAt: `${date.toLocaleString("en-us")}`,
    // //   },
    // //   ...oldData,
    // // ];
    // console.log(data);
    // localStorage.setItem("data", JSON.stringify(newData));
    try {
      const newData = {
        name,
        color,
        createdAt: `${date.toLocaleString("en-us")}`,
      };
      const res = await axios.post(
        // "http://localhost:3000/api/v1/boards",
        `https://snowboard-backend-s21l.onrender.com/api/v1/boards`,
        newData
      );
      if (res.status !== 201) throw new Error("Failed to create the board");
      return res.data;
    } catch (error) {
      console.log(error);
    }
  };
  const updateBoardData = async (boardID, tabs) => {
    const oldData = JSON.parse(localStorage.getItem("data"));
    const createdAt = `${date.toLocaleString("en-us")}`;
    // const newData = oldData.map((board) =>
    //   board.id === boardId
    //     ? {
    //         ...board,
    //         tabs,
    //         createdAt: `${date.toLocaleString("en-us")}`,
    //       }
    //     : board
    // );
    const resBoard = await axios.patch(
      // `http://localhost:3000/api/v1/boards/${boardID}`,
      `https://snowboard-backend-s21l.onrender.com/api/v1/boards/${boardID}`,
      { createdAt }
    );
    const res = await axios.patch(
      // `http://localhost:3000/api/v1/tasks/${boardID}`,
      `https://snowboard-backend-s21l.onrender.com/api/v1/tasks/${boardID}`,
      { createdAt, tabs }
    );
    // localStorage.setItem("data", JSON.stringify(newData));
  };
  const fetchBoards = async () => {
    // const data = JSON.parse(localStorage.getItem("data"));
    try {
      // const { data } = await axios.get("http://localhost:3000/api/v1/boards");
      const { data } = await axios.get(
        "https://snowboard-backend-s21l.onrender.com/api/v1/boards"
      );
      return data;
    } catch (error) {
      console.log(error);
    }
  };
  const getSingleBoard = async (boardID) => {
    try {
      const { data } = await axios.get(
        // `http://localhost:3000/api/v1/boards/${boardID}`
        `https://snowboard-backend-s21l.onrender.com/api/v1/boards/${boardID}`
      );
      return data;
    } catch (error) {
      console.log(error);
    }
  };
  const deleteBoard = async (boardId) => {
    // const oldData = JSON.parse(localStorage.getItem("data"));

    // const newData = oldData.filter((board) => board.id !== boardId);

    // localStorage.setItem("data", JSON.stringify(newData));
    // navigate("/boards");
    try {
      const res = await axios.delete(
        // `http://localhost:3000/api/v1/boards/${boardId}`
        `https://snowboard-backend-s21l.onrender.com/api/v1/boards/${boardId}`
      );
      navigate("/boards");
      if (res.statusText !== "OK")
        throw new Error("Not Able to delete the board");
    } catch (error) {
      console.log(error);
    }
  };
  const getTask = async (boardID) => {
    try {
      const { data } = await axios.get(
        // `http://localhost:3000/api/v1/tasks/${boardID}`
        `https://snowboard-backend-s21l.onrender.com/api/v1/tasks/${boardID}`
      );
      return data;
    } catch (error) {
      console.log(error);
    }
  };
  return {
    CreateBoard,
    fetchBoards,
    updateBoardData,
    deleteBoard,
    getSingleBoard,
    getTask,
  };
};
export default useApp;
